<template>
<div class="headerright">
    <ul>
        <li v-for="(items,index) of navlist" :class="{active: isActive == index}" @click="activeList(index)" :key="index">{{items}}</li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'headerright',
  props: ['navlist'],
  data () {
    return {
      isActive: 0
    }
  },
  methods: {
    activeList (index) {
      this.isActive = index
      this.$emit('activelist', index)
    }
  }

}
</script>
<style scoped lang="less">
  .headerright{
    width:50%;
    height:.4rem;
    float: right;
    ul{
        width: 100%;
        display: flex;
        li{
            flex:1;
            line-height:.4rem;
            display: inline;
        
        }
        .active{
            border-bottom: 2px solid red;
        }
    }
    
  }   
</style>