const mysql=require("mysql")

const connection=mysql.createConnection({
	host:"localhost",
	port:3306,
	user:"root",
	password:"wqy",
	database:"gztdb",
	insecureAuth:true
})
connection.connect(()=>{

	console.log('数据库链接成功')
})
connection.on('error',()=>{
	console.log('数据库连接失败')
})
module.exports=connection