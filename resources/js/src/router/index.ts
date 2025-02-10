import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/login', name: 'login', component: () => import('../pages/auth/LoginPage.vue') },
]

const router = createRouter({
  history: createWebHistory('/app'),
  routes,
})

export default router;
