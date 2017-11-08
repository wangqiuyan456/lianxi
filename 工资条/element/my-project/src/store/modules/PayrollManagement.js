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
    //             // commit(types.SET_PAYROLL_INFOR,response.data)
    //             // console.log(response)
    //             resolve(response.data)
    //         }).catch((error) => {
    //             reject( error )
    //         })
    //     } )
    // },



    //member添加员工
    // addMember ({ commit, state }, params ) {
    //     return new Promise( (resolve, reject)=>{
    //         axios.post('/api/addMember', params).then((response) => {
    //             resolve(response.data)
    //         }).catch((error) => {
    //             reject( error )  
    //         })
    //     } )
    // },


    
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