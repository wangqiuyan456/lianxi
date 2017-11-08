<template>
    <div class="infolist">
       <ul>
           <li>
               <img src="//img.haimi.com/FuPMz-_M6cc-EKholObO_ec5niTe" alt="">
               <span>新人礼包</span>
           </li>
           <li>
               <img src="//img.haimi.com/Fvxjun-u3MAa7vGJnbSiCXlFtepB" alt="">
               <span>领取积分</span>
           </li>
           <li>
               <img src="//img.haimi.com/Fi2HlhU6SOQ0GqagPJ1whoJAzg57" alt="">
               <span>邀请有礼</span>
           </li>
           <li>
               <img src="//img.haimi.com/Ft0Vx786oXJADIPEamFGp5vew5KY" alt="">
               <span>每周新品</span>
           </li>
       </ul>
    </div>
</template>

<script>
export default {
    name: 'infolist',
    data() {
        return {
        }
    },
    methods: {
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .infolist{
      width: 100%;
      padding-bottom: .1rem;
      ul{
          width: 100%;
          display: flex;
          li{
            flex:1;
            img{
                width: 0.8rem;
            }
            span{
                display: block;
                width: 100%;
                text-align:center;
                font-size: .12rem;
                margin-top:.05rem;
            }
          }
      }
  }
</style>