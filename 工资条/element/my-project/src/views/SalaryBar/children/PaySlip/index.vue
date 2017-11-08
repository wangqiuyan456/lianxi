<template>
  <div class="PaySlip">
      <div class="list_box">
       <div class="list_top">
           <h2>2017年01月薪资详情</h2>
       </div>
       <div class="list_bottom">
            <ul>
              <li><h1><i class="el-icon-date"></i>实发总金额</h1><span>12132</span></li>
              <li><h1><i class="el-icon-check"></i>状态</h1><span>部分撤回</span></li>
              <li><h1><i class="el-icon-time"></i>发送时间</h1><span>02月11日</span></li>
              <li><h1><i class="el-icon-circle-check"></i>已确认</h1><span>27</span></li>
              <li><h1><i class="el-icon-information "></i>警告</h1><span>2</span></li>
            </ul>
       </div>
    </div>
    <div class="cont">
      <div class="cont_top">
      <div class="inputs">
        <el-input
          placeholder="搜索姓名"
          size="large"
          icon="search"
          v-model="input2"
          width="100px"
          :on-icon-click="handleIconClick">
        </el-input>
      </div>
      <div class="selects">
        <el-select v-model="formInline.Sendingmode" placeholder="发送方式" label-width="100" size="large">
           <el-option label="短信" value="duanxin"></el-option>
          <el-option label="邮箱" value="youxiang"></el-option>
        </el-select>
      </div> 
      <div class="selects">
        <el-select v-model="formInline.Sendcase" placeholder="发送情况" label-width="100" size="large">
          <el-option label="全部" value="quanbu"></el-option>
          <el-option label="未发送" value="weifasong"></el-option>
          <el-option label="已发送" value="yifasong"></el-option>
          <el-option label="已撤回" value="yichehui"></el-option>
        </el-select>
      </div> 
      <div class="selects">
        <el-select v-model="formInline.Confirmation" placeholder="确认情况" label-width="100" size="large">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </div> 
      </div>
    <div class="cont_bottom">
       <el-table
          ref="multipleTable"
          :data="tableData3"
          border
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange">
          <el-table-column
            type="selection"
            width="55">
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="120">
            <template scope="scope">{{ scope.row.name }}</template>
          </el-table-column>
          <el-table-column
            prop="phone"
            label="手机"
            width="120">
          </el-table-column>
          <el-table-column
            prop="wages"
            label="工资"
            width="120">
          </el-table-column>
          <el-table-column
            prop="education"
            label="员工状态"
            width="120">
          </el-table-column>
          <el-table-column
            prop="Sendingmode"
            label="发送方式"
            width="120">
          </el-table-column>
          <el-table-column
          prop="Sendcase"
          label="发送情况"
          width="120"
          :filters="[{ text: '已发送', value: '已发送' }, { text: '已撤回', value: '已撤回' }]"
          :filter-method="filterTag"
          filter-placement="bottom-end">
          <template scope="scope">
            <el-tag
              :type="scope.row.tag === '已发送' ? 'primary' : 'success'"
              close-transition>{{scope.row.tag}}
            </el-tag>
          </template>
        </el-table-column>
          <el-table-column
            prop="Confirmation"
            label="确认情况"
            width="120">
          </el-table-column>
          <el-table-column label="操作">
            <template scope="scope">
              <el-button
                size="small"
                @click="handleEdit(scope.$index, scope.row)">详情</el-button>
              <el-button
                size="small"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">撤回</el-button>
            </template>
          </el-table-column>
        </el-table>
    </div>  
   </div>    
  </div>
</template>

<script>
export default {
  name: 'PaySlip',
  data () {
    return {
      input2: '',
      formInline: {
          user: '',
          Sendingmode: '',
          Sendcase:'',
          Confirmation:''
      },
       tableData3: [{
          phone: '2016-05-03',
          name: '王小虎',
          wages: '25632',
          tag: '已发送'
        }, {
          phone: '2016-05-02',
          name: '王小虎',
          wages: '562',
          tag: '已撤回'
        }, {
          phone: '2016-05-04',
          name: '王小虎',
          wages: '852',
          tag: '已撤回'
        }, {
          phone: '2016-05-01',
          name: '王小虎',
          wages: '15975',
          tag: '已发送'
        }, {
          phone: '2016-05-08',
          name: '王小虎',
          wages: '756325',
          tag: '已发送'
        }, {
          phone: '2016-05-06',
          name: '王小虎',
          wages: '5395215',
          tag: '已撤回'
        }, {
          phone: '2016-05-07',
          name: '王小虎',
          wages: '52666',
          tag: '已发送'
        }]
    }
  },
   methods: {
    handleIconClick(ev) {
      console.log(ev);
    },
    formatter(row, column) {
        return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleSelectionChange(val) {
        this.multipleSelection = val;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .PaySlip{
     margin-top: .5rem;
     .list_box{
     [class^="el-icon"]{
       font-size: .2rem;
     }
     .list_top{
        h2{
          width: 100%;
          height: 1rem;
          line-height: 1.3rem;
          font-size: .2rem;
          font-weight: 400;
          border-bottom:1px solid #eee;
          padding-left: .4rem;
          box-sizing:border-box;
        }
     }
     .list_bottom{
        ul{
          width: 100%;
          height: 1rem;
          box-sizing:border-box;
          padding: .2rem 0rem;
          li{
            font-style: none;
            float: left;
            height: 0.6rem;
            width: 2rem;
            text-align: center;
            border-right:1px solid #eee;
            &:nth-of-type(5){
              border-right:none;
            }
            h1{
              font-size: .12rem;
              color:#ccc;
              font-weight: 400;
              i{
                margin-right: .1rem;
              }
              margin-bottom: .2rem;
            }
            span{
              font-size: .2rem;
              margin-top: .2rem;
              font-weight: 500;
            }
          }
        }
     }
     }
     .cont{
       box-sizing:border-box;
       padding:.4rem;
       .cont_top{
         width: 100%;
         height: .5rem;
          .inputs{
              width:1.5rem;
              input{
                width: 0.4px;
              }
              float:left;
              margin-right: .1rem;
          }
          .selects{
            width: 1.8rem;
            float:left;
            margin-right: .1rem;
          }
       }
     }
   }
</style>