import Vue from 'vue'
import App from './App'
import router from './router'
import '@/assets/css/base.css'
import $ from './assets/js/jquery-vendor'
import axios from 'axios'
import originJsonp from 'jsonp'
Vue.prototype.$http = axios;//将axios这个对象clone到Vue的$http这个属性上,以后我们就可以在其他组件里使用axios来进行 异步请求了
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
