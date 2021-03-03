import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import loginView from "@/views/loginView";
import registerView from "@/views/registerView";
import mainMenu from "@/components/mainMenu";
import homeworkStudent from "@/components/homeworkStudent";
import forgotPasswordView from "@/views/forgotPasswordView"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'loginView',
    component: loginView
  },
  {
    path: '/register',
    name: 'registerView',
    component: registerView
  },
  {
    path:'/forgot',
    name:'forgotPasswordView',
    component: forgotPasswordView
  },
  {
    path: '/home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    redirect:'/mainMenu',
    component: Home,
    // main:mainMenu,
    children:[
      {
        path:'/mainMenu',
        name:'mainMenu',
        component:mainMenu
      },
      {
        path: '/homeworkStu',
        name:'homeworkStu',
        component: homeworkStudent
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
