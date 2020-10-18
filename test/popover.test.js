const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover.vue'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {

    it('存在.', () => {
        expect(Popover).to.exist
    })

    it('props position.', (done) => {
        const Constructor = Vue.extend({
            props: ['position'],
            render: function (h) {
                return h(
                    Popover,
                    { props: { position: this.position }, ref: "a" },
                    [
                        h('template', { props: { slot: 'content' } }, '弹出内容'),
                        h('button', {}, '点他')
                    ]
                )
            }
        })
        const vm = new Constructor({
            el: document.createElement('div'),
            propsData: {
                position: 'bottom'
            }
        })
        vm.$el.querySelector('button').click()
        setTimeout(() => {
            const { contentWrapper } = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        }, 1000);
    })
    it('props trigger', (done) => {
        const Constructor = Vue.extend({
            props: ['trigger'],
            render: function (h) {
                return h(
                    Popover,
                    { props: { trigger: this.trigger }, ref: "a" },
                    [
                        h('template', { props: { slot: 'content' } }, '弹出内容'),
                        h('button', {}, '点他')
                    ]
                )
            }
        })
        const vm = new Constructor({
            el: document.createElement('div'),
            propsData: {
                trigger: 'hover'
            }
        })
        let event = new Event('mouseenter');
        vm.$el.dispatchEvent(event)
        setTimeout(() => {
            const { contentWrapper } = vm.$refs.a.$refs
            expect(contentWrapper.classList.contains('position-top')).to.be.true
            done()
        }, 1000);

    })

})