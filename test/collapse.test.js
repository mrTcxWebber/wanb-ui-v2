const expect = chai.expect;
import Vue from 'vue'
import collapse from '../src/collapse.vue'
import collapseItem from '../src/collapse-item.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('collapse', () => {
    it('存在', () => {
        expect(collapse).to.exist
        expect(collapseItem).to.exist
    })

    describe('collapse-props', () => {

        it('接收 accordion', (done) => {
            const Constructor = Vue.extend({
                props: ['selected', 'accordion'],
                render: function (h) {
                    let child = []
                    for (let i = 0; i < 2; i++) {
                        child.push(h(collapseItem, { props: { name: `${i + 1}` } }, `测试${i + 1}`))
                    }
                    return h(collapse, { props: { selected: this.selected, accordion: this.accordion } }, child)
                }
            })
            const vm = new Constructor({
                el: document.createElement('div'),
                propsData: {
                    selected: '2',
                    accordion: true
                }
            })
            vm.$el.querySelectorAll('.w-collapse-head')[1].click()
            setTimeout(() => {
                const wrap = vm.$el.querySelectorAll('.w-collapse-head')[0]
                expect(wrap.classList.contains('active')).to.eq(false)
                const wrap2 = vm.$el.querySelectorAll('.w-collapse-head')[1]
                expect(wrap2.classList.contains('active')).to.eq(true)
                vm.$el.remove()
                vm.$destroy()
                done()
            }, 600);
        })
        it('接收 selected', () => {
            const Constructor = Vue.extend({
                props: ['selected'],
                render: function (h) {
                    let child = []
                    for (let i = 0; i < 2; i++) {
                        child.push(h(collapseItem, { props: { name: `${i + 1}` } }, `测试${i + 1}`))
                    }
                    return h(collapse, { props: { selected: this.selected } }, child)
                }
            })
            const vm = new Constructor({
                el: document.createElement('div'),
                propsData: {
                    selected: ['1']
                }
            })
            const wrap = vm.$el.querySelectorAll('.w-collapse-head')[0]
            expect(wrap.classList.contains('active')).to.eq(true)
            const wrap2 = vm.$el.querySelectorAll('.w-collapse-head')[1]
            expect(wrap2.classList.contains('active')).to.eq(false)
            vm.$el.remove()
            vm.$destroy()
        })
        it('接收 disabled', (done) => {
            const Constructor = Vue.extend({
                props: ['selected'],
                render: function (h) {
                    return h(collapse, { props: { selected: this.selected } }, [h(collapseItem, { props: { name: '1', disabled: true } }, '测试啊')])
                }
            })
            const vm = new Constructor({
                el: document.createElement('div'),
                propsData: {
                    selected: ['1']
                }
            })
            vm.$el.querySelectorAll('.w-collapse-head')[0].click()
            setTimeout(() => {
                const wrap = vm.$el.querySelectorAll('.w-collapse-head')[0]
                expect(wrap.classList.contains('active')).to.eq(false)
                vm.$el.remove()
                vm.$destroy()
                done()
            }, 600);
        })
    })

})