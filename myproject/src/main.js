// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./icon/iconfont.css"
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from "./store/store"

//import "./js/jquery.js"
import $ from "jquery"
Vue.use(MintUI)


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
