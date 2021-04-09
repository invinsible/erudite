import Vue from 'vue'
import VueRouter from 'vue-router'
import Antonim from '@/views/Antonim'
import Erudit from '@/views/Erudit'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',    
    component: Antonim
  },
  {
    path: '/antonim',
    name: 'antonim',
    component: Antonim
  },
  {
    path: '/erudit',
    name: 'erudit',
    component: Erudit
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
