import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/index',
    name: 'Index',
    component: () => import(/* webpackChunkName: "Home" */ '../views/indexView.vue')
  },
  { path: '/', redirect: { name: 'Index' } }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
