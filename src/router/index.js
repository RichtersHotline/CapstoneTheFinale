import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import SplashPageView from '../views/SplashPageView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component:AboutUsView
  },
  {
  path: '/contact',
    name: 'contact',
    component:ContactUsView
  },
  {
    path: '/splash',
      name: 'splash',
      component:SplashPageView,
      meta: {hideNavbarComp: true}
    }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
