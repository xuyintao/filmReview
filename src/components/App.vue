<style lang="less" scoped>
@import '../assets/css/public.css';
@web-width:800px;
@nav-width:220px;

.app{

}
.app-left{
  position: relative;
  z-index:100;
}
.content{
  position: relative;
  width: @web-width;
  margin: auto;
  margin-top:100px;
}
.content-search{
  position: fixed;
  width: @web-width;
  top:0;
  left:50%;
  margin-left: -@web-width/2;
}
.content-pages{
  margin-bottom: 50px;
}
.nav-left{
  position: fixed;
  width: @nav-width;
  height: 100%;
  top:0;
  left:-@nav-width;
  padding-top: 40px;
  border-right: 1px solid #e5e5e5;
  background: #e3ebec;
}
.nav-open{
  left:0;
}
.tag{
  position: fixed;
  top: 10px;
  left: -145px;
  z-index: 100;
  width: 200px;
  transition: all 0.2s ease-in;
  cursor: pointer;
  img{
    width:100%;
  }
}
.tag-open{
  left:12px;
}

//左侧动画
.slide-fade-enter-active ,.slide-fade-leave-active{
  transition: all 0.2s ease-in;
}
.slide-fade-enter,.slide-fade-leave-active{
  left:-@nav-width;
}
</style>
<template>
  <div class="app">
    <div class="app-left">
      <div class="tag" @click="show=!show" :class="{'tag-open':show}">
        <img src="src/assets/images/arrow-open.png" alt=""/>
      </div>
      <transition name="slide-fade">
        <div class="nav-left" v-show="show" :class="{'nav-open':show}">
          <left></left>
        </div>
      </transition>
    </div>
    <div class="content" :style="{'margin-top':activePage==0?'0':'100px'}">
      <div class="content-search" v-if="activePage==1"><search></search></div>
      <div class="content-pages">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import home from '../pages/home/home'
import left from '../pages/nav/left'
import search from '../pages/search/search'
//import types from '../store/types.js'
export default {
  name: 'app',
  data () {
    return {
      show:false
    }
  },
  components: {
		home,
    left,
    search
	},
  computed:{
    activePage(){
      return this.$store.state.pages.activePage;
    }
  }

}
</script>
