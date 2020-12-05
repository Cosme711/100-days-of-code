import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AuthorView from '../views/AuthorView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:author',
    name: 'AuthorView',
    component: AuthorView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
