import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import PrivacyPolicy from '../views/Home/PrivacyPolicy.vue'
import Faq from '../views/Home/Faq.vue'
import TermOfUse from '../views/Home/TermOfUse.vue'
import ContactUs from '../views/Home/ContactUs.vue'
import Register from '../views/Home/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/home/privacy-policy',
    name: 'privacy-policy',
    component: PrivacyPolicy
  },
  {
    path: '/home/faq',
    name: 'faq',
    component: Faq
  },
  {
    path: '/home/termofuse',
    name: 'termofuse',
    component: TermOfUse
  },
  {
    path: '/home/register',
    name: 'register',
    component: Register
  },
  {
    path: '/home/contactus',
    name: 'contactus',
    component: ContactUs
  },
  {
    path: '/home/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
