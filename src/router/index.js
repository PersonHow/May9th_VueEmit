import { createRouter, createWebHistory } from 'vue-router'
import EmitView from '../views/Emit.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'emit',
      component: EmitView
    },
    {
      path:'/vshow',
      name:'vshow',
      component: () => import('../views/Vshow.vue')
    },
    {
      path:'/home',
      name:'home',
      component: () => import('../views/Home.vue')
    },
    {
      path:'/router-view',
      name:'routerview',
      component: () => import('../views/routerView.vue')
    },
    {
      path:'/model',
      name:'model',
      component: () => import('../views/model.vue')
    }
    
  ]
})

export default router
