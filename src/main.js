import Vue from 'vue'
import App from './components/App'
import VueRouter from 'vue-router'
import router from './router'
import Store from './store'

new Vue({
  el: '#app',
  router,
  Store,
  render: h => h(App)
})
