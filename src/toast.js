import Toast from './toast.vue'

let currentToast = null
let cId = 0

const defaultOptions = {
    message: '',
    type: 'text',
    position: 'middle',
    overlay: false,
    forbidClick: false,
    duration: 2000,
    closeOnClick: false,
    onClose: undefined,
    isShow: true
}

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (message, propsData) {
            if (typeof message == 'object') {
                propsData = { ...defaultOptions, ...message, cId }
            } else {
                propsData = { ...defaultOptions, ...propsData, message, cId }
            }
            cId++
            if (currentToast) {
                for (let key in propsData) {
                    currentToast[key] = propsData[key]
                }
            } else {
                currentToast = createToast(Vue, propsData)
            }
            return currentToast
        }
    }
}

function createToast(Vue, propsData) {
    // const toastConstructor = Vue.extend(Toast)
    // const toastVm = new toastConstructor({
    //     el: document.createElement('div'),
    //     data(){
    //         return {
    //             text: msg
    //         }
    //     }
    // })
    // document.body.appendChild(toastVm.$el)

    const toastConstructor = Vue.extend(Toast)
    const toastVm = new toastConstructor({
        propsData
    })
    // toastVm.$slots.default = [msg]
    // toastVm.$on('close',()=>{
    //     toastVm.closeToast()
    // })
    toastVm.$mount()
    document.body.appendChild(toastVm.$el)
    return toastVm
}