const connect = require('./dbConnect')
let userDB = {}

//员工
// userDB.getUserList = function(){
// 	let sql = 'select * from user'
// 	connect.query(sql,[],(error,result)=>{
//         if(error){
//            console.log('查询失败')
//         }else{
//            console.log(result)
//         }
// 	})
// }



//用户对应的权限
userDB.getUserRoot = function( params ){
    
    let sql = "select * from root where id=?"

    if( !params ){
        sql = "select * from root"
    }
    return new Promise( ( resolve, reject )=>{
        let data = params ? [
            params.id 
        ] : [];
        connect.query( sql,data , ( error, result )=>{
            if( error ){
                reject(error)
            }else{
                if( result.length == 0 ){
                    reject({
                        code: 403,
                        msg: '没有此类型规则'
                    })
                }else{
                    if( params ){
                        resolve(result[0].rule)
                    }else{
                         resolve(result)
                    }
                }
            }
        } )
    } )
    
}


//登录用户
userDB.loginDO = function(params){
	let sql = 'select * from user where userName=? and userPwd=?'
	return new Promise((resolve,reject)=>{
	   connect.query(sql,[
	   	    params.userName,
	   	    params.userPwd
	   	],(error,result)=>{
	        if(error){
	           reject('查询失败')
	        }else{
	           if(result.length == 0){
                   reject({
                   	  code:404,
                   	  msg:'用户密码失败'
                   })
	           }else{
	           	   resolve(result)
	           }
	        }
	    })
	})

}
//添加权限
userDB.editUserRoot = function( params ){
    
    let sql = "update root set rule=? where id=?"
    let data = [
        params.rule,
        params.id
    ];
    console.log(data)
    return new Promise( ( resolve, reject )=>{
        
        connect.query( sql,data , ( error, result )=>{
            if( error ){
                reject(error)
            }else{
                
                resolve(result)
            }
        } )
    } )
    
}
//member
userDB.AddMember = function( params ){
    let sql = "insert into member (name,phone,email,idcard,salary,sex,password,education,bumen,status) VALUES (?,?,?,?,?,?,?,?,?,?)"

    return new Promise( ( resolve, reject )=>{
        connect.query( sql, [
            params.name,
            params.phone,
            params.email,
            params.idcard,
            params.salary,
            params.sex,
            params.phone.slice(-6), 
            params.education,
            params.bumen,
            params.status
        ], ( error, result )=>{
            if( error ){
                reject(error)
                console.log('失败')
            }else{
                resolve( result )
            }
        } )
    } )
}
//分页
userDB.GetMemberList = function( params ){
    //按ID倒序排列
    let sql;
    let data = [
        params.page*params.pageSize,
        parseInt( params.pageSize)
    ]
    
    if( Object.keys(params.filter).length == 0 ){
        sql = "select * from member order by id desc  limit ?,?"
    }else{
        
        var newArr = [];
        for( var item in params.filter ){
            newArr.push( "%"+params.filter[item]+"%" )
        }
        data = newArr.concat(data);

        var whereKey = Object.keys(params.filter).join(" like ? and ")+" like ?"
        
        sql = "select * from member where "+whereKey+" order by id desc  limit ?,? "
    }


    // let sql = "select * from member order by id desc limit ?,?"
    
    return new Promise( ( resolve, reject )=>{
        connect.query( sql,data, ( error, result )=>{
            if( error ){
                reject(error)
                console.log('失败')
            }else{
                resolve( {
                    count: 100,
                    data:result
                } )
            }
        } )
    } )
}
//删除员工
userDB.RemoveMemberList = function( params ){
    let sql = "delete from member where id = ?"
     console.log(params)
    return new Promise( ( resolve, reject )=>{
        connect.query( sql, [
            params.id
        ], ( error, result )=>{
            if( error ){
                reject(error)
                console.log('失败')
            }else{
                resolve( {
                    count: 100,
                    data:result
                } )
            }
        } )
    } )
}
//编辑员工
userDB.BianjiMemberList = function( params ){
    let sql = "update member set name = ?,phone=?,idcard=?,email=?,salary=?,sex=?,education=?,bumen=?,status=? where id = ?"
     console.log(params)
    return new Promise( ( resolve, reject )=>{
        connect.query( sql, [
            params.name,
            params.phone,
            params.idcard,
            params.email,
            params.salary,
            params.sex,
            params.education,
            params.bumen,
            params.status,
            params.id
            
        ], ( error, result )=>{
            if( error ){
                reject(error)
                console.log('失败')
            }else{
                resolve( {
                    count: 100,
                    data:result
                } )
            }
        } )
    } )
}
//模糊查询
// userDB.FilteremployeeList = function( params ){
//     let sql = "select * from member where education like ?"
//      console.log(params.bumen)
//     return new Promise( ( resolve, reject )=>{
//         connect.query( sql, [
//             params.education,
//             params.sex
//         ], ( error, result )=>{
//             if( error ){
//                 reject(error)
//                 console.log('失败')
//             }else{
//                 console.log(result)
//                 resolve( {
//                     count: 100,
//                     data:result
//                 } )
//             }
//         } )
//     } )
// }

//工资条管理


module.exports = userDB