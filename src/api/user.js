
import request from '@/utils/request'
const baseUrl ='http://localhost:9000'
export function login(name,password) {
    return request({
        url: baseUrl+'/user/login',
        method: 'post',
        params:{
            username:name,
            password:password,
        }
    })
}

export function getInfo(token) {
    return request({
        url: baseUrl+'/user/info',
        method: 'get',
        params: { token }
    })
}

export function register(account, password, email, phone){
    return request({
        url:baseUrl+'/user/register',
        method: 'post',
        params:{
            account:account,
            password:password,
            email:email,
            phone:phone,
        }
    })
}


export function logout() {
    return request({
        url: baseUrl+'/user/logout',
        method: 'post'
    })
}