import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'

import login from './modules/login'
import user from './modules/user'

Vue.use(Vuex)
export default new Vuex.Store({
  actions,
  mutations,
  modules:{
    login,
    user
  }
})
