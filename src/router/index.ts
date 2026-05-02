import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    {
      path: '/layout',
      name: 'layout',
      component: () => import('../layout/MainLayout.vue'),
    },  
  ],
})

export default router
