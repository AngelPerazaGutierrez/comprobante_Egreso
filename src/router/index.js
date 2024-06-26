import { createRouter, createWebHistory } from 'vue-router'

import HelloWorld from '@/components/HelloWorld.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HelloWorld
  },    
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/crear_egreso',
    name: 'crear_egreso',    
    component: () => import('../views/CrearEgresoView.vue')
  },
  {
    path: '/login',
    name: 'login',   
    component: () => import('../views/LoginFormView.vue')
  } 
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
