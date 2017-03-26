import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
