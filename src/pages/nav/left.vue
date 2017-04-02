<style lang="less" scoped>
.left{
  position: relative;
  height: 100%;
  width: 100%;

}
.nav{
  position: relative;
  margin:30px 20px;

  ul{
    li{
      width: 100%;
      height: 45px;
      line-height: 45px;
      a{
        text-decoration: none;
        color: #555;
        &:hover{
          color: #4ea8f3;
        }
      }
      &.active{
        a{
          color:#4ea8f3;
        }
      }
    }
  }
}

</style>
<template>
<div class="left">
  <login></login>
  <div class="nav">
    <ul>
      <li v-for="item in navList" :class="{'active':item.en==active}"><router-link :to="'/'+item.en">{{item.cn}}</router-link></li>
    </ul>
  </div>
</div>
</template>
<script>
import login from '../login/login'
import config from '../../assets/js/config'
export default {
  name: 'left',
  data () {
    return {
      navList:config.nav,
      active:""
    }
  },
  components:{
    login
  },
  watch:{
    $route(){
      this.active=this.$route.name;
    }
  },
  methods:{

  },
  mounted(){
    this.active=this.$route.name;
  }
}
</script>
