const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/toast.vue'

function later(delay) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Toast', ()=>{
    it('Toast存在.',()=>{
        expect(Toast).to.exist
    })

    describe('toast-props', ()=>{
        it('接收message', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                el: document.createElement('div'),
                propsData: {
                    message: 'toast测试'
                }
            })
            document.body.appendChild(vm.$el)
            const txt = vm.$el.querySelector('.w-toast-txt').innerText
            expect(txt == 'toast测试').to.equal(true)
            vm.$el.remove()
            vm.$destroy()
        })

        it('接收type: text, html', () => {
            const Constructor = Vue.extend(Toast)
            const typeList = ['text','html']
            typeList.forEach((type)=>{
                const vm = new Constructor({
                    el: document.createElement('div'),
                    propsData: {
                        message: 'toast测试type',
                        type
                    }
                })
                expect(vm.$el.querySelector('use')).to.equal(null)
                vm.$el.remove()
                vm.$destroy()
            })
        })

        it('接收type: loading,success,error', () => {
            const Constructor = Vue.extend(Toast)
            const typeList = ['loading','success','error']
            typeList.forEach((type)=>{

                const vm = new Constructor({
                    el: document.createElement('div'),
                    propsData: {
                        message: 'toast测试type',
                        type:type
                    }
                })
                const useEle = vm.$el.querySelector('use')
                expect(useEle.getAttribute('xlink:href')).to.equal(`#i-${type}`)
                vm.$el.remove()
                vm.$destroy()
            })
        })

        it('接收 position', () => {
            const Constructor = Vue.extend(Toast)
            const positionList = ['top','middle','bottom']
            positionList.forEach((position)=>{
                const vm = new Constructor({
                    el: document.createElement('div'),
                    propsData: {
                        message: 'toast测试position',
                        position
                    }
                })
                expect(vm.$el.classList.contains(`w-toast-${position}`)).to.equal(true)
                vm.$el.remove()
                vm.$destroy()
            })
        })

        it('接收 position', () => {
            const Constructor = Vue.extend(Toast)
            const positionList = ['top','middle','bottom']
            positionList.forEach((position)=>{
                const vm = new Constructor({
                    el: document.createElement('div'),
                    propsData: {
                        message: 'toast测试position',
                        position
                    }
                })
                expect(vm.$el.classList.contains(`w-toast-${position}`)).to.equal(true)
                vm.$el.remove()
                vm.$destroy()
            })
        })

        it('禁止背景点击', (done) => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                el: document.createElement('div'),
                propsData: {
                    forbidClick: true,
                    duration: 10
                }
            })
            expect(document.body.classList.contains('w-toast--unclickable')).to.equal(true)
            setTimeout(()=>{
                expect(document.body.classList.contains('w-toast--unclickable')).to.equal(false)
                vm.$el.remove()
                vm.$destroy()
                done()
            },11)
        })

        it('duration秒后关闭toast', (done) => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                el: document.createElement('div'),
                propsData: {
                    duration: 10
                }
            })
            expect(vm.isShow).to.equal(true)
            setTimeout(()=>{
                expect(vm.isShow).to.equal(false)
                vm.$el.remove()
                vm.$destroy()
                done()
            },11)
        })
        
        it('closeOnClick 点击toast关闭', () => {
            const Constructor = Vue.extend(Toast)
            const vm = new Constructor({
                el: document.createElement('div'),
                propsData: {
                    message: '关闭',
                    duration: 0
                }
            })
            vm.$el.click()
            expect(vm.isShow).to.equal(true)
            vm.closeOnClick = true
            vm.cId = 2
            vm.$el.click()
            expect(vm.isShow).to.equal(false)
            vm.$el.remove()
            vm.$destroy()
        })

        it('onClose 关闭后回调', () => {
            const Constructor = Vue.extend(Toast)
            const onClose = sinon.fake()
            const vm = new Constructor({
                el: document.createElement('div'),
                propsData: {
                    message: '关闭',
                    onClose
                }
            })
            vm.closeToast()
            expect(onClose).to.have.been.called
        })
        
    })
})