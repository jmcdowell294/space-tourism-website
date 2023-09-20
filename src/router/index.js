import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    
    {
      path: '/destination',
      name: 'destination',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/Destination.vue')
    },

    {
      path: '/crew',
      name: 'crew',
      component: () => import('../components/Crew.vue')
    },
    {
      path: '/technology',
      name: 'technology',
      component: () => import('../components/Technology.vue')
    }
    
  ]
})

export default router
