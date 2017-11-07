<template>
  <div class="piaofangInfor">
       <bannerinfo :yanyuanInfos="yanyuanInfos"></bannerinfo> 
       <div class="numinfo">
           <ul>
               <li><span>4629.3万</span><span>累计票房</span></li>
               <li><span>4333.6万</span><span>分账票房</span></li>
               <li><span>--</span><span>首周票房</span></li>
               <li><span>3718.4万</span><span>首日票房</span></li>
           </ul>
       </div>
       <scharts></scharts>
  </div>
</template>

<script>
import bannerinfo from '@/components/bannerinfo'
import scharts from '@/components/schart'
export default {
  name: 'piaofangInfor',
  components: {
    bannerinfo,
    scharts
  },
  data () {
    return {
      yanyuanInfos:{
        name:'猩球崛起3：终极之战',
        yname:'War for the Planet of the Apes',
        leixing:'动作 冒险 科幻',
        guoji:'美国',
        times:'140分钟',
        didian:'2017-09-15  在中国大陆 上映',
        ren:'用户评分(6,177) 想看人数',
        num:'8.4 651,642'
      },
      serverData: []
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
   .numinfo{
       width: 100%;
       height: 0.4rem;
       background: #fff;
       ul{
           width: 100%;
           display: flex;
           li{
               flex:1;
               color: #333;
               span{
                   display: block;
                   text-align: center;
                   &:nth-of-type(2){
                       color: #657786;
                       font-size: .12rem;
                   }
               }
           }
       }
   }
</style>