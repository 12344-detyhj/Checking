import router from "@/router";
import store from "@/store"
import {Message} from 'element-ui'
import {getToken} from "@/utils/cookies_token";

// import * as path from "path";

const whiteList=['/login','/register','/forgot']


router.beforeEach(async (to, from, next) =>{

    const hasToken=getToken();
    console.log("token:"+hasToken)

    if(hasToken!=='default' && hasToken.length>0){ //存在cookies记录
        if(to.path==='/login'){
            console.log(1)
            next({path:'/'});   //存在cookies前往login，前往主页
        }else{
            const hasRoles=store.getters.roles &&store.getters.roles.length>0;
            console.log('roles:'+hasRoles)
            if(hasRoles){
                next();     //已获取身份，正常跳转
            }else{
                try {
                    const {identity}= await store.dispatch('token/getInfo');
                    let roles=identity

                    // console.log(roles)
                    const accessRoutes=await store.dispatch('routes/generateRoutes',roles);

                    console.log(5)
                    // console.log(accessRoutes)
                    router.addRoutes(accessRoutes);
                    // router.addRoute('/home',accessRoutes);
                    // console.log(to.path)
                    next({...to,replace:true})    //未获取身份，先获取再跳转
                }catch (error){
                    await store.dispatch('token/resetToken')
                    Message.error(error.message||'Has error')
                    console.log(2)
                    next(`/login?redirect=${to.path}`)      //获取时出错，重新登录
                }
            }
        }
    }else{
        if(whiteList.indexOf(to.path)!==-1){
            console.log(3)
            next()      //未存储cookies，前往白名单，正常跳转
        }else{
            console.log(4)
            next(`/login?redirect=${to.path}`)      //未存储cookies，前往非白名单，login
        }
    }
})
