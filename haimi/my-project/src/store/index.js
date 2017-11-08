import Vue from 'vue'
import Vuex from 'vuex'

//模块
import home from './modules/home'
import Login from './modules/Login'
import moviemain from './modules/moviemain'

Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        count:0
    },
    modules: {
        home,
        Login,
        moviemain
    }
})

export default store