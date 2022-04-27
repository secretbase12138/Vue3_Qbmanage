import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {path: '/', redirect: '/home'},
  {path: '/home', component: () => import("../components/Home")}
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
