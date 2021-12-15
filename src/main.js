// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
//1.vue2事件总线
// const Demo = Vue.extend({})
// const d = new Demo()
// Vue.prototype.x = d

//2.vue2事件总线
// 在new vue中 beforeCreate() {
//     Vue.prototype.$bus = this //安装全局事件总线
// },

createApp(App).mount('#app')