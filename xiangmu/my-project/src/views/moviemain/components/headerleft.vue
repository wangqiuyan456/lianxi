<template>
<div class="headerleft">
    <img :src="img" alt="">
    <a href="javascript:;">{{title}}</a>
</div>
</template>

<script>
export default {
  name: 'headerleft',
  props: ['title', 'img']
}
</script>
<style scoped lang="less">
  .headerleft{
    float:left;
    width:50%;
    height: 0.4rem; 
    line-height:.4rem;
    img{
       width:.2rem;
       height:.2rem;
       margin-top: .1rem;
       float:left;
       margin-left: .2rem;
       margin-right: .1rem;
    }
    a{
      display:inline-block;
      float: left;
    }
  }   
</style>