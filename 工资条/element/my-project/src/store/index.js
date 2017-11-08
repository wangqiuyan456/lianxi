import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'    //用户登录
import employeeList from './modules/employeeList'   //员工
import PayrollManagement from './modules/PayrollManagement'   //工资条


Vue.use( Vuex )

const store = new Vuex.Store({
  state: {
    count: 1,
    num: 10
  },
  modules: {
    user,
    employeeList,
    PayrollManagement
  }
})

export default store