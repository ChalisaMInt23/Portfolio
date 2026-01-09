import { createRouter, createWebHistory } from 'vue-router'

// import หน้า (views)
import Home from '../views/Home.vue'

// กำหนดเส้นทาง
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

// สร้าง router
const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
