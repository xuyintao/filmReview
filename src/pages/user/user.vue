<style scoped>

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
    <h4>用户名：{{username}}</h4>
    <h4>密码：{{password}}</h4>
  </div>
</div>
</template>
<script>
import * as types from '../../store/types.js'
export default {
  name: 'user',
  data () {
    return {

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
