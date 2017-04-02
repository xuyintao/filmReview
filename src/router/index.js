import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home/home'
import trailer from '../pages/trailer/trailer'
import article from '../pages/article/article'
import video from '../pages/video/video'
import comment from '../pages/comment/comment'
import user from '../pages/user/user'
import detail from '../pages/detail/detail'

Vue.use(Router)

export const router=new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/trailer',
      name: 'trailer',
      component: trailer
    },
    {
      path: '/article',
      name: 'article',
      component: article
    },
    {
      path: '/video',
      name: 'video',
      component: video
    },
    {
      path: '/comment',
      name: 'comment',
      component: comment
    },
    {
      path: '/user',
      name: 'user',
      component: user
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
router.beforeEach((to, from, next) => {
  next();
})
