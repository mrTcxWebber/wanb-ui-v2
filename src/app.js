import Vue from 'vue'
import Button from './button'
import app from './app.vue'
import Toast from "./toast.js"

Vue.use(Toast)

// Vue.component('g-button', Button)

// 解决需要引入编译版本的而非运行时版本的报错 https://segmentfault.com/a/1190000016417861
new Vue({
    el: '#app',
    render: h => h(app)
}) 