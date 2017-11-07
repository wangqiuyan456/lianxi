<template>
<div class="headerright">
    <ul>
        <li v-for="(items,index) in arr" :key="index"  @click="tabList(index)"><i class="fa fa-search"></i>{{items.title}}</li>
    </ul>
</div>
</template>

<script>
export default {
  name: 'headerright',
  data () {
    return {
      arr: [
          {img: '', title: '筛选'},
          {img: '', title: '搜索'}
      ]
    }
  },
  methods: {
    tabList (index) {
      this.$emit('tablist', index)
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
            line-height:.4rem;
            display: inline;
            
            &:nth-of-type(1){
                margin-right: .1rem;
                margin-left: .4rem;
            }
        i.fa{
            width: 0.3rem;
            height: 0.3rem;
        }
        }
    }
  }   
</style>