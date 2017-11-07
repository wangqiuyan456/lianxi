import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
import zoom from '@/views/zoom/zoom'
import moviemain from '@/views/moviemain/moviemain'
import Login from '@/views/Login'
import moviedetails from '@/views/moviedetails/details'
import homedetails from '@/views/homedetails/homedetails'
import yanyuaninfo from '@/views/yanyuaninfo/yanyuaninfo'
import juzhao from '@/views/juzhao/juzhao'
import piaofangInfor from '@/views/piaofangInfor/piaofangInfor'
Vue.use(Router)

let newRouter = new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      console.log(savedPosition)
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/zoom',
      name: 'zoom',
      component: zoom,
      meta: {
        isLogin: true
      }
    },
    {
      path: '/moviemain',
      name: 'moviemain',
      component: moviemain
    },
    {
      path: '/moviedetails',
      name: 'moviedetails',
      component: moviedetails
    },
    {
      path: '/homedetails/:home_id',
      name: 'homedetails',
      component: homedetails
    },
    {
      path: '/yanyuaninfo',
      name: 'yanyuaninfo',
      component: yanyuaninfo
    },
    {
      path: '/juzhao',
      name: 'juzhao',
      component: juzhao
    },
    {
      path: '/piaofangInfor',
      name: 'piaofangInfor',
      component: piaofangInfor
    }

  ]
})
newRouter.beforeEach((to, from, next) => {
  let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
  if (to.meta.isLogin && !userInfo) {
    window.localStorage.setItem('toPath', to.path)
    next('login')
  } else {
    next()
  }
})

export default newRouter

