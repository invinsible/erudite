import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home';

const Imparfait = () => import('@/views/Imparfait');
const Antonim = () => import('@/views/Antonim');

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Home
  },
  {
    path: '/imparfait',
    name: 'imparfait',
    component: Imparfait,
    children: [
      {        
        path: 'etre',
        name: 'etre',
        component: Antonim,       
      },
      {        
        path: 'avoir',
        name: 'avoir',
        component: Antonim,      
      },
      {        
        path: 'pouvoir',
        name: 'pouvoir',
        component: Antonim,     
      },
    ]      
  },
  {
    path: '/antonim/:op',
    name: 'antonim',
    component: Antonim,
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
