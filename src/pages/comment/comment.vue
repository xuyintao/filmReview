<style lang="less" scoped>
.item-content{
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 20px;
  min-height: 500px;
  li{
    padding: 5px 0;
  }
}
</style>
<template>
<div class="comment">
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>评论专区</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <ul class="item-content">
    <li v-for="item in commentData">
      <span>[{{item.type}}]</span>
      <span>{{item.time}}</span>
      <span><router-link to="/comment-detail">{{item.content}}</router-link></span>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  name: 'comment',
  data () {
    return {
      commentData:[
        {
          type:"系统创建",
          content:"《金刚狼》讨论区",
          time:"2017-04-01"
        },
        {
          type:"系统创建",
          content:"《分裂》讨论区",
          time:"2017-04-01"
        }
      ]
    }
  }
}
</script>
