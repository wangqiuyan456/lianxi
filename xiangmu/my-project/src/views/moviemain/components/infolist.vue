<template>
<div class="infolist">
    <ul>
       <li v-for="(items,index) in movieList" :key="index">
         <router-link :to="'/moviedetails'">
            <h1><b>{{items.name}}</b><span><em>{{items.price}}</em>元起</span></h1>
            <p>{{items.address}}</p>
            <p><span>退票</span><span>改签</span></p>
            <p><img src="" alt=""><span>新人改签</span></p>
         </router-link>
       </li>
    </ul>  
</div>
</template>

<script>
export default {
  name: 'infolist',
  props: ['arrs','movieList',],
  data () {
    return {
      shows: ''
    }
  },
  watch: {
    'arrs': function () {
      this.shows = true
    }
  },
  methods: {
    closes () {
      this.shows = ''
    }
  }
}
</script>
<style scoped lang="less">
 .infolist{
   width: 100%;
   .fujia{
     width: 100%;
     height: 0.25rem;
     text-align:left;
     line-height: .25rem;
     position: relative;
     box-sizing:border-box;
     padding:.04rem .12rem;
     span{
    margin-right: .07rem;}
     em{
       font-style: normal;
       position: absolute;
       right: .2rem;
       top: 0.04rem;
     }
   }
   ul{
     width: 100%;
     overflow: hidden;
     li{
       width: 100%;
       height: 0.8rem;
       border-bottom:1px solid #eee;
       padding: .13rem;
       h1{
         width: 100%;
         font-size: .17rem;
         text-align:left;
         height: .18rem;
         line-height: .18rem;
         b{ display: inline-block;
            width:1.8rem;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin-right: .05rem;;
          }
          span{
            color: #8a869e;
            font-size: .12rem;
            font-weight: 400;
            em{
              color: #ff4d64;
              font-style: normal;
            }
          }
       }
       p{
         width: 100%;
         text-align:left;
         &:nth-of-type(1){
            color: #8a869e;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            font-size: .1rem;
            padding: .04rem 0;
         }
         &:nth-of-type(2){
           span{
              display: inline-block;
              padding: .07rem 0.02rem;
              margin-right: .05rem;
              border-radius: .05rem;
              border:1px solid #7ab5e0;
              line-height: .15;
              font-size: .12rem;
              color: #7ab5e0;
           }
         }
         &:nth-of-type(3){
           margin-top: .05rem;
           span{
              color: #8a869e;
              font-size: .13rem;
           
           }
          
         }
       }
     }
   }
 }
</style>