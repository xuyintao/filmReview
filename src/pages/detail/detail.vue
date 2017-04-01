<style lang="less" scoped>
.detail{
  background: #fff;
  border-radius: 2px;
  border: 1px solid #ccc;
  padding: 20px;
  .title{
    text-align: center;
    margin:10px 0;
    span{
      display: inline-block;
    }
    .time{
      color: #555;
      font-size: 14px;
      margin-left: 10px;
    }
  }
  .intro{
    margin: 10px 0;
  }
}
</style>
<template>
<div class="detail">
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item v-if="lastName" :to="last">{{lastName}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{data.name}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="title">
    <span>{{data.name}}</span>
    <span class="time">{{data.time}}</span>
  </div>
  <div class="content" ><center v-html="data.url || data.content"></center></div>
  <div class="intro" v-html="data.intro"></div>
</div>
</template>
<script>
import config from '../../assets/js/config'
export default {
  name: 'detail',
  data () {
    return {
      data:{},
      last:"",
      lastName:""
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.last=from.path;
      vm.lastName=config.nav.find((val,index,arr)=>from.name==val.en?val.cn:"")
    })
  },
  mounted(){
    this.data=this.$route.query
  }
}
</script>
