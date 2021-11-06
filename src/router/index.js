import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/reservas',
    name: 'Reservas',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Reservas')
  },
  {
    path:'/perfil',
    name:'Perfil',
    component: () => import('../views/Perfil')
  },
  {
    path:'/detalle/:id',
    name:'Detalle',
    component:() => import('../views/Detalle')
  },
  {
    path:'/disfraces',
    name:'Disfraces',
    component: () => import('../views/Disfraz')
  },
  {
    path:'/categorias',
    name:'Categorias',
    component: () => import('../views/Categorias')
  },
  {
    path:'/loggin',
    name:'Loggin',
    component: () => import('../views/Loggin')
  },
  {
    path:'/registro',
    name:'Registro',
    component: () => import('./../views/Registro')
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
