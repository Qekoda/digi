import { createRouter, createWebHistory } from 'vue-router'
const MainIndex = () => import('@/views/main/Index.vue')

const routes = [
  {
    path: '/',
    name: 'main',
    component: MainIndex
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
