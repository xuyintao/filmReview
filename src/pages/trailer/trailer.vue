<style lang="less" scoped>

</style>
<template>
<div class="trailer">
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>最新预告</el-breadcrumb-item>
    </el-breadcrumb>
  </div>

  <div>{{username}}</div>
</div>
</template>
<script>
export default {
  name: 'trailer',
  data () {
    return {

    }
  },
  computed:{
    username(){
      return this.$store.state.login.username
    }
  }
}
</script>
