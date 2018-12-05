import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { HttpClient } from './http/HttpClient'

Vue.config.productionTip = false

Vue.prototype.httpClient = HttpClient

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
