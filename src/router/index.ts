import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/login/Login.vue'),
    },
    {
      path: '/pages',
      name: 'Pages',
      component: () => import('../views/pages/Pages.vue'),
    },    
  ],
})

export default router
