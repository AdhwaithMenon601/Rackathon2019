import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import User from '../components/User.vue';
import Home from '../components/Home.vue';
import MyMap from '../components/MapPage.vue';
import Rent from '../components/Rent.vue';
import Pay from '../components/Pay.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/Login',
    name: 'login',
    component: Login
  },
  {
    path: '/Register',
    name: 'register',
    component: Register
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
  },
  {
    path: '/user/:id',
    name: 'user',
    component: User,
  },
  {
    path: '/user/:id/map',
    props: true,
    name: 'map',
    component: MyMap
  },
  {
    path: '/user/:id/rent',
    props: true,
    name: 'rent',
    component: Rent
  },
  {
    path: '/user/:id/:amt/pay',
    props: true,
    name: 'pay',
    component: Pay
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
