import { createRouter, createWebHistory } from 'vue-router'
import CalculatorHome from '../views/CalculatorHome.vue'
import WeatherView from '../views/WeatherView.vue'

const routes = [
  {
    path: '/',
    name: 'Calculators',
    component: CalculatorHome
  },
  {
    path: '/weather',
    name: 'Weather',
    component: WeatherView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router