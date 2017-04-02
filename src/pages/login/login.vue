<style lang="less" scoped>
.login{
  margin:20px 0;
  padding: 0 10px;
  .line{
    margin-top:10px;
    text-align: center;
    button{
      width: 46%;
    }
  }
}
.user-info{
  .head-img{
    width: 50px;
    height: 50px;
    display: inline-block;
    vertical-align: middle;
    img{
      width: 100%;
    }
  }
  .user-type{
    display: inline-block;
    position: relative;
    i{
      cursor: pointer;
    }
    &:hover{
      ul{
        display: block;
      }
    }
    ul{
      position: absolute;
      display: none;
      top: 17px;
      left: 0;
      width: 154px;
      padding: 5px 0;
      z-index: 100;
      border: 1px solid #ccc;
      background: #f7f7f7;
      font-size: 14px;
      color: #8492A6;
      text-indent: 22px;
      li{
        padding: 5px 0;
        a{
          text-decoration: none;
          color:#8492A6;
        }
        &:hover{
          background: #D3DCE6;
          cursor: pointer;
        }
      }
    }
  }
}

</style>
<template>
<div class="login">
  <div v-if="status==0">
    <div class="line"><el-input v-model="username" placeholder="昵称"></el-input></div>
    <div class="line"><el-input v-model="password" type="password" placeholder="密码" @keyup.enter.native="login"></el-input></div>
    <div class="line">
      <el-button type="primary" size="small" @click.native="login">登录</el-button>
      <el-button size="small" @click.native="register">注册</el-button>
    </div>
  </div>
  <div v-else class="user-info clearfix">
    <div class="head-img"><img src="src/assets/images/head.png" alt=""/></div>
    <div class="user-type">
      <span>{{username}}</span>
      <i class="el-icon-caret-bottom"></i>
      <ul class="user-set">
        <li><router-link to="/user">用户中心</router-link></li>
        <li @click="signOut">退出登录</li>
      </ul>
    </div>
  </div>
</div>
</template>
<script>
import * as types from '../../store/types.js'
export default {
  name: 'login',
  data () {
    return {

    }
  },
  computed:{
    status(){
      return this.$store.state.login.status;
    },
    username: {
      get () {
        return this.$store.state.login.username;
      },
      set (value) {
        this.$store.commit(types.setName,value);
      }
    },
    password: {
      get () {
        return this.$store.state.login.password;
      },
      set (value) {
        this.$store.commit(types.setPassword,value);
      }
    }
  },
  methods:{
    register(){
      if(!this.username || !this.password) return false;
      this.$store.commit(types.setStatus,1);
      localStorage.setItem("un/film", this.username);
      localStorage.setItem("pd/film", this.password);
      localStorage.setItem("st/film", this.status);
    },
    login(){
      if(!this.username || !this.password) return false;
      var uname=localStorage.getItem("un/film");
      var pwd=localStorage.getItem("pd/film");
      if(uname==this.username&&pwd==this.password){
        this.$store.commit(types.setStatus,1);
        localStorage.setItem("st/film", this.status);
      }else{
        this.$message({
          message: '用户名或密码错误',
          type: 'warning'
        });
      }
    },
    signOut(){
      this.$store.commit(types.setStatus,0);
      localStorage.setItem("st/film", 0);
    }
  },
  mounted(){
    var uname=localStorage.getItem("un/film");
    var pwd=localStorage.getItem("pd/film");
    var st=localStorage.getItem("st/film");
    if(uname&&pwd&&st!=0){
      this.$store.commit(types.setStatus,1);
      this.$store.commit(types.setName,uname);
      this.$store.commit(types.setPassword,pwd);
    }
  }
}
</script>
