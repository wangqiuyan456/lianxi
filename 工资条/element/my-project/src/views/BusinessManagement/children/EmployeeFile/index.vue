<template>
  <div class="EmployeeFile">
<el-form :inline="true" class="demo-form-inline">
      <el-row>
        <el-col :span='18'>
            <el-form-item label="活动区域">
              <el-select v-model="form.region" placeholder="请选择活动区域" class="selects">
                <el-option label="八维" value="八维"></el-option>
                <el-option label="在职" value="在职"></el-option>
                <el-option label="离职" value="离职"></el-option>
                <el-option label="女" value="0"></el-option>
                <el-option label="男" value="1"></el-option>
              </el-select>
            </el-form-item>
        </el-col>
        <el-col :span='6' style="text-align:right;">
          <el-button type="primary" @click="dialogFormVisible = true">添加员工</el-button>
        </el-col>
      </el-row>
    </el-form>
 
</el-dialog> 
    <el-table
    :data="tableData"
    border
    style="width: 100%">   
    <el-table-column
      label="姓名"
      width="180">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
           <p>id:{{ scope.row.id }}</p>
           <p>姓名: {{ scope.row.name }}</p>
           <p>身份证: {{ scope.row.idCard}}</p>          
           <p>学历：{{ scope.row.education }}</p>
           <p>性别：{{ scope.row.sex==="0"?'女':'男' }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag>{{ scope.row.name }}</el-tag>
          </div> 
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column
      label="手机号"
      width="180">
      <template scope="scope">
         {{ scope.row.phone}}
      </template>
    </el-table-column>
    <el-table-column
      label="部门"
      width="180">
      <template scope="scope">
         {{ scope.row.bumen}}
      </template>
    </el-table-column>
    <el-table-column
      label="性别"
      width="180">
      <template scope="scope">
         {{ scope.row.sex==="0"?'女':'男'}}
      </template>
    </el-table-column>
    <el-table-column
      label="学历"
      width="180">
      <template scope="scope">
         {{ scope.row.education }}
      </template>
    </el-table-column>
   <el-table-column
      label="员工离职状态"
      width="180">
      <template scope="scope">
         {{ scope.row.status==='0'?'离职':'在职'}}
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button
          size="small"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.$index, tableData)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 分页 -->
  <div class="block" page-size="10">
  <el-pagination
    layout="prev, pager, next"
    :total="100"
    :current-page="page+1"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange">
  </el-pagination>
</div>
<!-- 添加员工 -->
<el-dialog top='5%' title="添加新员工" size='tiny' :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="员工姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="formLabelWidth">
          <el-input v-model="form.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" :label-width="formLabelWidth">
          <el-input v-model="form.idcard" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="入职薪资" :label-width="formLabelWidth">
          <el-input v-model="form.salary" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="员工性别" :label-width="formLabelWidth">
          <el-select v-model="form.sex">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="员工学历" :label-width="formLabelWidth">
          <el-select v-model="form.education" placeholder="请选择学历">
            <el-option label="八维" value="八维"></el-option>
            <el-option label="本科" value="本科"></el-option>
            <el-option label="转科" value="转科"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入职部门" :label-width="formLabelWidth">
          <el-select v-model="form.bumen" placeholder="请选择学历">
            <el-option label="人事部" value="人事部"></el-option>
            <el-option label="技术部" value="技术部"></el-option>
            <el-option label="财务部" value="财务部"></el-option>
            <el-option label="市场部" value="市场部"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="员工离职状态" :label-width="formLabelWidth">
          <el-select v-model="form.status">
            <el-option label="在职" value="1"></el-option>
            <el-option label="离职" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addEmployee">确 定</el-button>
      </div>
    </el-dialog>
  <!-- 编辑 -->
  <el-dialog top='5%' title="编辑" size='tiny' :visible.sync="showhide">
      <el-form :model="bianji">
        <el-form-item label="员工姓名" :label-width="formLabelWidth">
          <el-input v-model="bianji.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="手机号码" :label-width="formLabelWidth">
          <el-input v-model="bianji.phone" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="身份证号" :label-width="formLabelWidth">
          <el-input v-model="bianji.idcard" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="入职薪资" :label-width="formLabelWidth">
          <el-input v-model="bianji.salary" auto-complete="off"></el-input>
        </el-form-item>
         <el-form-item label="员工性别" :label-width="formLabelWidth">
          <el-select v-model="bianji.sex">
            <el-option label="男" value="1"></el-option>
            <el-option label="女" value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="员工学历" :label-width="formLabelWidth">
          <el-select v-model="bianji.education" placeholder="请选择学历">
            <el-option label="八维" value="八维"></el-option>
            <el-option label="本科" value="本科"></el-option>
            <el-option label="转科" value="转科"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="入职部门" :label-width="formLabelWidth">
          <el-select v-model="bianji.bumen" placeholder="请选择学历">
            <el-option label="人事部" value="人事部"></el-option>
            <el-option label="技术部" value="技术部"></el-option>
            <el-option label="财务部" value="财务部"></el-option>
            <el-option label="市场部" value="市场部"></el-option>
          </el-select>        
        </el-form-item>
         <el-form-item label="员工离职状态" :label-width="formLabelWidth">
          <el-select v-model="bianji.status">
            <el-option label="在职" value="1"></el-option>
            <el-option label="离职" value="0"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="bianjiEmployee">确 定</el-button>
      </div>
    </el-dialog>


  </div>
</template>

<script>
export default {
  name: 'EmployeeFile',
  data() {
    return {
      tableData: [],
      page: 0,
      pageSize: 10,
      count: 0,
      dialogTableVisible: false,
      dialogFormVisible: false,
      formLabelWidth: '100px',
      showhide: false,
      filter:{},
      form: {
        name: '',
        phone: '',
        idcard: '',
        email: '',
        salary: '',
        sex: '',
        education: '',
        bumen: '',
        region: '',
        status:''
        },
        bianji: {
          name: '',
          phone: '',
          idcard: '',
          email: '',
          salary: '',
          sex: '',
          education: '',
          bumen: '',
          status:''
          }
          
    }
  },
  methods: {
      handleSizeChange(val) {//每页的条数
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {  //分页的当前页变化
        this.page=val-1
        this.getMemberList( this.pageSize, this.page  )
        console.log(this.pageSize,this.page)
        
      },
      // getemployeeList (page,pageSize) {
      //       this.$store.dispatch('employeeList/getemployeeList', {
      //         page:page,
      //         pageSize:pageSize
      //       }).then(
      //         (data) => {
      //           this.tableData=data.data
      //         }
      //     )
      //   },
      addEmployee () {//添加员工    
      console.log(this.form.sex)
      // if(this.form.sex == "男"){
      //    this.form.sex = "0"
      // }else{
      //   this.form.sex = "1"
      // }
          this.$store.dispatch('employeeList/addMember', this.form).then(
              (data) => {
                console.log(data)
                this.tableData=data.data               
                this.dialogFormVisible = false      
                this.page = 0;   
                this.getMemberList(this.pageSize,this.page)                
              }
          )
      },
      getMemberList ( pageSize = 10, page = 0) {//分页
          this.$store.dispatch('employeeList/getMemberList',{
            pageSize,
            page,
            filter:{
              // "education":"八维"
            } 
           
           
          }).then(
            ( data )=>{
              this.tableData = data.data
              this.count = data.count
            }
          )
    },
      handleDelete (index, rows) {//删除
      console.log(rows[index].id)
         this.$store.dispatch('employeeList/removeMemberList',rows[index]).then(
            ( data )=>{
              this.page = 0;   
              this.getMemberList(this.pageSize,this.page)  
            }
          )
            // rows.splice(index, 1)
          //   this.$store.dispatch('employeeList/removeemployeeList', rows[index].id).then(
          //     (data) => {
          //       this.tableData=data.data
          //       this.page = 0;
          //       this.getemployeeList(this.page,this.pageSize)
          //     }
          // )
      },
      //编辑
      handleEdit (index,rows){
        console.log(rows.id)
        this.showhide = true
        this.bianji = rows
      },
      //编辑里的确定
      bianjiEmployee () {
        console.log(this.bianji)
        this.$store.dispatch('employeeList/bianjiMemberList',this.bianji).then(
          ( data )=>{
            console.log(data)
          }
        )
        
      }
  },
  created() {   
    this.getMemberList()
    
          // this.$store.dispatch('employeeList/getemployeeList', {
          //     page:0,
          //     pageSize:10
          //   }).then(
          //     (data) => {
          //       this.tableData=data.data
          //     }
          // )
  },
  watch:{
    'form.region' () {
      if(this.form.region == "八维"){
        this.filter = {"education":"八维"}
        console.log(this.filter)
      }else{
        this.filter = {}
      }
   
        // this.$store.dispatch('employeeList/filteremployeeList', this.form.region).then(
        //       (data) => {
        //         console.log(data.data)
        //         this.tableData=data.data
        //         // this.page = 0;
        //         // this.getemployeeList(this.page,this.pageSize)
        //       }
        //   )
        //模糊查询
        //  this.$store.dispatch('employeeList/filteremployeeList', this.form).then(
        //       (data) => {
        //         this.tableData=data.data
                
        //       }
        //   )
    },
    'page' () {
      //  this.getMemberList()
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .btn{
     background: skyblue;
     float:right;
     margin-right: .4rem;
     width: 1.2rem;
     height: 0.6rem;
     color:#fff;
   }
 .selects{
   margin-top: .6rem;
 }
</style>