import * as types from '../mutation-type'
import Vue from 'vue'

let axios = Vue.prototype.$axios

const state = {
    userInfo: {}  //用户信息
}
// getters
const getters = {
    getUserInfo: (state) => {
        if( window.location.href.indexOf('login') != -1 ) return false;
        if( JSON.stringify(state.userInfo) == '{}' ){
            let userInfo = JSON.parse( window.localStorage.getItem('userInfo') );
            if( !userInfo ){
                window.location.href="/login"
            }
            state.userInfo = userInfo
        }
        return state.userInfo
    }
}

// actions
const actions = {
    //用户
    loginDo ({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            axios.post('/api/login_do', params).then((response) => {
                // commit(types.SET_USER_INFOR,response.data)
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
    //用户对应的权限
    getUserRoot ({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            console.log(params)
            axios.get('/api/getUserRoot', {params}).then((response) => {
                // commit(types.SET_USER_INFOR,response.data)
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
    //获取出来的权限放进userInfo，进行遍历
    setUserInfo ({ commit, state }, params ) {    
        return new Promise( (resolve, reject)=>{
            // console.log(params.key,params.value)
            let userInfo = state.userInfo
            console.log(userInfo)
            userInfo[params.key] = params.value
            console.log( userInfo )
            commit(types.SET_USER_INFOR,userInfo)
            console.log(userInfo)
            resolve(userInfo)
            
        } )
    },
    //获取授权用户
     getRootList ({ commit, state },  ) {
        return new Promise( (resolve, reject)=>{
            axios.get('/api/getRootList').then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
    //改权限
    editRoot ({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            axios.get('/api/editRoot', {params}).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
    //退出登录
    loginOut ({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            commit(types.SET_USER_INFOR,'')           
            resolve({
                code: 200
            })
        } )
    }
}

// mutations
const mutations = {
    [types.SET_USER_INFOR](state, userInfo) {
        state.userInfo = userInfo
        if( userInfo == '' ){
            window.localStorage.removeItem('userInfo')
        }else{
            window.localStorage.setItem('userInfo', JSON.stringify(userInfo) )
        }
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
