const expect = chai.expect;
import Vue from 'vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {

    it('存在.', () => {
        expect(Col).to.exist
    })
    it('接收 span 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend({
            props: ['span'],
            render: function (h) {
                return h(Col, { props: { span: this.span } })
            }
        })
        const vm = new Constructor({
            propsData: {
                span: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend({
            props: ['offset'],
            render: function (h) {
                return h(Col, { props: { offset: this.offset } })
            }
        })
        const vm = new Constructor({
            propsData: {
                offset: 1
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('offset-1')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend({
            props: ['pc'],
            render: function (h) {
                return h(Col, { props: { pc: this.pc } })
            }
        })
        const vm = new Constructor({
            propsData: {
                pc: { span: 1, offset: 2 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-pc-1')).to.eq(true)
        expect(element.classList.contains('offset-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 ipad 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend({
            props: ['ipad'],
            render: function (h) {
                return h(Col, { props: { ipad: this.ipad } })
            }
        })
        const vm = new Constructor({
            propsData: {
                ipad: { span: 1, offset: 2 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-ipad-1')).to.eq(true)
        expect(element.classList.contains('offset-ipad-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 narrow-pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend({
            props: ['narrowPc'],
            render: function (h) {
                return h(Col, { props: { narrowPc: this.narrowPc } })
            }
        })
        const vm = new Constructor({
            propsData: {
                narrowPc: { span: 1, offset: 2 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-narrow-pc-1')).to.eq(true)
        expect(element.classList.contains('offset-narrow-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 wide-pc 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend({
            props: ['widePc'],
            render: function (h) {
                return h(Col, { props: { widePc: this.widePc } })
            }
        })
        const vm = new Constructor({
            propsData: {
                widePc: { span: 1, offset: 2 }
            }
        }).$mount(div)
        const element = vm.$el
        expect(element.classList.contains('col-wide-pc-1')).to.eq(true)
        expect(element.classList.contains('offset-wide-pc-2')).to.eq(true)
        div.remove()
        vm.$destroy()
    })

})