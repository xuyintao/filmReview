<style lang="less" scoped>
.row{
  padding: 10px 0;
  .row-left,.row-right{
    display: inline-flex;
    cursor: pointer;
  }
  i{
    display: none;
  }
  &:hover{
    i{
      display: inline;
    }
  }
}
</style>
<template>
<div class="user">
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户中心</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="page-content">
    <div class="row" @click="edit(1)">
      <div class="row-left">昵称:</div>
      <div class="row-right" v-show="!unameShow">{{username}}</div>
      <div class="row-right" v-show="unameShow"><el-input v-model="uname" placeholder="修改昵称" @blur="blur(1)" @keyup.enter.native="blur(1)"></el-input></div>
      <i class="el-icon-edit"></i>
    </div>
    <div class="row" @click="edit(2)">
      <div class="row-left">密码:</div>
      <div class="row-right" v-show="!pwdShow">{{password}}</div>
      <div class="row-right" v-show="pwdShow"><el-input v-model="pwd" placeholder="修改密码" @blur="blur(2)" @keyup.enter.native="blur(2)"></el-input></div>
      <i class="el-icon-edit"></i>
    </div>
  </div>
</div>
</template>
<script>
import * as types from '../../store/types.js'
export default {
  name: 'user',
  data () {
    return {
      uname:"",
      pwd:"",
      unameShow:false,
      pwdShow:false
    }
  },
  computed:{
    username(){
      return this.$store.state.login.username;
    },
    password(){
      return this.$store.state.login.password;
    }
  },
  methods:{
    edit(type){
      if(type==1){
        this.unameShow=true;
        this.uname=this.username;
      }else{
        this.pwdShow=true;
        this.pwd=this.password;
      }
    },
    blur(type){
      if(type==1){
        if(!this.uname) return false;
        this.unameShow=false;
        this.$store.commit(types.setName,this.uname)
        localStorage.setItem("un/film", this.username);

      }else{
        if(!this.pwd) return false;
        this.pwdShow=false;
        this.$store.commit(types.setPassword,this.pwd)
        localStorage.setItem("pd/film", this.password);
      }

    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.commit(types.setActivePage,0)
    })
  },
  beforeRouteLeave (to, from, next) {
    this.$store.commit(types.setActivePage,1)
    next();
  },
  mounted(){

  }
}
</script>
