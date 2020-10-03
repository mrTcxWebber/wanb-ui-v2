<template>
    <transition name="wanb-fade" appear>
        <div class="w-toast" v-show="isShow" :class="toastClasses" @click="onClick">
            <i v-if="['html','text'].indexOf(type) === -1" class="icon" :class="{loading: type=='loading'}">
                <w-icon :name="type"></w-icon>
            </i>
            <div class="w-toast-txt">{{message}}</div>
        </div>
    </transition>
</template>

<script>
import { log } from 'util'
    import wIcon from './icon.vue'
    export default {
        name: 'wToast',
        props: {
            message: {
                type: String,
                default: ''
            },
            type: {
                // loading success,error,info,setting,text, html
                type: String,
                default: 'text'
            },
            position: {
                type: String,
                default: 'middle',
                validator (value) {
                    return ['top','middle','bottom'].indexOf(value) !== -1
                }
            },
            overlay: { // 是否显示遮罩层
                type: Boolean,
                default: false
            },
            forbidClick: { // 是否禁止背景点击
                type: Boolean,
                default: false
            },
            duration: { // 默认2秒自动关闭
                type: [Number, String],
                default: 2000
            },
            closeOnClick: { // 是否点击toast后关闭
                type: Boolean,
                default: false
            },
            onClose: Function // 关闭后回调
        },
        components: {
            wIcon
        },
        data(){
            return {
                cId: 0,
                isShow: true
            }
        },
        mounted(){
            this.init()
        },
        destroyed() {
            this.forbidClick && document.body.classList.remove('w-toast--unclickable')
        },
        watch: {
            cId(val){
                if(this.isShow) {
                    this.init()
                }
            },
            isShow(val){
                if(!val) {
                    this.forbidClick && document.body.classList.remove('w-toast--unclickable')
                }
            }
        },
        computed: {
            toastClasses(){
                return [`w-toast-${this.position}`,`w-toast-${this.type}`]
            }
        },
        methods: {
            init(){
                if(this.forbidClick) {
                    document.body.classList.add('w-toast--unclickable')
                }
                if(this.closeOnClick) return
                if(this.duration != 0) {
                    setTimeout(()=>{
                        if(this.forbidClick) {
                            document.body.classList.remove('w-toast--unclickable')
                        }
                        this.onClose && this.onClose()
                        this.isShow = false
                        // this.closeToast()
                    }, parseInt(this.duration))
                }
            },
            closeToast(){
                this.onClose && this.onClose()
                this.$emit('close')
                // this.$el.remove()
                // this.$destroy()
            },
            onClick(){
                if(this.closeOnClick) {
                    if(this.forbidClick) {
                        document.body.classList.remove('w-toast--unclickable')
                    }
                    this.onClose && this.onClose()
                    this.isShow = false
                    // this.$emit('close')
                    // this.closeToast()
                }
            }
        }
    }
</script>

<style lang="scss">
    $toast-animation-duration: .5s;
    $toast-color: #fff;
    $min-size: 88px;
    @-webkit-keyframes wanb-fade-in{0%{opacity:0}to{opacity:1}}
    @-webkit-keyframes wanb-fade-out{0%{opacity:1}to{opacity:0}}
    .wanb-fade-enter-active{
        -webkit-animation:$toast-animation-duration wanb-fade-in;
        animation:$toast-animation-duration wanb-fade-in;
    }
    .wanb-fade-leave-active{
        -webkit-animation:$toast-animation-duration wanb-fade-out;
        animation:$toast-animation-duration wanb-fade-out;
    }
    @keyframes spin {
        0% {
        transform: rotate(0deg);
        }

        100% {
        transform: rotate(360deg);
        }
    }
    .w-toast {
        position: fixed;
        left: 50%;
        top: 50%;
        z-index: 2020;
        min-width: $min-size;
        min-height: $min-size;
        background-color: rgba(0,0,0,.7);
        line-height: 22px;text-align: center;
        box-sizing: content-box;
        padding: 16px;border-radius: 8px;font-size: 14px;color: $toast-color;text-align: center;
        -webkit-transform: translate3d(-50%, -50%, 0);
        transform: translate3d(-50%,-50%,0);
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &.w-toast-top {
            top: 20%;   
        }
        &.w-toast-bottom {
            top:auto;
            bottom: 20%;   
        }
        >.icon {
            font-size: 36px;
            fill: $toast-color;
            &+.w-toast-txt {
                margin-top: 8px;
            }
        }
        >.loading {
            animation: spin 2s infinite linear;
        }
        &.w-toast-text,&.w-toast-html {
            padding: 8px 12px;
            min-height: 30px;
        }

    }
    .w-toast--unclickable {
        overflow: hidden;
        :not(.w-toast) {
            pointer-events: none;
        }
    }
</style>