import { createRouter, createWebHistory } from 'vue-router';

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
      path: '/third-page',
      name: 'third-page',
      component: () => import('@/views/AboutView.vue')
    },    
    {
      path: '/forth-page',
      name: 'forth-page',
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/romario',
      name: 'Romario page',
      component: () => import('@/views/RomarioView.vue')
    },

    // not found pages
    {
      path: '/:pathMatch(.*)*',
      name: 'NoFound',
      component: () => import('@/views/NoFoundView.vue')
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NoFound',
      component: () => import('@/views/NoFoundView.vue')
    },
  ]
})

export default router
