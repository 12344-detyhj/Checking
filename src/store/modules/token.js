
import {resetRouter} from "@/router";
import {getToken, removeToken, setToken} from "@/utils/cookies_token";
import { login, logout, getInfo } from '@/api/user'

const  state = {
    token:getToken(),
    roles:[],
}

const  mutations = {
    SET_TOKEN(state,token){
        state.token = token
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
}

const actions = {
    login({ commit }, userInfo) {
        return new Promise((resolve, reject) => {
            login(userInfo.account, userInfo.password).then(response => {
                const data = response.data
                console.log(response.data.token)
                setToken(response.data.token)
                // window.$cookies.set('Admin-Token', response.data.token) //登录成功后将token存储在cookie之中
                commit('SET_TOKEN', data.token)
                resolve()
            }).catch(error => {
                reject(error)
            });
        });
    },
    getInfo({ commit, state }){
        return new Promise((resolve, reject) => {
            getInfo(state.token).then(response => {
                const { data } = response

                if (!data) {
                    reject('Verification failed, please Login again.')
                }

                const  roles  = data.identity
                console.log(roles)
                // roles must be a non-empty array
                if (!roles || roles.length <= 0) {
                    reject('getInfo: roles must be a non-null array!')
                }

                commit('SET_ROLES', roles)
                resolve(data)
            }).catch(error => {
                reject(error)
            })
        })
    },
    logout({ commit, state, dispatch }){
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                removeToken()
                resetRouter()

                // reset visited views and cached views
                // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
                // dispatch('tagsView/delAllViews', null, { root: true })

                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}