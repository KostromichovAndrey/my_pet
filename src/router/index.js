import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404View.vue')
    },
    {
      path: '/*',
      name: '404',
      component: () => import('@/views/404View.vue')
    },
  ]
})

export default router
