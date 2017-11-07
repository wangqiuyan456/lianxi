<template>
  <div class="titlebox">
    <h3 class="box-title" v-if="title">{{title}}</h3>
    <div :class="['section-content',{paddingBox:padding}]">
        <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'titlebox',
  props:{
      'title':{
          default: ''
      },
      'padding':{
          default: ''
      }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .titlebox{
    width: 100%;
    box-sizing: border-box;
    padding: .1rem;
    background: #fff;
    margin: .1rem 0;
    h3{
      font-size: .15rem;
      text-align:left;
    }
    .section-content{
        width: 100%;
    }
  }
</style>