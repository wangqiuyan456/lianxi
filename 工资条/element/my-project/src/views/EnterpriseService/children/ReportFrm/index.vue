<template>
  <div class="ReportFrm">
    <div class="fulinameList" v-if="fulinameList">
     <el-col :span='6' style="text-align:left;margin-bottom:20px">
          <el-button type="primary" @click="dialogFormVisible = true,fulinameList= false">添加员工</el-button>
     </el-col>
     <el-table
      :data="tableData"
      style="width: 1260px;"
      >
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="手机号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="monthlysalary"
        label="税前月薪"
        width="180"
        >       
      </el-table-column>
      <el-table-column
        prop="Optimalamount"
        label="优化金额"
        width="180"
        >       
      </el-table-column>
      <el-table-column
        prop="burden"
        label="企业减负"
        width="180"
        >       
      </el-table-column>
      <el-table-column
        prop="income"
        label="员工增收"
        width="180"
        >       
      </el-table-column>
       <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
    </el-table-column>
    </el-table>
      <!-- 分页:current-page="page+1"-->
  <div class="block" page-size="10" style="">
      <el-pagination
        layout="prev, pager, next"
        :total="100"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
     </div>
   </div>
   <!-- 添加员工页面 -->
   <div class="dialogFormVisible" v-if="dialogFormVisible"> 
        <div class="box">
          <h1>添加参与福利员工</h1>
          <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width:800px;margin-left:20px">
             <el-form-item label=" 姓名  ">
              <el-input v-model="formInline.name" placeholder="审批人"></el-input>
             </el-form-item>
             <el-form-item label="税前月薪">
              <el-input v-model="formInline.monthlysalary" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="手机号">
              <el-input v-model="formInline.phone" placeholder="审批人"></el-input>
            </el-form-item>
            <el-form-item label="优化金额">
              <el-input v-model="formInline.Optimalamount" placeholder="审批人"></el-input>
            </el-form-item>
          </el-form>
          <!-- 开关 -->
          <div class="switch">
              <span>计算优化结果</span>
              <el-switch
                v-model="value1"
                on-text=""
                off-text="">
              </el-switch>
          </div>
          <div class="forms">
              <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width:800px;margin-left:20px">
                   <el-form-item label="缴纳城市" style="width:400px">
                    <el-select v-model="formInline.region" placeholder="活动区域" style="width:100px">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                    <el-select v-model="formInline.region" placeholder="活动区域" style="width:100px">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>              
            </el-form>
            <div class="cont">
                <div class="left" style="float:left">
                    <h4>缴纳项目   个人缴纳</h4>
                    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width:200px;margin-left:20px">
                        <el-form-item label=" 养老">                        
                          <el-input v-model="formInline.name"></el-input>
                        </el-form-item>
                        <el-form-item label="医疗">
                          <el-input v-model="formInline.monthlysalary"></el-input>+<el-input v-model="formInline.monthlysalary"></el-input>
                        </el-form-item>
                        <el-form-item label="失业">
                          <el-input v-model="formInline.phone"></el-input>
                        </el-form-item>
                        <el-form-item label="工伤" style="float:left">
                          <el-input v-model="formInline.Optimalamount"></el-input>
                        </el-form-item>
                        <el-form-item label="生育" style="float:left">
                          <el-input v-model="formInline.Optimalamount"></el-input>
                        </el-form-item>
                        <el-form-item label="公积金" style="float:left">
                          <el-input v-model="formInline.Optimalamount"></el-input>
                        </el-form-item>
                        <el-form-item label="基数上限" style="float:left">
                          <el-input v-model="formInline.Optimalamount"></el-input>
                        </el-form-item>
                    </el-form> 
                </div>
                <div class="right">
                    <h4>公司缴纳</h4>
                    <el-form :inline="true" :model="formInline" class="demo-form-inline" style="width:200px;margin-left:20px">
                        <div class="input1" style="width:50px">         
                          <el-input v-model="formInline.name"></el-input>
                        </div>  
                        <el-form-item label="">
                          <el-input v-model="formInline.monthlysalary"></el-input>+<el-input v-model="formInline.monthlysalary"></el-input>
                        </el-form-item>
                        <div class="input1" style="width:50px">  
                          <el-input v-model="formInline.phone"></el-input>
                        </div> 
                       <div class="input1" style="width:50px">  
                          <el-input v-model="formInline.phone"></el-input>
                        </div> 
                        <div class="input1" style="width:50px">  
                          <el-input v-model="formInline.phone"></el-input>
                        </div> 
                        <div class="input1" style="width:50px">  
                          <el-input v-model="formInline.phone"></el-input>
                        </div> 
                        <div class="input1" style="width:50px">  
                          <el-input v-model="formInline.phone"></el-input>
                        </div> 
                    </el-form> 
                </div>
            </div>
          </div>
        </div>
   </div>
  </div>
</template>

<script>
export default {
  name: 'ReportFrm',
  data () {
    return {
      fulinameList:false,
      dialogFormVisible:true,
      page:'',
      tableData: [{
            name: '王小虎',
            phone: '18964156',
            monthlysalary:"15653",
            Optimalamount:"159",
            burden:'4111',
            income:'4545'
          }, {
            name: '王小虎',
            phone: '151956156',
            monthlysalary:"1563",
            Optimalamount:"156",
            burden:'456',
            income:'159'
          }, {
            name: '王小虎',
            phone: '159626442',
            monthlysalary:'156325',
            Optimalamount:'156',
            burden:'456',
            income:'568'
          }, {
            name: '王小虎',
            phone: '163452563',
            monthlysalary:'59638',
            Optimalamount:'596',
            burden:'458',
            income:'789'
          }],
           formInline: {
            name: '',
            monthlysalary:'',
            phone:'',
            Optimalamount:''
          },
          value1:''
    }
  },
  methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      handleSizeChange(val) {//每页的条数
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {  //分页的当前页变化
        this.page=val-1
      },
      onSubmit() {
        console.log('submit!');
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
    .ReportFrm{
      padding-left: .5rem;
      padding-top: .5rem;
      margin-top: .6rem;
      .fulinameList{
      .el-table{
          tr{
            border:none;
          }
      }
      .block{
        margin-left: 3rem;
        margin-top: .2rem;
        width: 600px;
        height: .5rem;
        .el-pagination{
          height: 0.5rem;
          button{
            width: 0.5rem;
            height: 0.5rem;
          }
          .el-pager{
            height: 0.5rem;
            li,button{
              height: 0.5rem;
              width: 0.5rem;
              text-align: center;
              line-height: .5rem;
            }
          }
        }
        }
      }
      .dialogFormVisible{
        .box{
          width: 100%;
         .demo-form-inline{
           margin-top: .3rem;
            .el-form-item{
              &:nth-of-type(1){
                margin-left: .15rem;;
              }
            }
         }
         .switch{
           margin-left: .25rem;;
         }
         .cont{
           border:2px solid #eee;
           width: 6rem;
           height:550px;
          //  background: red;
           h4{
             font-size: .17rem;
             font-weight: 400;
             border-bottom:1px solid #eee;
           }
           .left{
             width: 300px;
             height: 500px;
             float:left;
            h4{
                width: 100%;
                height: 0.7rem;
                font-size: .3rem;
                font-weight: 400;
                line-height: .7rem;
                box-sizing:border-box;
                padding-left: .2rem;
              }
             .el-form-item{
                .el-form-item__label{
                  width: 80px;
                }
                &:nth-of-type(1) .el-form-item__label{
                   margin-left: -13px;
                }
                &:nth-of-type(2){
                   width: 3rem;
                   .el-form-item__content{
                      width: 150px;
                      .el-input{
                          width: 50px;
                      }
                   }
                }
                .el-form-item__content{
                  width: 50px;
                }
             }
           }
           .right{
             height: 5rem;
             float:left;
             h4{
                width:300px;
                height: 0.7rem;
                font-size: .3rem;
                font-weight: 400;
                line-height: .7rem;
                box-sizing:border-box;
                padding-left: .2rem;
              }
             .input1{
               margin-top: .25rem;
             }
             .el-form-item{
               margin-bottom:-2px;
               margin-top: .25rem;
                &:nth-of-type(2){
                   width: 3rem;
                   .el-form-item__content{
                      width: 150px;
                      .el-input{
                          width: 50px;
                      }
                   }
                }
                .el-form-item__content{
                  width: 50px;
                }
             }
           }
         }
        }
      }
    }
</style>