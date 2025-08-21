import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import Home from './pages/home.vue'
import About from './pages/about.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },

]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
