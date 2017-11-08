import axios from 'axios'
import {getShowsByCityCode,moviemainList,fenleiList} from '../api/'
import MockAdapter from 'axios-mock-adapter'
                          //这个数据2秒延迟发送
let mock = new MockAdapter(axios,{delayResponse: 1000})



//home1
mock.onGet('/api/queryAdvertise').reply(function (config) {
  let params = config.params
  let data = {
    code: getShowsByCityCode.code,
    data: []
  }
  data.data = getShowsByCityCode.data.splice(params.page * params.pageSize, params.pageSize)
  console.log('data')
  return [200, data]
})

//home2
mock.onGet('/api/moviemainList').reply(function (config) {
  let params = config.params
  let data = {
    code: moviemainList.code,
    data: []
  }
  data.data = moviemainList.data.splice(params.page * params.pageSize, params.pageSize)
  return [200, data]
})




//fenlei
mock.onGet('/api/fenleiList').reply(function (config) {
  let params = config.params
  let data = {
    code: fenleiList.code,
    data: []
  }
  data.data = fenleiList.data.splice(params.page * params.pageSize, params.pageSize)
  return [200, data]
})



//登录
mock.onPost('/api/userLogin').reply(function(config){
  console.log(config)
    let params = JSON.parse( config.data );
    let data = {}
    let code = 200
    console.log(params)
    if( params.userName=='123' && params.passWord=='123' ){
        data = {
            code: 200,
            data: {
               msg: '成功'
            }
        };
        code = 200
    }else{
        data = {
            code: 200,
            data: {
                msg: '成功失败'
            }
        };
        code = 304
    }
    
    return [code,data]
})


