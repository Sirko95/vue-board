// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import { sync } from 'vuex-router-sync'
import App from './App'
import routes from './router/index'
import store from './store/index'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

sync(store, router)
/* eslint-disable */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
