import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './components/App'
import VueRouter from 'vue-router'
import {router} from './router'
import store from './store'


Vue.use(ElementUI)
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
