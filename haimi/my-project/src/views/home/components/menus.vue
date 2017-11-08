<template>
    <div class="menus">
        <ul>
            <li v-for="(items,index) of menudata" :key="index" @click="tab(index)">{{items}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'menus',
    data() {
        return {
            menudata:['推荐','居家','美妆','个护','箱包']
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
        height: 0.35rem;    
        text-align:center;
        line-height: .35rem;   
        font-size: .12rem;
        ul{ 
            display: flex;
            li{
            flex:1;
            }
        }
    }
</style>