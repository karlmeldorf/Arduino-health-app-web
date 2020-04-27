import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})