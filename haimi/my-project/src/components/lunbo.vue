<template>
    <div class="lunbo">
        <swiper ref="mySwiper" class="bannerswiper">
            <!-- slides -->
            <swiper-slide><img src="//img.haimi.com/FpzEfBA56Z9PDD39jK4zUU8XCs9a" alt=""></swiper-slide>
            <swiper-slide><img src="//img.haimi.com/FpzEfBA56Z9PDD39jK4zUU8XCs9a" alt=""></swiper-slide>
            <swiper-slide><img src="//img.haimi.com/FpzEfBA56Z9PDD39jK4zUU8XCs9a" alt=""></swiper-slide>
            <swiper-slide><img src="//img.haimi.com/FpzEfBA56Z9PDD39jK4zUU8XCs9a" alt=""></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
    name: 'lunbo',
    data() {
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
    .lunbo {
        width: 100%;
        .bannerswiper {
            width: 100%;
            img {
                width: 100%;
            }
        }
    }
</style>