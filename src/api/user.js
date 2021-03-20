
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

export function logout() {
    return request({
        url: baseUrl+'/user/logout',
        method: 'post'
    })
}