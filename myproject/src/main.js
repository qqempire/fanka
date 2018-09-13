// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "./icon/iconfont.css"
import MintUI from 'mint-ui'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Checkbix from "checkbix"
import store from "./store/store"

import 'mint-ui/lib/style.css'
//import "./js/jquery.js"
import $ from "jquery"
import Swiper from 'swiper'; 
import '../static/js/jquery-1.10.1.min.js';
import '../static/js/swiper-3.3.1.jquery.min.js';
import '../static/css/swiper-3.3.1.min.css';
import '../static/css/animate.css';
import '../static/js/swiper.animate1.0.2.min.js';





Vue.use(MintUI)
Vue.use(Checkbix)
Vue.use(ElementUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
