// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'style/reset.css'
import 'style/border.css'
import FastClick from 'fastclick'
import Axios from 'axios'

FastClick.attach(document.body)
Vue.config.productionTip = false

Vue.prototype.HOST = '/baidu_music_api'
Vue.prototype.$axios = Axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
