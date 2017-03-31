import * as types from '../types.js'
export default{
  state:{
    username:"",
    password:"",
    status:0
  },
  getters:{

  },
  actions:{

  },
  mutations:{
    [types.setName](state,username){
      state.username=username;
    },
    [types.setPassword](state,password){
      state.password=password;
    },
    [types.setStatus](state,status){
      state.status=status;
    }
  }
}
