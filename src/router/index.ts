import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import Dashboard from '@/views/Dashboard.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '/',
        component: Home,
        meta: { title: 'Home' }
      },
      {
        path: '/dashboard',
        component: Dashboard,
        meta: { title: 'Dashboard' }
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  document.title = `${to.meta.title} | Test Vue Project`
  next()
})

export default router
