const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {

    it('存在.', () => {
        expect(Input).to.be.ok
    })

    describe('props', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('接收value', () => {
            vm = new Constructor({
                propsData: {
                    value: '1234'
                }
            }).$mount()
            const ele = vm.$el.querySelector('input')
            // console.log(23, vm.$el.querySelector('input'));
            expect(ele.value).to.equal('1234')
        })
        it('接收error', () => {
            vm = new Constructor({
                propsData: {
                    error: '密码长度为6'
                }
            }).$mount()
            const useEle = vm.$el.querySelector('use')
            expect(useEle.getAttribute('xlink:href')).to.equal('#i-error')
            const ele = vm.$el.querySelector('.errorMessage')
            expect(ele.innerText).to.equal('密码长度为6')
        })
    })

    describe('事件', () => {
        const Constructor = Vue.extend(Input)
        let vm
        afterEach(() => {
            vm.$destroy()
        })
        it('支持change事件', () => {
            ['change', 'input', 'focus', 'blur'].forEach((eventName) => {
                vm = new Constructor({}).$mount()
                const callback = sinon.fake();
                vm.$on(eventName, callback)
                //触发input的change 事件
                let event = new Event(eventName);
                Object.defineProperty(
                    event, 'target', {
                    value: { value: 'hi' }, enumerable: true
                }
                )
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith('hi')
            })
        })

    })


})