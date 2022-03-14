/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import store from './store'
import { sync } from "vuex-router-sync"
Vue.config.productionTip = false


sync(store, router)

new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  render: h => h(App)
})
