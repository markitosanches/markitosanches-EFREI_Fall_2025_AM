import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/Home.vue'
import AddProductView from '../views/AddProductView.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/add-product', name: 'add-product', component: AddProductView },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router