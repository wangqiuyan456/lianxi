import * as types from '../mutation-type'
import Vue from 'vue'
let axios = Vue.prototype.$axios

//state
const state = {
    movieList: []
}
//getters
const getters = {
    movieList: (state) => {
        return state.movieList
    }
}
//actions//可以实现异步，一般用于请求，是用来提交mutations
const actions = {
    getMovieList({ commit, state }, params) {
        return new Promise((resolve, reject) => {
            if(params.type == 'home'){
                axios.get('/api/queryAdvertise', {
                    params
                }).then((response) => {
                commit(types.GET_HOME_LIST,response.data.data)
                resolve(state.movieList)//疑惑
                }).catch(function (error) {
                reject( error )
                })
            }
            if(params.type == 'moviemain'){
                axios.get('/api/moviemainList', {
                    params
                }).then((response) => {
                commit(types.GET_HOME_LIST,response.data.data)
                resolve(state.movieList)//疑惑
                }).catch(function (error) {
                reject( error )
                })
            }
        })
    }
}
//用于改变状态的
const mutations = {
    [types.GET_HOME_LIST](state, movieList) {
        state.movieList = state.movieList.concat(movieList)
    }
}



export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}