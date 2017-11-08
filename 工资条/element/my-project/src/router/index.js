import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hello2 from '@/components/component'
import Login from '@/views/Login'
import Index from '@/views/Index'
import Root from '@/views/Root'
import SalaryBar from '@/views/SalaryBar'
import EnterpriseService from '@/views/EnterpriseService'
import BusinessManagement from '@/views/BusinessManagement'
import PaySlip from '@/views/SalaryBar/children/PaySlip'
import PayrollManagement from '@/views/SalaryBar/children/PayrollManagement'
import EmployeeFeedback from '@/views/SalaryBar/children/EmployeeFeedback'
import PayrollService from '@/views/EnterpriseService/children/PayrollService'
import ReportFrm from '@/views/EnterpriseService/children/ReportFrm'
import BusinessAccount from '@/views/BusinessManagement/children/BusinessAccount'
import EmployeeFile from '@/views/BusinessManagement/children/EmployeeFile'
Vue.use(Router)
const routes = [
  {
    path: '/login',
    name: 'Login',
    meta: {
      title: '登录'
    },
    component: Login
  },
  {
    path: '/',
    name: 'Hello'
  },
  {
    path: '/index',
    name: 'Index',
    meta: {
      title: '首页'
    },
    component: Index
  }
]

const router = new Router({
  routes: routes
})

let routerArr = [
  {
    path: '/root',
    name: 'Root',
    meta: {
      title: '权限管理'
    },
    component: Root
  },
  {
    path: '/salarybar',
    name: 'SalaryBar',
    meta: {
      title: '工资条'
    },
    component: SalaryBar,
    children: [
      {
        path: 'payslip',
        name: 'PaySlip',
        meta: {
          title: '发工资条'
        },
        component: PaySlip
      },
      {
        path: 'payrollmanagement',
        name: 'PayrollManagement',
        meta: {
          title: '工资条管理'
        },
        component: PayrollManagement
      },
      {
        path: 'employeefeedback',
        name: 'EmployeeFeedback',
        meta: {
          title: '员工反馈'
        },
        component: EmployeeFeedback
      },
    ]
  },
  {
    path: '/enterpriseservice',
    name: 'EnterpriseService',
    meta: {
      title: '企业服务'
    },
    component:EnterpriseService,
    children: [
      {
        path: 'payrollseservice',
        name: 'PayrollService',
        meta: {
          title: '薪税服务'
        },
        component: PayrollService
      },
      {
        path: 'reportform',
        name: 'ReportFrm',
        meta: {
          title: '报表'
        },
        component: ReportFrm
      }
    ]
  },
  {
    path: '/businessmanagement',
    name: 'BusinessManagement',
    meta: {
      title: '企业管理'
    },
    component: BusinessManagement,
    children: [
      {
        path: 'businessaccount',
        name: 'BusinessAccount',
        meta: {
          title: '企业账户'
        },
        component: BusinessAccount
      },
      {
        path: 'employeefile',
        name: 'EmployeeFile',
        meta: {
          title: '员工档案'
        },
        component: EmployeeFile
      }
    ]
  }
]

// setTimeout(() => {

//   let newRouter = [
//     {
//       path: '/charts2',
//       name: 'Charts2',
//       meta: {
//         title: '图表2'
//       },
//       component: Hello
//     }
//   ]
//   router.addRoutes(newRouter)
//   console.log( router )
  
//   router.options.routes = router.options.routes.concat( newRouter )
// },3000)
// router.flg = false

// function getRouter( name ){
//   let routerItem = ''
//   for( let i=0; i<routerArr.length; i++ ){
//     if( routerArr[i].name == name ){
//       routerItem = routerArr[i]
//     }
//   }
//   return routerItem;
// }


// router.beforeEach( (to,from,next)=>{
//   document.title = to.meta.title;
//   let userInfo = window.localStorage.getItem('userInfo')
//   if( to.path == '/login' ){
//     router.flg = false;
//     router.options.routes = routes;
//   }
//   if( userInfo ){
//     if( to.path == '/login' ){
//       next( '/index' )
//     }else{
//       if( router.flg == false ){
//         router.flg = true;
//         let rootArr =  JSON.parse( userInfo ).root.split(',');
//         console.log( rootArr )
//         let newRootArr = [];
//         for( let i=0; i<rootArr.length; i++ ){
//           newRootArr.push( getRouter( rootArr[i] ) )
//         }

//         router.addRoutes( newRootArr )
//         let newRouter = router.options.routes.concat( newRootArr )
//         router.options.routes = newRouter;
//         next(to.path);
//       }else{
//         next();
//       }
//     }
//   }else{
//     router.flg = false;
//     router.options.routes = routes;

//     if( to.path == '/login' ){
//       next()
//     }else{
//       next('/login')
//     }
//   }
// } )

router.flg = false

function getRouter( name ){
  let routerItem = ''
  for( let i=0; i<routerArr.length; i++ ){
    if( routerArr[i].name == name ){
      routerItem = routerArr[i]
    }
  }
  return routerItem;
}


router.beforeEach( (to,from,next)=>{
  document.title = to.meta.title;
  let userInfo = window.localStorage.getItem('userInfo')
  if( to.path == '/login' ){
    router.flg = false;
    router.options.routes = routes;
  }
  if( userInfo ){
    if( to.path == '/login' ){
      next( '/index' )
    }else{
      if( router.flg == false ){
        router.flg = true;
        let rootArr =  JSON.parse( userInfo ).root.split(',');
        console.log( rootArr )
        let newRootArr = [];
        for( let i=0; i<rootArr.length; i++ ){
          newRootArr.push( getRouter( rootArr[i] ) )
        }

        router.addRoutes( newRootArr )
        let newRouter = router.options.routes.concat( newRootArr )
        router.options.routes = newRouter;
        next(to.path);
      }else{
        next();
      }
    }
  }else{
    router.flg = false;
    router.options.routes = routes;

    if( to.path == '/login' ){
      next()
    }else{
      next('/login')
    }
  }
} )


export {
  router,
  routerArr
}