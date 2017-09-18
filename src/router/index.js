import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Show from '@/components/Show/Show'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/show',
      component: Show
    }
  ]
})
