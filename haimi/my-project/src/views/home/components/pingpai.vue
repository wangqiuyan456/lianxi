<template>
    <div class="pingpai">
       <titles :cont="cont"></titles>
       <div class="content">
           <div class="left">
             <img src="//img.haimi.com/Fpj_yvmXlvrmg_J_KKQHnAvx_ogA" alt="">
             <img src="//img.haimi.com/FpxXPuCFqQ5Zi7X7wZU5Qxsv8CQs" alt="">
           </div>
           <div class="right">
             <img src="//img.haimi.com/FktreYFzuBx2gLTw9V9_0s4GGch6" alt="">
           </div>
       </div>
    </div>
</template>

<script>
 import titles from '@/components/titles'
export default {
    name: 'pingpai',
    data() {
        return {
            cont:'严选品牌'
        }
    },
    components: {
        titles
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .content{
       width: 100%;     
       display: flex;
       .left{
           flex:1;
           img{
               display: block;
               width: 100%;
               height: 1.02rem;
           }
       }
       .right{
           flex:1;
           img{
               width: 100%;
               height: 2.04rem;
           }
       }
   }
</style>