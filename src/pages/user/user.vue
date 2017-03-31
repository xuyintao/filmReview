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
</div>
</template>
<script>
export default {
  name: 'user',
  data () {
    return {

    }
  }
}
</script>
