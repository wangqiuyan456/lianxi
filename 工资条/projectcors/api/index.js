const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const opn = require('opn')
const app = express()
//数据的模块
const userDB = require('./dbUtil/userDB')
app.use( cors() )
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
  
// userDB.getUserList()

// app.get('/',function(req,res){
//    var data = {
//         'userName' : 'liuyu',
//         'age': 1000
//     }

//     res.send(data)
// })

    //登录的用户
    app.post('/api/login_do', function (req, res) {
        //接过来的参数
        let params = {
            userName:req.body.userName, 
            userPwd:req.body.userPwd
        }
        //用户
       userDB.loginDO(params).then(
          (data)=>{
            res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
            res.end(JSON.stringify(data));
          },
          (error)=>{
            res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
            res.end(JSON.stringify(error));
          }
        )
        console.log( req.body )   
    });


    //不同用户对应的权限
    app.get('/api/getUserRoot', function (req, res) {
        // console.log(req.query)
        let params = {
            id: req.query.id,
        }
        userDB.getUserRoot(params).then(
            ( data )=>{
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(data));
            },
            ( error ) => {
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(error));
            }
        )
        
    });

    //获取授权用户
     app.get('/api/getRootList', function (req, res) {           
        userDB.getUserRoot().then(
            ( data )=>{
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(data));
            },
            ( error ) => {
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(error));
            }
        )
    });
    //添加权限
    app.get('/api/editRoot', function (req, res) {
        let params = {
            id: req.query.id,
            rule: req.query.rule,
        }
        userDB.editUserRoot( params ).then(
            ( data )=>{
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(data));
            },
            ( error ) => {
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(error));
            }
        )
    })

   //member
    app.post('/api/addMember', function (req, res) {
        
        let params = {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email,
            idcard: req.body.idcard,
            salary: req.body.salary,
            sex: req.body.sex,
            education: req.body.education,
            bumen: req.body.bumen,
            status:req.body.status
        }
        console.log(params)
        userDB.AddMember(params).then(
            ( data )=>{
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(data));
            },
            ( error ) => {
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(error));
            }
        )
        
    });

   //分页
   app.get('/api/getMemberList', function (req, res) {
        console.log(req.query.page+"yyy"+req.query.pageSize)
        let params = {
            page: req.query.page,
            pageSize: req.query.pageSize,
            filter: JSON.parse( req.query.filter )
        }
        userDB.GetMemberList(params).then(
            ( data )=>{
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(data));
            },
            ( error ) => {
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(error));
            }
        )
        
    });

    //删除员工
     app.post('/api/removeMemberList', function (req, res) {
        console.log(req.body.id)
        let params = {
            id: req.body.id
        }
        userDB.RemoveMemberList(params).then(
            ( data )=>{
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(data));
            },
            ( error ) => {
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(error));
            }
        )
        
    });
    //编辑员工
     app.post('/api/bianjiMemberList', function (req, res) {
        console.log(req.body.status)
        let params = {
            name:req.body.name,
            phone:req.body.phone,
            idcard:req.body.idcard,
            email:req.body.email,
            salary:req.body.salary,
            sex:req.body.sex,
            education:req.body.education,
            bumen:req.body.bumen,
            id: req.body.id,
            status:req.body.status
        }
        userDB.BianjiMemberList(params).then(
            ( data )=>{
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(data));
            },
            ( error ) => {
                res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
                res.end(JSON.stringify(error));
            }
        )
        
    });
   //模糊查询
   // app.post('/api/filteremployeeList', function (req, res) {
   //      console.log(req.body.region)
   //      let params = {
   //          education:req.body.region,
   //          sex:req.body.sex
   //      }
   //      userDB.FilteremployeeList(params).then(
   //          ( data )=>{
   //              res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
   //              res.end(JSON.stringify(data));
   //          },
   //          ( error ) => {
   //              res.writeHead(200,{'Content-type':'text/plain;charset=utf-8'})
   //              res.end(JSON.stringify(error));
   //          }
   //      )     
   //  });

//工资条管理


app.listen(1010,function(err){
    if(err){
      console.log('报错')
    }else{
     console.log('成功')
    }
})