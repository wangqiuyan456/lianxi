import * as types from '../mutation-type'
import Vue from 'vue'

let axios = Vue.prototype.$axios

const state = {
  
}
// getters
const getters = {

}

// actions
const actions = {
    //员工档案
    // getemployeeList ({ commit, state }, params ) {
    //     return new Promise( (resolve, reject)=>{
    //         axios.get('/api/getEmployeeList', params).then((response) => {
    //             // commit(types.SET_EMPLOY_INFOR,response.data)
    //             // console.log(response)
    //             resolve(response.data)
    //         }).catch((error) => {
    //             reject( error )
    //         })
    //     } )
    // },
    //添加员工
    // addemployeeList ({ commit, state }, params ) {
    //     return new Promise( (resolve, reject)=>{
    //         axios.get('/api/addEmployeeList', params).then((response) => {
    //             resolve(response.data)
    //         }).catch((error) => {
    //             reject( error )
    //         })
    //     } )
    // },
    //删除员工
    // removeemployeeList ({ commit, state }, params ) {
    //     return new Promise( (resolve, reject)=>{
    //         axios.get('/api/removeEmployeeList', params).then((response) => {
    //             resolve(response.data)
    //         }).catch((error) => {
    //             reject( error )
    //         })
    //     } )
    // },
    //筛选
    // filteremployeeList ({ commit, state }, params ) {
    //     return new Promise( (resolve, reject)=>{
    //         axios.get('/api/filterEmployeeList', params).then((response) => {
    //             resolve(response.data)
    //         }).catch((error) => {
    //             reject( error )  
    //         })
    //     } )
    // },

    //member添加员工
    addMember ({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            axios.post('/api/addMember', params).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )  
            })
        } )
    },
    //分页
    getMemberList ({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            axios.get('/api/getMemberList', {params}).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
    //删除员工
    removeMemberList ({ commit, state }, params ) {
        return new Promise( (resolve, reject)=>{
            axios.post('/api/removeMemberList', params).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
    //编辑员工
    bianjiMemberList ({ commit, state }, params ) {
        console.log(params)
        return new Promise( (resolve, reject)=>{
            axios.post('/api/bianjiMemberList', params).then((response) => {
                resolve(response.data)
            }).catch((error) => {
                reject( error )
            })
        } )
    },
    //模糊查询
    // filteremployeeList ({ commit, state }, params ) {
    //     console.log(params)
    //     return new Promise( (resolve, reject)=>{
    //         axios.post('/api/filteremployeeList', params).then((response) => {
    //             resolve(response.data)
    //         }).catch((error) => {
    //             reject( error )
    //         })
    //     } )
    // }



    
}

// mutations
const mutations = {
    [types.SET_EMPLOY_INFOR](state, employeeList) {
         this.employeeList=employeeList
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}