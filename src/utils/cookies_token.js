import VueCookies from "vue-cookies";


const TokenKey = 'Admin-Token'
window.$cookies.set(TokenKey,'default','0')
export function getToken() {
    return window.$cookies.get(TokenKey)
}

export function setToken(token) {
    return window.$cookies.set(TokenKey, token,'0')
}

export function removeToken() {
    return window.$cookies.remove(TokenKey)
}