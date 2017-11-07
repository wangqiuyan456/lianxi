<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <keep-alive include="home">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import '@/static/css/reset.css'
import '@/static/css/common.css'
import '@/static/css/swiper.min.css'
import '@/static/fonts/fontawesome-webfont.woff2'
export default {
  name: 'app'
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  height: auto;
  .swiper-pagination-bullet-active{
        background: #fa8100;
  }
}
</style>
