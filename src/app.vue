<template>
    <div>
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
</template>
<script>
    import wButton from "./button.vue"
    import wButtonGroup from "./button-group.vue"
    export default {
        name: 'app',
        components: { wButton, wButtonGroup },
        data() {
            return {
                loading1: false,
                loading2: true,
                loading3: false
            }
        },
        methods: {
        },
    }
    import Vue from 'vue'
    import chai from 'chai'
    import spies from 'chai-spies'
    chai.use(spies)

    const expect = chai.expect
    // 测试传入icon之后有没有出现icon
    {
        const ContentComponent = Vue.extend({
            props: ['icon'],
            // components: { wButton },
            // template: '<w-button>unit test1</w-button>',
            render: function (h) {
                // console.log(this.icon)
                return h(wButton, { props: { icon: this.icon } }, ['unit test1'])
                // return h(wButton, '10')
            },
            mounted() {
                // console.log(this.icon);
            }
        })
        const button = new ContentComponent({
            propsData: {
                icon: 'right'
            }
        })
        // console.log(button)
        button.$mount('#test')
        let useElement = button.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-right')
        button.$el.remove()
        button.$destroy()
    }
    {
        // 测试有没有loading的icon
        const div = document.createElement('div');
        div.id = 'test2'
        document.body.appendChild(div)
        const ContentComponent = Vue.extend({
            props: ['loading', 'icon'],
            render: function (h) {
                return h(wButton, { props: { icon: this.icon, loading: this.loading } }, ['btn2'])
            }
        })
        const button = new ContentComponent({
            propsData: {
                loading: true,
                icon: 'left'
            }
        })
        button.$mount('#test2')
        console.log(button);
        const useElement = button.$el.querySelector('use')
        const href = useElement.getAttribute('xlink:href')
        expect(href).to.equal('#i-loading')
        button.$el.remove()
        button.$destroy()
        // div.remove()
    }
    {
        // 测试icon的order是1
        const ContentComponent = Vue.extend({
            props: ['icon'],
            render(h) {
                return h(wButton, { props: { icon: this.icon } }, ['btn3'])
            }
        })
        const button = new ContentComponent({
            propsData: {
                icon: 'setting'
            }
        })
        const div = document.createElement('div')
        div.id = 'test4'
        document.body.appendChild(div)
        button.$mount('#test4')
        const svg = button.$el.querySelector('svg')
        const { order } = window.getComputedStyle(svg)
        // console.log(order);
        expect(order).to.equal('1')
        button.$el.remove()
        button.$destroy()
    }
    {
        // 测试icon的order是2
        const div = document.createElement('div')
        div.id = 'test5'
        document.body.appendChild(div)
        const ContentComponent = Vue.extend({
            props: ['icon', 'iconPosition'],
            render(h) {
                return h(wButton, { props: { icon: this.icon, iconPosition: this.iconPosition } }, ['btn3'])
            }
        })
        const button = new ContentComponent({
            propsData: {
                icon: 'setting',
                iconPosition: 'right'
            }
        })
        button.$mount('#test5')
        const svg = button.$el.querySelector('svg')
        const { order } = window.getComputedStyle(svg)
        // console.log(order);
        expect(order).to.equal('2')
        button.$el.remove()
        button.$destroy()
    }
    {
        // 测试button的点击事件
        const div = document.createElement('div')
        div.id = 'test6'
        document.body.appendChild(div)
        const Constructor = Vue.extend(wButton)
        const vm = new Constructor({
            propsData: {
                icon: 'setting',
            }
        })
        vm.$mount('#test6')
        // button.$on('click', function () {
        //     console.log('111111');
        //     expect(1).to.eq(1)
        // })
        let spy = chai.spy(function () { console.log(11111) })

        vm.$on('click', spy)
        // 希望这个函数被执行
        console.log(vm);
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
</script>
<style lang="scss">

</style>