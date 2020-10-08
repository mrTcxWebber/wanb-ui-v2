<template>
    <div class="w-tabs" :class="{'w-tabs-line':type == 'line'}">
        <div class="w-tabs-head" :class="{'w-tabs-head__scrollable': scrollable}">
            <div class="w-tabs-nav" ref="nav" role="tablist" :class="{'w-tabs-nav-line': type == 'line','w-tabs-nav__scrollable': scrollable}">
                <div 
                    ref="titles"
                    class="w-tab" 
                    :class="{'w-tab-active':curIndex == index,'w-tab-disabled': item.disabled}" 
                    v-for="(item,index) in nav" 
                    :key="index"
                    @click="onClick(index)"
                >
                    <span class="w-tab-text ellipsis">{{item.title}}</span>
                </div>
                <div class="w-tabs__line" :style="lineStyle"></div>
            </div>
        </div>
        <div class="w-tabs-body" :class="{'w-tabs-animated':animated}">
            <div class="w-tabs-track" :style="trackStyle" v-if="animated">
                <slot></slot>
            </div>
            <template v-else><slot></slot></template>
        </div>
    </div>
</template>

<script>
    import { scrollLeftTo } from './tabs-utils.js'
    
    export default {
        name: 'wTabs',
        model: {
            prop: 'selecte',
            event: 'selected'
        },
        provide(){
            return {
                currentVm: this
            }
        },
        props: {
            type: {
                type: String,
                default: 'line'
            },
            selecte: {
                type: [Number,String],
                default: 0
            },
            swipeThreshold: { // 
                type: [Number, String],
                default: 5
            },
            animated: {
                type: Boolean,
                default: false
            }
        },
        components: {
        },
        data(){
            return {
                curIndex: this.selecte,
                lineStyle: {},
                nav: []
            }
        },
        mounted(){ 
            this.createNav()
            this.setLine()
            this.scrollIntoView(true)
        },
        destroyed() {
        },
        watch: {
            curIndex(){
                this.setLine()
                this.scrollIntoView()
       
            }
        },
        computed: {
            scrollable(){
                return this.nav.length > this.swipeThreshold
            },
            trackStyle(){
                if (this.animated) {
                    return {
                        transform: `translate3d(${-1 * this.curIndex * 100}%, 0, 0)`,
                        transitionDuration: '0.3s'
                    };
                }
                return {}
            }
        },
        methods: {
            createNav(){
                if(!this.$children.length) return
                this.nav = this.$children.map((item,index)=>{
                    // return `<span class="w-tab-text ellipsis">${item.title}</span>`
                    return item
                })
            },
            onClick(index){
                if(this.$children[index].disabled) {
                    this.$emit('disabled',index,this.$children[index].title)
                    return
                }
                this.curIndex = index
                this.$emit('selected',index)
                this.$emit('click',index, this.$children[index].title)
            },
            setLine(){
                this.$nextTick(()=>{
                    const title = this.$refs.titles[this.curIndex]
                    if(!title) return
                    const left = title.offsetLeft + title.offsetWidth / 2
                   
                    this.lineStyle = {
                        transform: `translateX(${left}px) translateX(-50%)`,
                        transitionDuration: `0.3s`
                    }
                })
            },
            scrollIntoView(immediate) { // scroll active tab into view
                const { titles } = this.$refs;

                if (!this.scrollable || !titles || !titles[this.curIndex]) {
                    return;
                }
                const { nav } = this.$refs;
                const title = titles[this.curIndex];
                const to = title.offsetLeft - (nav.offsetWidth - title.offsetWidth) / 2;
                // console.log(to);
                scrollLeftTo(nav, to, immediate ? 0 : 0.3);
            }
        }
    }
</script>

<style lang="scss" >
    $tabs-head-height: 44px;
    $tabs-head-bgColor: #fff;
    $tab-color: #646566;
    $tab-lineHeight: 20px;
    $tab-fontSize: 14px;
    $tab-active-color: #333;
    $tabs-line-color: #ee0a24;
    .ellipsis {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .w-tabs {
        position: relative;

        .w-tabs-head {
            overflow: hidden;
            height: $tabs-head-height;
        }
        .w-tabs-head__scrollable {
            
            .w-tabs-nav {
                overflow-x: auto;
                overflow-y: hidden;
                -webkit-overflow-scrolling: touch;
            }
            .w-tabs-nav::-webkit-scrollbar {
                display: none
            }
            .w-tabs-nav__scrollable{
                padding-right: 8px;
                padding-left: 8px;
            }
            .w-tab {
                -webkit-box-flex: 1;
                -webkit-flex: 1 0 auto;
                flex: 1 0 auto;
                padding: 0 12px;
            }
        }
        .w-tabs__line {
            position: absolute;
            bottom: 15px;
            left: 0;
            z-index: 1;
            width: 40px;
            height: 3px;
            background-color: $tabs-line-color;
            border-radius: 3px;
        }
        .w-tabs-nav {
            position: relative;
            display: flex;
            background-color: $tabs-head-bgColor;
            // background:darkcyan;
            -webkit-user-select: none;
            user-select: none;
        }
        .w-tabs-nav-line {
            height: 100%;
            padding-bottom: 15px;
            box-sizing: content-box;
        }
        .w-tab {
            position: relative;
            display: flex;
            flex:1;
            justify-content: center;
            align-items: center;
            box-sizing: border-box;
            padding: 0 4px;
            color: $tab-color;
            font-size: $tab-fontSize;
            line-height: $tab-lineHeight;
            cursor: pointer;

            &.w-tab-active {
                color: $tab-active-color;
                font-weight: 600;
            }
            &.w-tab-disabled {
                color: #c8c9cc;
                cursor: not-allowed;
            }
        }
    }
    .w-tabs-body {


        .w-tab {
            cursor: initial;
        }
    }
    .w-tabs-animated {
        overflow: hidden;
    }
    .w-tabs-track {
        position: relative;
        display: -webkit-box;
        display: -webkit-flex;
        display: flex;
        width: 100%;
        height: 100%;
        will-change: transform;
    }
</style>