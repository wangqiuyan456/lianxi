<template>
  <div class="BusinessAccount">
    <el-tabs v-model="activeName2" type="border-card" @tab-click="handleClick" class="tab">
      <el-tab-pane label="基本信息" name="first">
        <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="企业名称">
                  <div class="inputs">
                    <el-input v-model="form.Enterprisename" placeholder="北京易企保科技有限公司"></el-input>
                  </div>
              </el-form-item> 
               <el-form-item label="活动名称">
                  <div class="inputs">
                    <el-input v-model="form.EnterpriseAname" placeholder="最多6个汉字"></el-input>
                  </div>
               </el-form-item> 
               <el-form-item label="地区">
                  <el-select v-model="form.diqu" placeholder="">
                    <el-option label="北京" value="beijing"></el-option>
                    <el-option label="上海" value="shanghai"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="行业">
                  <el-select v-model="form.hangye" placeholder="">
                    <el-option label="IT行业" value="shanghai"></el-option>
                    <el-option label="互联网" value="beijing"></el-option>
                  </el-select>
              </el-form-item>
              <el-form-item label="人数">
                  <el-select v-model="form.renshu" placeholder="">
                    <el-option label="50人以下" value="shanghai"></el-option>
                    <el-option label="50-100人" value="beijing"></el-option>
                    <el-option label="100-150人" value="beijing"></el-option>
                  </el-select> 
             </el-form-item>  
             <el-upload
              class="upload-demo"
              action=""
              :on-preview="handlePreview"
              :on-remove="handleRemove"
              :file-list="form.fileList2"
              :auto-upload="false"
              list-type="picture">
              <el-button size="small" type="primary" class="btn">点击上传企业Logo</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
          </el-form>
      </el-tab-pane>
      <el-tab-pane label="配置管理" name="second">版本信息</el-tab-pane>
      <el-tab-pane label="角色管理" name="third">短信详情</el-tab-pane>
      <button class="Save">保存</button>
    </el-tabs>
   
  </div>
</template>

<script>
export default {
  name: 'BusinessAccount',
  data () {
    return {
      activeName2: 'first',
      showhide:true,
      form: {
          diqu:'',
          hangye:'',
          renshu:'',
          fileList2:[],
          Enterprisename: '',
          EnterpriseAname: '' 
      },
     
    }
  },
   methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
       onSubmit() {
        console.log('submit!');
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .BusinessAccount{
     .el-tabs--border-card{
       border:none;
     }
     margin-top: .5rem;
     .tab{
       width: 100%;    
       .upload-demo{
         width: 3rem;
         height: 1.5rem;
         box-shadow: none;
       }
       .inputs{
         width: 240px;
       }  
       .Save{
       width: 1rem;
       height: .5rem;
       background: #ccc;
       color:#fff;
       outline: none;
       border:none;
       margin-top: .3rem;
     }          
     }
     
   }
</style>