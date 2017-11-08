<template>
  <div class="Root">
       <el-alert
        title="注意"
        type="warning"
        :closable="false"
        class="warn"
        description="1:系统管理员默认拥有高级权限。2:修改薪酬管理权限时，会想所有具备薪酬的管理。3:薪酬管理员祝你能查看自己发送的工资记录，相互独立。4:修改权限后，授权用户重新登录后才能生效">       
      </el-alert>
      <el-table
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="name"
          label="授权用户"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="权限功能">
          <template scope="scope">
              <el-tag v-for="(items,index) in (scope.row.rule.split(','))" :key="index">{{items | ruleName}}</el-tag>
          </template>
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template scope="scope">
          <el-button 
            type="text" 
            size="small" 
            @click.native="editRoot = true; editItem=scope.row"
          >编辑</el-button>
        </template> 
        </el-table-column>
    </el-table>

     <el-dialog title="编辑权限" :visible.sync="editRoot">
      <el-transfer v-model="value1" :data="data"></el-transfer>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editRoot = false">取 消</el-button>
        <el-button type="primary" @click="editRootFn">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import {routerArr} from '../../router'
export default {
  name: 'Root',
  data () {
    const generateData = _ => {
      const data = [];
      for (let i = 1; i < routerArr.length; i++) {
        data.push({
          key: routerArr[i].name,
          label: `${ routerArr[i].meta.title }`
        });
      }
      return data;
    };
    return {
      data: generateData(),
      tableData:[],
      value1: [],
      editRoot: false,
      editItem:{}
      }
  },
  filters : {
    ruleName : function(value){
       if(!value) return ''
       value = value.toString()
       for(let i = 0; i<routerArr.length;i++){
          if(value == routerArr[i].name){
              value = routerArr[i].meta.title
          }
       }
       return value
    }
  },
  methods : {
     editRootFn ( ) {
      console.log( this.editId, this.value1 )
      this.$store.dispatch('user/editRoot',{
          id: this.editItem.id,
          rule: this.value1.join(',')
      }).then(
        (data)=>{
          console.log(data)
          this.editRoot = false;
          this.editItem.rule = this.value1.join(',');
          this.value1 = [];
        },
        ()=>{
          console.log('失败')
        }
      )

    }
  },
  created () {
    this.$store.dispatch('user/getRootList').then(
      (data)=>{
         this.tableData=data
      }
    )
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less"> 
   .Root{
     width: 70%;
     height: 0.1rem;
     margin-left: .3rem;
   }
</style>