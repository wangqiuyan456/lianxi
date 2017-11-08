<template>
  <div class="fenlei">
    <menus @tabs="tabs"></menus>
    <div class="box" v-if="ind == 0">
      <fenleilist :movieList="movieList"></fenleilist>
    </div>
    <div class="box" v-if="ind == 1">
      <pingpai></pingpai>
    </div>
    <footerBar></footerBar>
  </div>
</template>

<script>
import menus from './components/menus'
import fenleilist from './components/fenleilist'
import pingpai from './components/pingpai'
import footerBar from '@/components/footerBar'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'fenlei',
  data() {
    return {
      ind: 0,
      flg: true,
      page: 0,
      pageSize: 10,
      movieList: []
    }
  },
  components: {
    footerBar,
    menus,
    fenleilist,
    pingpai
  },
  methods: {
    tabs(ind) {
      this.ind = ind
    },
    getMovieList(page, pageSize) {
      //共享请求数据
      this.$store.dispatch('moviemain/getMovieList', {
        cityId: 12345,
        page: this.page,
        pageSize: this.pageSize,
        type: 'fenlei'
      }).then(
        (data) => {
          this.movieList = data
          console.log(data)
        },
        () => {
        }
        )
    }
  },
  created () {
      this.getMovieList()
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>