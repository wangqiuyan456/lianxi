<template>
  <div class="fenleilist">
     <div class="list" v-for="(items,index) of movieList" :key="index">
        <img :src="items.image" alt=""> 
         <ul>
             <li>面膜</li>
             <li>面霜乳液</li>
             <li>眼霜</li>
             <li>精华</li>
             <li>爽肤水</li>
             <li>卸妆</li>
             <li>洁面</li>
             <li>隔离</li>
             <li>精油</li>
         </ul>
     </div>
     <!-- <div class="list">
         <img src="//img.haimi.com/FoXDKmO-JoZqbHyGfCcOQFeb0Jit" alt="">
         <ul>
             <li>面膜</li>
             <li>面霜乳液</li>
             <li>眼霜</li>
             <li>精华</li>
             <li>爽肤水</li>
             <li>卸妆</li>
             <li>洁面</li>
             <li>隔离</li>
             <li>精油</li>
         </ul>
     </div>
     <div class="list">
         <img src="//img.haimi.com/FgHw-Qt_o8Dpt6Xj9Yq7TXuldwZ6" alt="">
         <ul>
             <li>面膜</li>
             <li>面霜乳液</li>
             <li>眼霜</li>
             <li>精华</li>
             <li>爽肤水</li>
             <li>卸妆</li>
             <li>洁面</li>
             <li>隔离</li>
             <li>精油</li>
         </ul>
     </div>
     <div class="list">
         <img src="//img.haimi.com/FqdLiXEI16k6T2WEivYT7NhZYgGD" alt="">
         <ul>
             <li>面膜</li>
             <li>面霜乳液</li>
             <li>眼霜</li>
             <li>精华</li>
             <li>爽肤水</li>
             <li>卸妆</li>
             <li>洁面</li>
             <li>隔离</li>
             <li>精油</li>
         </ul>
     </div> -->
  </div>
</template>
<script>
export default {
  name: 'fenleilist',
  props:['movieList'],
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .list{
       margin-top: .03rem;
       width: 100%;
       img{
           width: 100%;
       }
       ul{
           width: 100%;
           height: .9rem;
           padding-top:.1rem;
           li{
               float:left;
               border:1px solid #eee;
               padding: .05rem;
               margin: 0 .08rem .08rem .08rem;
           }
       }
   }
</style>