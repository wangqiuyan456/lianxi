<template>
<div class="filterBar">
    
</div>
</template>

<script>
export default {
  name: 'filterBar',
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
  
</style>