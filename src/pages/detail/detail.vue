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
.detail-comment{
  min-height: 200px;
  background: #fff;
  margin-top: 10px;
  border:1px solid #ccc;
  border-radius: 2px;
  margin-bottom:80px;
  padding: 20px;
  li{
    margin-top:10px;
    border-bottom: 1px solid #eee;
    .comment-user{
      span{
        display: inline-block;
        &.time{
          color: #555;
          font-size: 14px;
          margin-left: 10px;
        }
        &.good{
          float: right;
          color: #4ea8f3;
        }
      }
    }
    .comment-val{
      line-height: 30px;
      text-indent: 20px;
    }
  }
}
.comment-input{
  position: fixed;
  width: 800px;
  left:50%;
  margin-left:-400px;
  bottom: 0;
}
</style>
<template>
  <div>
    <div class="detail">
      <div class="breadcrumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-if="data.last" :to="data.last">{{data.lastName}}</el-breadcrumb-item>
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
    <div class="detail-comment">
      <ul>
        <li v-for="item in commentData">
          <div class="comment-user"><span>{{item.username}}</span> <span class="time">{{item.time}}</span> <span class="good">赞</span></div>
          <div class="comment-val">{{item.val}}</div>
        </li>
      </ul>
    </div>
    <div class="comment-input">
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 4}"
        placeholder="请输入评论"
        v-model="comment" @keyup.enter.native="submit">
      </el-input>
    </div>
  </div>

</template>
<script>
import * as types from '../../store/types.js'
import config from '../../assets/js/config'
export default {
  name: 'detail',
  data () {
    return {
      data:{},
      comment:"",
      commentData:[
        {
          username:'机器人01',
          time:'2017-1-1',
          val:'测试评论功能'
        },
        {
          username:'机器人02',
          time:'2017-10-1',
          val:'输入评论，点击enter即可发表评论'
        },
        {
          username:'机器人03',
          time:'2017-1-11',
          val:'test comment'
        }
      ]
    }
  },
  watch:{

  },
  methods:{
    submit(){
      var time=new Date().getFullYear()+"-"+(new Date().getMonth()+1)+"-"+new Date().getDate();
      var username=this.$store.state.login.username;
      this.commentData.unshift({username:username,time:time,val:this.comment})
      this.comment="";
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
    this.data=this.$route.query
  }
}
</script>
