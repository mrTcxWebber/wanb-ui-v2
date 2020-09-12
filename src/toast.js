import Toast from './toast.vue'

export default {
    install(Vue, options){
        Vue.prototype.$toast = function(msg){
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
                data(){
                    return {
                        text: msg
                    }
                }
            })
            // toastVm.$slots.default = [msg]
            toastVm.$mount()
            document.body.appendChild(toastVm.$el)
            // setTimeout(()=>{
            //     toastVm.$el.remove();
            // },2000)
        }
    }
}