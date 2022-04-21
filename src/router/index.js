import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/movies',
    name: 'Movies',
    component: () => import('../views/MovieList.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
