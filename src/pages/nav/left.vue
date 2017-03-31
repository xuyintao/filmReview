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
    }
  }
}
a{
  text-decoration: none;
}
</style>
<template>
<div class="left">
  <login></login>
  <div class="nav">
    <ul v-for="item in navList">
      <li><router-link :to="'/'+item.en">{{item.cn}}</router-link></li>
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
      navList:config.nav
    }
  },
  components:{
    login
  }
}
</script>
