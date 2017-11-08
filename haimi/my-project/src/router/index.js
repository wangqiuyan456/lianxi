import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home/home'
import fenlei from '@/views/fenlei/fenlei'
import gouwuche from '@/views/gouwuche/gouwuche'
import zoom from '@/views/zoom/zoom'
import login from '@/views/login/login'
import xiangqing from '@/views/xiangqing/xiangqing'

Vue.use(Router)

let newRouter = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/fenlei',
      name: 'fenlei',
      component: fenlei
    },
    {
      path: '/xiangqing',
      name: 'xiangqing',
      component: xiangqing
    },
    {
      path: '/gouwuche',
      name: 'gouwuche',
      component: gouwuche
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
      path: '/login',
      name: 'login',
      component: login
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