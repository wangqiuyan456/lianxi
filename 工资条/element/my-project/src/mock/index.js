import axios from 'axios'
import axiosMockAdapter from 'axios-mock-adapter'

let mockApi = new axiosMockAdapter( axios )

import api from '../api'

/**
 * 模拟登陆接口
 * 参数：userName， userPwd
 * 类型：POST
 */



 //登录
let root = {}
root[0] = [
    'Root','SalaryBar',
    'EnterpriseService',
    'BusinessManagement'
]
root[1] = [
    'EnterpriseService',
    'BusinessManagement'
]
root[2] = [
    'SalaryBar',
    'EnterpriseService',
]
mockApi.onPost( '/api/login_do' ).reply(function( config ){
    let params = JSON.parse( config.data );
    
    let data = {
        code: 200,
        data: {}
    };
    if( params.userName == 'liuyu' ){
        data.data = {
            userName: '刘宇',
            sex: '男',
            age: 100,
            photo: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1762973822,121126736&fm=27&gp=0.jpg',
            type: 0,
            root: root[0]
        }
    }else if( params.userName == 'xiaoming' ){
        data.data = {
            userName: '小明',
            sex: '男',
            age: 10,
            photo: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3929251423,454148251&fm=27&gp=0.jpg',
            type: 1,
            root: root[1]
        }
    }else if( params.userName == 'xiaolv' ){
        data.data = {
            userName: '小绿',
            sex: '男',
            age: 10,
            photo: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=227505219,1226851763&fm=27&gp=0.jpg',
            type: 2,
            root: root[2]
        }
    }

    return [200, data]
})


// //员工档案
mockApi.onGet( '/api/getEmployeeList' ).reply(function( config ){
        let params=config
        let data={
            code:200,
            data:[]
        }
        data.data=api.employeefile.employeeList.slice(params.page*params.pageSize, params.page*params.pageSize+params.pageSize)
        return [200,data]
})

//添加员工
mockApi.onGet( '/api/addEmployeeList' ).reply(function( config ){
        let params=config
        api.employeefile.employeeList.unshift(
              params
        )
        let data={
             code:200,
             msg:'添加成功'
        }
        return [200,data]
        
})
//删除员工
mockApi.onGet( '/api/removeEmployeeList' ).reply(function( config ){
        let params=config["0"]
        for(var i = 0;i<api.employeefile.employeeList.length;i++){
            if(api.employeefile.employeeList[i].id == params){
               api.employeefile.employeeList.splice(i,1)   
            }
        }       
      //console.log(api.employeefile.employeeList)
        let data={
             code:200,
             msg:'删除成功'
        }
        return [200,data]       
})
//筛选
mockApi.onGet( '/api/filterEmployeeList' ).reply(function( config ){
        let params=config["0"]                
        let data={
                code:200,
                msg:'删除成功',
                data:[]
                }
        let arr=[]
         for(var i = 0;i<api.employeefile.employeeList.length;i++){  
               if(api.employeefile.employeeList[i].sex.toString().indexOf(params) != -1){
                    arr.push(api.employeefile.employeeList[i])                        
               }                     
         }
        data.data=  arr  
        return [200,data]    
})