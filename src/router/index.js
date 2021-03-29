import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
// import mainMenu from "@/views/Home/components/mainMenu/mainMenu";



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
    component: ()=>import('@/views/login/loginView')
  },
  {
    path: '/register',
    name: 'registerView',
    component: ()=>import('@/views/register/registerView')
  },
  {
    path:'/forgot',
    name:'forgotPasswordView',
    component: ()=>import('@/views/forgotPassword/forgotPasswordView')
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
        component:()=>import('@/views/mainMenu/mainMenu'),
        meta:{
          title:'mainMenu'
        }
    }]
  },
  {
    path: '/404',
    name: '404NotFound',
    component: ()=>import('@/views/errorPage/404')
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
        component: ()=>import('@/views/homework/homeworkStudent'),
        meta: {
          title: 'homework',
          roles: ['student'],
        }
      },
      {
        path: '/homeworkTea',
        name: 'homeworkTea',
        component: ()=>import('@/views/homework/homeworkTeacher'),
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
