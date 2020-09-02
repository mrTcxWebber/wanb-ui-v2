import Vue from 'vue'
import Button from './button'
import app from './app.vue'

Vue.component('g-button', Button)
new Vue({
    el: '#app',
    render: h => h(app)
}) 