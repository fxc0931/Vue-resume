import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/FirstPage'
import NotFound from '@/views/404'

Vue.use(Router)

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '*',
      name: '/404',
      component: NotFound
    }
  ]
})
