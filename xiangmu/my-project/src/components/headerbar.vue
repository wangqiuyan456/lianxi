<template>
  <div class="header">
     <slot name="headerleft"></slot>
     <slot name="headerright"></slot>
  </div>
</template>

<script>
export default {
  name: 'headerbar'
}
</script>
<style scoped lang="less">
  .header{
    width:100%;
    height:.4rem;
    position:fixed;
    left: 0;
    top:0;
    border-bottom: 1px solid #eee;
    padding-bottom: .01rem;   
    z-index:1000;
    background: #fff;
  }   
</style>
