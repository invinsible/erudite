import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',    
    component: () => import('@/views/Antonim')
  },  
  {
    path: '/antonim/:op',
    name: 'antonim',
    component: () => import('@/views/Antonim'),
    meta: {
      showReturn: true
    }
  },
  {
    path: '/erudit',
    name: 'erudit',
    component: () => import('@/views/Erudit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
