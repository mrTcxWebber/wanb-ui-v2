<template>
    <div>
        <div class="vanb-doc-demo-block">
            <w-input placeholder="测试1"></w-input>
        </div>
        <div class="vanb-doc-demo-block">
            <w-input placeholder="测试2" disabled></w-input>
        </div>
        <div class="vanb-doc-demo-block">
            <w-input placeholder="测试3" readonly />
        </div>
        <div class="vanb-doc-demo-block">
            <w-input placeholder="测试4" value="有点怕" error="密码长度为5"></w-input>
        </div>
        <div class="vanb-doc-demo-block">
            <w-input placeholder="测试5" v-model="dbtxt"></w-input>
            <p>{{dbtxt}}</p>
        </div>
        <div class="vanb-doc-demo-block">
            <w-button :loading="loading1" @click="loading1 = !loading1">
                按钮
            </w-button>
            <w-button icon="setting" :loading="loading2" @click="loading2 = !loading2">
                按钮2
            </w-button>
            <w-button icon="setting" icon-position="right" :loading="loading3" @click="loading3 = !loading3">
                按钮3
            </w-button>

            <w-button-group>
                <w-button icon="left">上一页</w-button>
                <w-button>更多</w-button>
                <w-button icon="right" icon-position="right">下一页</w-button>
            </w-button-group>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局 gutter="20"</h3>
            <w-row gutter="20">
                <w-col span="24" :pc="{span:12}" :narrowPc="{span:8}">1</w-col>
                <w-col span="24" :pc="{span:12}" :narrowPc="{span:8}">2</w-col>
                <w-col span="24" :pc="{span:12}" :narrowPc="{span:8}">3</w-col>
            </w-row>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局</h3>
            <w-row>
                <w-col span="12" :narrowPc="{span:8}">1</w-col>
                <w-col span="12" :narrowPc="{span:8}">2</w-col>
                <w-col span="12" :narrowPc="{span:8}">3</w-col>
            </w-row>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局</h3>
            <w-row>
                <w-col span="12" :narrowPc="{span:12,offset:10}">1</w-col>
            </w-row>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局</h3>
            <w-row>
                <w-col span="1" offset="1">1</w-col>
                <w-col span="12" offset="11">1</w-col>
            </w-row>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局</h3>
            <w-container>
                <w-header>header</w-header>
                <w-main>main</w-main>
                <w-footer>footer</w-footer>
            </w-container>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局</h3>
            <w-container>
                <w-header>header</w-header>
                <w-container>
                    <w-aside style="width:200px;">aside</w-aside>
                    <w-main>main</w-main>
                </w-container>
                <w-footer>footer</w-footer>
            </w-container>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局</h3>
            <w-container>
                <w-header>header</w-header>
                <w-container>
                    <w-main>main</w-main>
                    <w-aside style="width:200px;">aside</w-aside>
                </w-container>
                <w-footer>footer</w-footer>
            </w-container>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>Layout布局</h3>
            <w-container>
                <w-header>header</w-header>
                <w-aside style="width:200px;">aside</w-aside>
                <w-container>
                    <w-main>main</w-main>
                </w-container>
                <w-footer>footer</w-footer>
            </w-container>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>Toast布局</h3>
            <w-button @click="showToast1">
                弹出toast - top
            </w-button>
            <w-button @click="showToast2">
                弹出toast - middle
            </w-button>
            <w-button @click="showToast3">
                弹出toast - bottom
            </w-button>
            <w-button @click="showToast4">
                弹出toast - text
            </w-button>
            <w-button @click="showToast5">
                toast 倒计时
            </w-button>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>tabs</h3>
            <w-tabs style="width:360px;" v-model="tabActive">
                <w-tab title="标签1" index="0">内容 1</w-tab>
                <w-tab title="标签2" index="1">内容 2</w-tab>
                <w-tab title="标签3" index="2">内容 3</w-tab>
                <w-tab title="标签4" index="3">内容 4</w-tab>
                <!-- <w-tab title="标签5" index="4">内容 5</w-tab>
                <w-tab title="标签6" index="5">内容 6</w-tab> -->
            </w-tabs>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>tabs 标签数量超过 5 个时，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。</h3>
            <w-tabs style="width:360px;" v-model="tabActive" @disabled="tabsDisabled" @click="tabsClick">
                <w-tab title="标签1" index="0">内容 1</w-tab>
                <w-tab title="标签2" index="1">内容 2</w-tab>
                <w-tab title="标签3" index="2" disabled>内容 3</w-tab>
                <w-tab title="标签4" index="3">内容 4</w-tab>
                <w-tab title="标签5" index="4">内容 5</w-tab>
                <w-tab title="标签6" index="5">内容 6</w-tab>
                <w-tab title="标签7" index="6">内容 7</w-tab>
                <w-tab title="标签8" index="7">内容 8</w-tab>
                <w-tab title="标签9" index="8">内容 9</w-tab>
            </w-tabs>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>tabs 切换动画</h3>
            <w-tabs style="width:360px;" v-model="tabActive" animated>
                <w-tab title="标签1" index="0">内容 1</w-tab>
                <w-tab title="标签2" index="1">内容 2</w-tab>
                <w-tab title="标签3" index="2">内容 3</w-tab>
                <w-tab title="标签4" index="3">内容 4</w-tab>
            </w-tabs>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>collapse 折叠面板 基础用法</h3>
            <w-collapse v-model="activeNamesA" style="width:360px;">
                <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
                <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
                <w-collapse-item title="标题3" name="3" disabled>内容3</w-collapse-item>
            </w-collapse>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>collapse 折叠面板 手风琴</h3>
            <w-collapse v-model="activeNamesB" accordion style="width:360px;">
                <w-collapse-item title="标题1" name="1">内容1</w-collapse-item>
                <w-collapse-item title="标题2" name="2">内容2</w-collapse-item>
                <w-collapse-item title="标题3" name="3" disabled>内容3</w-collapse-item>
            </w-collapse>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>popover hover</h3>
            <w-popover position="bottom" trigger="hover">
                <template slot="content">
                    <div>askdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
                    <div>askdjsakdjsakjdslkjdlskjdlsjkdlskjdlsjkdlskjdlsajkdlajkdlkajdlksajdladjk</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="top" trigger="hover">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="left" trigger="hover">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="right" trigger="hover">
                <template slot="content">
                    <div>popover <a href="http://qq.com">看新网</a> 内容</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
        </div>
        <div class="vanb-doc-demo-block">
            <h3>popover</h3>
            <w-popover position="bottom">
                <template slot="content" slot-scope="{close}">
                    <div>文字</div>
                    <div>popover <a href="http://qq.com">看新网</a> 内容</div>
                    <w-button @click="close">关闭</w-button>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="top">
                <template slot="content">
                    <div>popover内容
                        <w-button>关闭</w-button>
                    </div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="left">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
            <w-popover position="right">
                <template slot="content">
                    <div>popover内容</div>
                </template>
                <w-button>点我</w-button>
            </w-popover>
        </div>

    </div>
</template>
<script>
    // 一般引入组件首字母大写
    import wButton from "./button.vue"
    import wButtonGroup from "./button-group.vue"
    import wInput from "./input.vue"
    import wRow from "./row.vue"
    import wCol from "./col.vue"
    import wContainer from "./container.vue"
    import wHeader from "./header.vue"
    import wMain from "./main.vue"
    import wAside from "./aside.vue"
    import wFooter from "./footer.vue"
    import wTabs from "./tabs.vue"
    import wTab from "./tab.vue"
    import wCollapse from "./collapse.vue"
    import wCollapseItem from "./collapse-item.vue"
    import wPopover from "./popover.vue"


    export default {
        name: 'app',
        components: {
            wButton, wButtonGroup, wInput, wRow, wCol,
            wContainer,
            wHeader,
            wMain,
            wAside,
            wFooter,
            wTabs,
            wTab,
            wCollapse,
            wCollapseItem,
            wPopover
        },
        data() {
            return {
                loading1: false,
                loading2: true,
                loading3: false,
                dbtxt: '',
                tabActive: 3,
                activeNamesA: [],
                activeNamesB: ''
            }
        },
        watch: {
        },
        methods: {
            showToast1() {
                // this.$toast('<strong>加粗文字</strong>')
                this.$toast({
                    message: '测试12',
                    type: 'loading',
                    position: 'top',
                    // duration: 0,
                    forbidClick: true,
                    closeOnClick: true,
                    onClose() {
                        console.log('准备关闭了')
                    }
                })
            },
            showToast2() {
                this.$toast({
                    message: '测试2222',
                    type: 'success',
                    position: 'middle',
                    // duration: 0,
                    forbidClick: true,
                    closeOnClick: true,
                    onClose() {
                        console.log('准备关闭了2')
                    }
                })
            },
            showToast3() {
                this.$toast('这里可以覆盖默认的', {
                    message: '测试333',
                    type: 'html',
                    position: 'bottom',
                    // duration: 0,
                    forbidClick: true,
                    // closeOnClick: true,
                    onClose() {
                        console.log('准关闭了3覆盖')
                    }
                })
            },
            showToast4() {
                this.$toast({
                    message: '测试文本',
                    // position: 'bottom',
                    duration: 3000,
                    // forbidClick: true,
                    // closeOnClick: true,
                    // onClose(){
                    //     console.log('准备关闭了3')
                    // }
                })
            },
            showToast5() {
                const toast = this.$toast({
                    message: '倒计时 3 秒',
                    duration: 0,
                    forbidClick: true
                })
                let second = 3;
                const timer = setInterval(() => {
                    second--;
                    if (second) {
                        toast.message = `倒计时 ${second} 秒`;
                    } else {
                        clearInterval(timer);
                        // 手动清除 Toast
                        toast.isShow = false;
                        toast.closeToast();
                    }
                }, 1000);
            },
            tabsDisabled(index, title) {
                console.log(`第${index}个被禁用了, ${title}`);
            },
            tabsClick(index, title) {
                console.log(`${title} 被我点击了，是第${index}个`);
            }
        },
    }
    // import Vue from 'vue'
    // import chai from 'chai'
    // import spies from 'chai-spies'
    // chai.use(spies)

    // const expect = chai.expect
    // // 测试传入icon之后有没有出现icon
    // {
    //     const ContentComponent = Vue.extend({
    //         props: ['icon'],
    //         // components: { wButton },
    //         // template: '<w-button>unit test1</w-button>',
    //         render: function (h) {
    //             // console.log(this.icon)
    //             return h(wButton, { props: { icon: this.icon } }, ['unit test1'])
    //             // return h(wButton, '10')
    //         },
    //         mounted() {
    //             // console.log(this.icon);
    //         }
    //     })
    //     const button = new ContentComponent({
    //         propsData: {
    //             icon: 'right'
    //         }
    //     })
    //     // console.log(button)
    //     button.$mount('#test')
    //     let useElement = button.$el.querySelector('use')
    //     let href = useElement.getAttribute('xlink:href')
    //     expect(href).to.eq('#i-right')
    //     button.$el.remove()
    //     button.$destroy()
    // }
    // {
    //     // 测试有没有loading的icon
    //     const div = document.createElement('div');
    //     div.id = 'test2'
    //     document.body.appendChild(div)
    //     const ContentComponent = Vue.extend({
    //         props: ['loading', 'icon'],
    //         render: function (h) {
    //             return h(wButton, { props: { icon: this.icon, loading: this.loading } }, ['btn2'])
    //         }
    //     })
    //     const button = new ContentComponent({
    //         propsData: {
    //             loading: true,
    //             icon: 'left'
    //         }
    //     })
    //     button.$mount('#test2')
    //     console.log(button);
    //     const useElement = button.$el.querySelector('use')
    //     const href = useElement.getAttribute('xlink:href')
    //     expect(href).to.equal('#i-loading')
    //     button.$el.remove()
    //     button.$destroy()
    //     // div.remove()
    // }
    // {
    //     // 测试icon的order是1
    //     const ContentComponent = Vue.extend({
    //         props: ['icon'],
    //         render(h) {
    //             return h(wButton, { props: { icon: this.icon } }, ['btn3'])
    //         }
    //     })
    //     const button = new ContentComponent({
    //         propsData: {
    //             icon: 'setting'
    //         }
    //     })
    //     const div = document.createElement('div')
    //     div.id = 'test4'
    //     document.body.appendChild(div)
    //     button.$mount('#test4')
    //     const svg = button.$el.querySelector('svg')
    //     const { order } = window.getComputedStyle(svg)
    //     // console.log(order);
    //     expect(order).to.equal('1')
    //     button.$el.remove()
    //     button.$destroy()
    // }
    // {
    //     // 测试icon的order是2
    //     const div = document.createElement('div')
    //     div.id = 'test5'
    //     document.body.appendChild(div)
    //     const ContentComponent = Vue.extend({
    //         props: ['icon', 'iconPosition'],
    //         render(h) {
    //             return h(wButton, { props: { icon: this.icon, iconPosition: this.iconPosition } }, ['btn3'])
    //         }
    //     })
    //     const button = new ContentComponent({
    //         propsData: {
    //             icon: 'setting',
    //             iconPosition: 'right'
    //         }
    //     })
    //     button.$mount('#test5')
    //     const svg = button.$el.querySelector('svg')
    //     const { order } = window.getComputedStyle(svg)
    //     // console.log(order);
    //     expect(order).to.equal('2')
    //     button.$el.remove()
    //     button.$destroy()
    // }
    // {
    //     // 测试button的点击事件
    //     const div = document.createElement('div')
    //     div.id = 'test6'
    //     document.body.appendChild(div)
    //     const Constructor = Vue.extend(wButton)
    //     const vm = new Constructor({
    //         propsData: {
    //             icon: 'setting',
    //         }
    //     })
    //     vm.$mount('#test6')
    //     // button.$on('click', function () {
    //     //     console.log('111111');
    //     //     expect(1).to.eq(1)
    //     // })
    //     let spy = chai.spy(function () { console.log(11111) })

    //     vm.$on('click', spy)
    //     // 希望这个函数被执行
    //     console.log(vm);
    //     let button = vm.$el
    //     button.click()
    //     expect(spy).to.have.been.called()
    // }
</script>
<style lang="scss">
    .vanb-doc-demo-block {
        margin: 15px;

        h3 {
            margin-bottom: 10px;
        }

        .col {
            margin-bottom: 10px;
            color: #fff;
            font-size: 13px;
            line-height: 30px;
            text-align: center;
            background-clip: content-box;

            &:nth-child(even) {
                background-color: #66c6f2;
            }

            &:nth-child(odd) {
                background-color: #39a9ed;
            }
        }

        .v-container {
            text-align: center;
        }

        .v-footer,
        .v-header {
            background-color: #b3c0d1;
            color: #333;
            line-height: 60px;
        }

        .v-aside {
            background-color: #d3dce6;

            line-height: 200px;
        }

        .v-main {
            background-color: #e9eef3;
            color: #333;
            line-height: 160px;
        }
    }
</style>