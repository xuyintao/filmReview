import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/home/home'
import trailer from '../pages/trailer/trailer'
import article from '../pages/article/article'
import video from '../pages/video/video'
import discuss from '../pages/discuss/discuss'
import comment from '../pages/comment/comment'
import user from '../pages/user/user'

Vue.use(Router)

export const router=new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
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
      path: '/discuss',
      name: 'discuss',
      component: discuss
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
    }
  ]
})
router.beforeEach((to, from, next) => {
  next();
})
