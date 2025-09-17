import { createRouter, createWebHistory } from 'vue-router'
import VuelosView from '../views/VuelosView.vue'
import HotelesView from '../views/HotelesView.vue'
import CrucerosView from '../views/CrucerosView.vue'
import InicioView from '@/views/InicioView.vue'

const routes = [
  {
    path: '/inicio',
    name: 'inicio',
    component: InicioView
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
