import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutUsView from '../views/AboutUsView.vue'
import ContactUsView from '../views/ContactUsView.vue'
import SplashPageView from '../views/SplashPageView.vue'
import SignUpView from '../views/SignUpView.vue'
import ProfileView from '../views/ProfileView.vue'
import AdminView from '../views/AdminView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/home',
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
    path: '/',
      name: 'splash',
      component:SplashPageView,
      meta: {hideNavbarComp: true}
      
    },
    {
      path: '/signup',
        name: 'signup',
        component:SignUpView,
        meta: {hideNavbarComp: true}
      },
      {
        path: '/profile/:id',
          name: 'profile',
          component:ProfileView,
        },
        {
        path: '/admin',
        name: 'Admin',
        component:AdminView,
        meta: {hideNavbarComp: true},
        }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
