<style lang="less" scoped>
.item{
  background: #fff;
  padding: 20px 30px;
  margin-bottom: 20px;
  .item-content{
    .item-left{
      float: left;
      width: 35%;
      img{
        width:100%;
        cursor: pointer;
      }
    }
    .item-right{
      float: right;
      width: 62%;
    }
  }
}
.row{
  margin-top:10px;
  width: 100%;
  .row-left{
    float: left;
    width: 15%;
    text-align: right;
    color: #555;
  }
  .row-right{
    float: right;
    width: 82%;
  }
}
</style>
<template>
<div class="trailer">
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>最新预告</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="item" v-for="item in trailerList">
    <div class="item-content clearfix">
      <div class="item-left"><img :src="item.img" alt="" @click="showVideo(item.url)"/></div>
      <div class="item-right">
        <div class="row clearfix">
          <div class="row-left">电影名称:</div>
          <div class="row-right"><router-link :to="{path:'/detail',query:Object.assign({last:'trailer',lastName:'最新预告'},item)}">{{item.name}}</router-link></div>
        </div>
        <div class="row clearfix">
          <div class="row-left">上映日期:</div>
          <div class="row-right">{{item.time}}</div>
        </div>
        <div class="row clearfix">
          <div class="row-left">电影简介:</div>
          <div class="row-right" v-html="item.intro"></div>
        </div>
      </div>
    </div>
  </div>
  <el-dialog title="视频播放" v-model="dialogVisible" size="">
    <div v-html="url"></div>
  </el-dialog>
</div>
</template>
<script>
export default {
  name: 'trailer',
  data () {
    return {
      trailerList:[{
        name:"美女与野兽",
        time:"2017-03-17(中国大陆/美国)",
        img:"src/assets/images/home-p1.webp",
        url:'<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=8382491&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
        intro:"<p>贝儿（艾玛·沃森 Emma Watson 饰）和小镇上的其他女孩不同，是一个热爱阅读和幻想的姑娘，孔武有力英俊强壮的加斯顿（卢克·伊万斯 Luke Evans 饰）发誓要娶贝儿为妻，但贝儿却一眼看穿了他的自私和虚伪，拒不从命。某日，贝儿的父亲莫里斯（凯文·克莱恩 Kevin Kline 饰）迷路误打误撞之下来到了一座荒凉破败的城堡中，那里居住着样貌可怖半人半兽的野兽（丹·史蒂文斯 Dan Stevens 饰）。</p><p>因为偷摘了城堡里种植的玫瑰，莫里斯被野兽囚禁了起来，得知此消息的贝儿赶到城堡，要求和父亲作交换。就这样，贝儿开始了和野兽的同居生活。在会说话的茶壶太太（艾玛·汤普森 Emma Thompson 饰）、烛台卢米亚（伊万·麦克格雷格 Ewan McGregor 饰）和时钟葛士华（伊恩·麦克莱恩 Ian McKellen 饰）的照顾和帮助下，贝儿渐渐发现，野兽在丑陋的外表下，隐藏了一颗善良温柔的心。实际上，野兽的真实身份是一位王子，因受到了女巫的诅咒而沦落至此，而贝儿，是解除诅咒最后的，也是唯一的希望。</p>"
      },
      {
        name:"爱乐之城 La La Land",
        time:"2017-02-14(中国大陆)/2016-08-31(威尼斯电影节)/2016-12-25(美国)",
        img:"src/assets/images/lalaland.webp",
        url:'<embed height="415" width="544" quality="high" allowfullscreen="true" type="application/x-shockwave-flash" src="//static.hdslb.com/miniloader.swf" flashvars="aid=6966258&page=1" pluginspage="//www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash"></embed>',
        intro:"<p>米娅（艾玛·斯通 Emma Stone 饰）渴望成为一名演员，但至今她仍旧只是片场咖啡厅里的一名平凡的咖啡师，尽管不停的参加着大大小小的试镜，但米娅收获的只有失败。某日，在一场派对之中，米娅邂逅了名为塞巴斯汀（瑞恩·高斯林 Ryan Gosling 饰）的男子，起初两人之间产生了小小的矛盾，但很快，米娅便被塞巴斯汀身上闪耀的才华以及他对爵士乐的纯粹追求所吸引，最终两人走到了一起。</p><p>在塞巴斯汀的鼓励下，米娅辞掉了咖啡厅的工作，专心为自己写起了剧本，与此同时，塞巴斯汀为了获得一份稳定的收入，加入了一支流行爵士乐队，开始演奏自己并不喜欢的现代爵士乐，没想到一炮而红。随着时间的推移，努力追求梦想的两人，彼此之间的距离却越来越远，在理想和感情之间，他们必须做出选择。</p>"
      }]
      ,
      dialogVisible:false,
      url:""
    }
  },
  methods:{
    showVideo(url){
      this.dialogVisible=true;
      this.url=url;
    }
  },
  computed:{

  }
}
</script>
