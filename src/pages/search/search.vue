<style>
#search .el-select .el-input {
  width: 110px;
}
</style>
<style lang="less" scoped>
.search{
  background: rgba(241, 241, 241, 0.9);
  .page-logo{
    text-align: center;
    padding: 5px;
    a{
      color: #1D8CE0;
      font-size: 24px;
      text-decoration: none;
    }

  }
}
</style>
<template>
<div class="search" id="search">
  <div class="page-logo"><router-link to="/">FILM REVIEW</router-link></div>
  <el-input placeholder="请输入关键字" v-model="key" size="large" @keyup.enter.native="tips">
    <el-select v-model="active" slot="prepend" placeholder="搜索全部">
      <el-option v-for="(item,index) in navList" :label="item.cn" :value="item.en" :key="item.en"></el-option>
    </el-select>
    <el-button slot="append" icon="search" @click="tips" ></el-button>
  </el-input>
</div>
</template>
<script>
import config from '../../assets/js/config'
export default {
  name: 'search',
  data () {
    return {
      key:"",
      navList:config.nav,
      active:""
    }
  },
  methods:{
    tips(){
      this.$message('假的啦，没有数据！');
    }
  },
  watch:{
    $route(){
      this.active=this.$route.name!='home'?this.$route.name:'';
    }
  },
  mounted(){
    this.active=this.$route.name!='home'?this.$route.name:'';
  }
}
</script>
