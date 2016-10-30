import App from './App'
import Vue from 'vue'
import { sync } from 'vuex-router-sync'

import store from './vuex/store'
import router from './router/index'

sync(store, router)

new Vue({
  router,
  store,
  ...App
}).$mount('#body')

