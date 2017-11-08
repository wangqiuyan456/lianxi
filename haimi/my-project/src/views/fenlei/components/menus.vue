<template>
  <div class="menus">
        <ul>
             <li v-for="(items,index) of menus" :key="index" @click="tab(index)">{{items}}</li>
        </ul> 
  </div>
</template>
<script>
export default {
  name: 'menus',
  data () {
    return {
      menus:['分类','品牌']
    }
  },
  methods: {
    tab (ind) {
      this.$emit('tabs',ind)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .menus{
        width: 100%;
        height: 0.3rem;    
        text-align:center;
        line-height: .3rem;   
        font-size: .12rem;
        padding-top: .1rem;
        ul{ 
            width: 1rem;
            height: 0.3rem;
            text-align:center;
            line-height: .3rem;
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            li{
              width: 0.4rem;
              float:left;
              &:hover{
                border-bottom:2px solid #000;
              } 
            }
        }
    }
</style>