<template>
  <div class="PayrollManagement">
    <el-steps :space="400" :active="1" class="jindu" :center="true">
        <el-step title="步骤 1"></el-step>
        <el-step title="步骤 2"></el-step>
        <el-step title="步骤 3"></el-step>
    </el-steps>    
  </div>
</template>

<script>
export default {
  name: 'PayrollManagement',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .PayrollManagement{
     margin-top: 1rem;
     .jindu{
       margin-left:.5rem;
       width: 100%;
       .el-step__icon{
         display: inline-block;
         width: 1rem;
         height: 1rem;
         div{
           width: 0.3rem;
           height: 0.3rem;
         }
       }
     }
  }
</style>