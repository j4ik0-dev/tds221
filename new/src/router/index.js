import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VuelosView from '../views/VuelosView.vue'
import HotelesView from '../views/HotelesView.vue'
import CrucerosView from '../views/CrucerosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vuelos',
    name: 'vuelos',
    component: VuelosView
  },
  {
    path: '/hoteles',
    name: 'hoteles',
    component: HotelesView
  },
  {
    path: '/cruceros',
    name: 'cruceros',
    component: CrucerosView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
