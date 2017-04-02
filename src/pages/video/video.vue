<style lang="less" scoped>
.item{
  background: #fff;
  margin-top:20px;
  padding: 20px 30px;
  .item-title{
    line-height: 50px;
  }
  .item-content{
    .video-img img{width:100%;padding: 5px;}
  }
}

</style>
<template>
<div class="video">
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>影评视频</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="item" v-for="item in videoList">
    <div class="item-content clearfix">
      <div class="video-img"><img :src="item.img" alt="" @click="showVideo(item.url)"/></div>
      <div class="text"><span class="name"><router-link :to="{path:'/detail',query:Object.assign({last:'video',lastName:'影评视频'},item)}">{{item.name}}</router-link></span> <span class="time">{{item.time}}</span></div>
    </div>
  </div>
  <el-dialog title="视频播放" v-model="dialogVisible" size="">
    <div v-html="url"></div>
  </el-dialog>
</div>
</template>
<script>
export default {
  name: 'video',
  data () {
    return {
      videoList:[
        {
          name:"【金刚狼3】木鱼三分钟影评——一个十七年传奇的终结",
          img:"src/assets/images/luogen.webp",
          time:"2017-03-14",
          url:'<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=9153305&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
        },
        {
          name:"【暴走看啥片儿第三季】81 金刚狼生化危机最后一战；抖森专访撩你没商量",
          img:"src/assets/images/baozou.webp",
          time:"2017-03-24",
          url:'<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=9359743&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
        }
      ],
      url:"test",
      dialogVisible: false
    }
  },
  methods:{
    showVideo(url){
      this.url=url;
      this.dialogVisible = true
    }
  }
}
</script>
