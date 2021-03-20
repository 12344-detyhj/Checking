import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import loginView from "@/views/login/loginView";
import registerView from "@/views/register/registerView";
import mainMenu from "@/views/Home/components/mainMenu/mainMenu";
import homeworkStudent from "@/views/Home/components/homework/homeworkStudent";
import homeworkTeacher from "@/views/Home/components/homework/homeworkTeacher";
import forgotPasswordView from "@/views/forgotPassword/forgotPasswordView"
import page404 from "@/views/errorPage/404"


Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}



export const constantRoutes=[
  {
    path: '/login',
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
    path: '/redirect',
    component: Home,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/',
    name: 'Home',
    component: Home,
    redirect:'/mainMenu',
    children:[
      {
        path:'/mainMenu',
        name:'mainMenu',
        component:mainMenu,
        meta:{
          title:'mainMenu'
        }
    }]
  },
  {
    path: '/404',
    name: '404NotFound',
    component: page404
  },
]

export const asyncRoutes=[
  {
    path: '/homework',
    name: 'homework',
    component: Home,
    meta: {
      title: 'homework',
    },
    children: [
      {
        path: '/homeworkStu',
        name: 'homeworkStu',
        component: homeworkStudent,
        meta: {
          title: 'homework',
          roles: ['student'],
        }
      },
      {
        path: '/homeworkTea',
        name: 'homeworkTea',
        component: homeworkTeacher,
        meta: {
          title: 'homework',
          roles: ['teacher']
        }
      },
    ]
  },
  {path: '*',redirect:'/404'}
]


const createRouter =()=> new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: constantRoutes
})

const router=createRouter();

export function resetRouter(){
  const newRouter=createRouter();
  router.matcher=newRouter.matcher;
}


export default router
