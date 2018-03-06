// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import axios from 'axios'
import VueResource from 'vue-resource'
// import 'mint-ui/lib/style.css';
import $ from 'jquery'
import Cropper from 'cropperjs' 
import { Swipe, SwipeItem } from 'mint-ui';

Vue.config.productionTip = false
Vue.use(MintUI);
Vue.use(VueResource);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
/* eslint-disable no-new */

/* 路由跳转改变页面title */
router.afterEach(function (to) {
  document.title = to.meta.pageTitle?to.meta.pageTitle: '壹基因社区'
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
