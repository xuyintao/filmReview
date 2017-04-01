import * as types from '../types.js'
export default{
  state:{
    activePage:1
  },
  getters:{

  },
  actions:{

  },
  mutations:{
    [types.setActivePage](state,activePage){
      state.activePage=activePage;
    }
  }
}
