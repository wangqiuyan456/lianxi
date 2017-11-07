<template>
  <div class="yanyuaninfo">
      <bannerinfo :bannerStyle="bannerStyle" :imgSize="imgSize" :yanyuanInfos="yanyuanInfos"></bannerinfo>
      <filmList></filmList>
  </div>
</template>

<script>
import bannerinfo from '@/components/bannerinfo'
import filmList from '@/components/filmList'
export default {
  name: 'yanyuaninfo',
  components: {
    bannerinfo,
    filmList
    
  },
  data () {
    return {
      bannerStyle:{height:'160px',background:'#cfa685'},
      imgSize:{height:'148px',marginTop:'-18px'},
      yanyuanInfos:{
        name:'伍迪·哈里森',
        yname:'Woody Harrelson',
        leixing:'1961-07-23',
        guoji:'美国德克萨斯州米德兰市',
        times:'',
        didian:'',
        ren:'演员 制作人',
        num:''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>