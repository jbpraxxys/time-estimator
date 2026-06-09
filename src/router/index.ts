import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/calculator',
      name: 'calculator',
      component: () => import('@/views/CalculatorPage.vue'),
    },
    {
      path: '/guide',
      name: 'guide',
      component: () => import('@/views/GuidePage.vue'),
    },
    {
      path: '/scenarios',
      name: 'scenarios',
      component: () => import('@/views/ScenariosPage.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutPage.vue'),
    },
  ],
})

export default router
