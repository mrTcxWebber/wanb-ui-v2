const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/row.vue'
import Col from '../src/col.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {

    it('存在', () => {
        expect(Row).to.exist;
    })

    it('接收 gutter 属性', () => {

        const div = document.createElement('div')
        div.id = 'qnm';
        document.body.appendChild(div)
        const RowConstructor = Vue.extend({
            props: ['gutter'],
            render: function (h) {
                return h(Row, { props: { gutter: this.gutter } }, [h(Col)])
            },
        })
        const vm = new RowConstructor({
            propsData: {
                gutter: '10'
            }
        })
        vm.$mount(div)
        // console.log(vm.$el, 66)
        // console.log(div.outerHTML, 66);
        // const row = vm.$el.querySelector('.row')
        expect(getComputedStyle(vm.$el).marginLeft).to.eq('-5px')
        const col = vm.$el.querySelector('.col')
        expect(getComputedStyle(col).paddingLeft).to.eq('5px')
        vm.$el.remove()
        vm.$destroy()
    })

    it('接收 align 属性', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend({
            props: ['align'],
            render: function (h) {
                return h(Row, { props: { align: this.align } })
            }
        })
        const vm = new Constructor({
            propsData: {
                align: 'right'
            }
        }).$mount(div)
        const element = vm.$el
        expect(getComputedStyle(element).justifyContent).to.equal('flex-end')
        div.remove()
        vm.$destroy()
    })

})