import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {QueryClient} from './GraphQLConfig'

Vue.config.productionTip = false

Vue.prototype.client = QueryClient

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
