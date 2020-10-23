const expect = chai.expect;
import Vue from 'vue'
import tabs from '../src/tabs.vue'
import tab from '../src/tab.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('tab', () => {
    it('存在', () => {
        expect(tabs).to.exist
        expect(tab).to.exist
    })

    describe('tabs-props', () => {

        it('接收 v-model', (done) => {
            const Constructor = Vue.extend({
                props: ['selecte'],
                render: function (h) {
                    let child = []
                    for (let i = 0; i < 5; i++) {
                        child.push(h(tab, { props: { title: `${i + 1}`, index: `${i}` } }, `内容${i + 1}`))
                    }
                    return h(tabs, { props: { selecte: this.selecte } }, child)
                }
            })
            const tabActive = 2
            const vm = new Constructor({
                el: document.createElement('div'),
                data() {
                    return {
                        tabActive
                    }
                },
                propsData: {
                    selecte: tabActive
                }
            })
            setTimeout(() => {
                vm.$el.querySelectorAll('.w-tab')[0].click()
                setTimeout(() => {
                    expect(vm.$el.querySelectorAll('.w-tab')[0].classList.contains('w-tab-active')).to.eq(true)
                    // expect(vm.tabActive).to.eq(0)
                    vm.$el.remove()
                    vm.$destroy()
                    done()
                }, 500);
            }, 400);
        })
        it('接收 swipeThreshold', (done) => {
            const Constructor = Vue.extend({
                props: ['selecte', 'swipeThreshold'],
                render: function (h) {
                    let child = []
                    for (let i = 0; i < 6; i++) {
                        child.push(h(tab, { props: { title: `${i + 1}`, index: `${i}` } }, `内容${i + 1}`))
                    }
                    return h(tabs, { props: { selecte: this.selecte, swipeThreshold: this.swipeThreshold } }, child)
                }
            })
            const vm = new Constructor({
                el: document.createElement('div'),
                data() {
                    return {
                        tabActive: '2'
                    }
                },
                propsData: {
                    selecte: '2',
                    swipeThreshold: 3
                }
            })
            // vm.$el.querySelectorAll('.w-tab')[1].click()
            setTimeout(() => {
                expect(vm.$el.querySelector('.w-tabs-nav').classList.contains('w-tabs-nav__scrollable')).to.eq(true)
                vm.$el.remove()
                vm.$destroy()
                done()
            }, 400);
        })
        //     it('接收 animated', () => {
        //         const Constructor = Vue.extend({
        //             props: ['selecte', 'animated'],
        //             render: function (h) {
        //                 let child = []
        //                 for (let i = 0; i < 3; i++) {
        //                     child.push(h(tab, { props: { title: `${i + 1}`, index: `${i}` } }, `内容${i + 1}`))
        //                 }
        //                 return h(tabs, { props: { selecte: this.selecte, animated: this.animated } }, child)
        //             }
        //         })
        //         const vm = new Constructor({
        //             el: document.createElement('div'),
        //             data() {
        //                 return {
        //                     tabActive: 2
        //                 }
        //             },
        //             propsData: {
        //                 selecte: 2,
        //                 animated: true
        //             }
        //         })
        //         expect(vm.$el.querySelector('.w-tabs-body').classList.contains('w-tabs-animated')).to.eq(true)
        //         vm.$el.remove()
        //         vm.$destroy()
        //     })
    })
    // describe('tab-props', () => {

    //     it('接收 title index', () => {
    //         const Constructor = Vue.extend({
    //             props: ['selecte'],
    //             render: function (h) {
    //                 let child = []
    //                 for (let i = 0; i < 2; i++) {
    //                     child.push(h(tab, { props: { title: `标签${i + 1}`, index: `${i}` } }, `内容${i + 1}`))
    //                 }
    //                 return h(tabs, { props: { selecte: this.selecte } }, child)
    //             }
    //         })
    //         const vm = new Constructor({
    //             el: document.createElement('div'),
    //             propsData: {
    //                 selecte: 1
    //             }
    //         })
    //         expect(vm.$el.querySelectorAll('.w-tab-text')[1].innerText).to.eq('标签2')
    //         vm.$el.remove()
    //         vm.$destroy()
    //     })

    //     it('接收 disabled', () => {
    //         const Constructor = Vue.extend({
    //             props: ['selecte'],
    //             render: function (h) {
    //                 let child = []
    //                 for (let i = 0; i < 3; i++) {
    //                     child.push(h(tab, { props: { title: `${i + 1}`, index: `${i}`, disabled: i==2?true:false } }, `内容${i + 1}`))
    //                 }
    //                 return h(tabs, { props: { selecte: this.selecte, animated: this.animated } }, child)
    //             }
    //         })
    //         const vm = new Constructor({
    //             el: document.createElement('div'),
    //             propsData: {
    //                 selecte: 0
    //             }
    //         })
    //         expect(vm.$el.querySelectorAll('.w-tab')[0].classList.contains('w-tab-disabled')).to.eq(true)
    //         vm.$el.remove()
    //         vm.$destroy()
    //     })
    // })

})