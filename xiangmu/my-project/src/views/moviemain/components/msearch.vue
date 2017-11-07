<template>
<div class="msearch">
   <div class="header">
     <input type="text" placeholder="影院名称或地址"><button @click="quxiao()">取消</button>   
   </div>
</div>
</template>

<script>
export default {
  name: 'msearch',
  methods: {
    quxiao () {
      this.$emit('quxiao')
    }
  }
}
</script>
<style scoped lang="less">
   .msearch{
     .header{
       width: 100%;
       height: 0.45rem;
       text-align:left;
       border-bottom:1px solid #eee;
       input{
         display: inline-block;
         margin: .1rem;
         width: 75%;
         height: 0.23rem;
         border: 1px solid #ebebeb;
         border-radius: 4px;
         padding-left: .15rem;
       }
       button{
         outline: none;
         border: none;
         color: #108ee9;
         text-decoration: none;
         background: transparent;
       }
     }
   }
</style>