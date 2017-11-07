<template>
  <div class="mybanner">
    <swiper :options="swiperOption" ref="mySwiper" class="bannerswiper">
    <!-- slides -->
    <swiper-slide v-for="(items,index) of bannerlist" :key="index"><img :src="items" alt=""></swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper> 
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'mybanner',
  props: ['bannerlist'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        notNextTick: true,
        autoplay: 1000,
        loop: true,
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        pagination: '.swiper-pagination',
        paginationClickable: true,
        mousewheelControl: true,
        observeParents: true,
        debugger: true
      }
    }
  }
}
</script>
<style scoped lang="less">
  .mybanner{
      width: 100%;
      .bannerswiper{
        width: 100%;
        img{
          width: 100%;
        }     
      }
    }
</style>