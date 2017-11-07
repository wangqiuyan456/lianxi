<template>
  <div class="page">
    <headerbar v-show="shows != 'area'">
      <headerleft slot="headerleft" v-title="title" :title="title" :img="img" @tabarea="tabarea"></headerleft>
      <headerright slot="headerright" :navlist="navlist" @activelist="activelist"></headerright>
    </headerbar>
    <!-- v-model形式的数据双向绑定  -->
    <!-- <areas @close="close" v-show="shows == 'area'" v-model="title"></areas>  -->
    <!-- sync形式的数据双向绑定 -->
    <areas v-show="shows == 'area'" :title.sync="title"></areas>
    <mysection v-show="shows == 0">
      <mybanner slot="banner" :bannerlist="bannerlist"></mybanner>
      <homelist slot="infolist" :movieList="movieList" :scrollLoad="scrollLoad"></homelist>
    </mysection>
    <mysection v-show="shows == 1">
      <hotlist slot="infolist"></hotlist>
    </mysection>
    <footerbar v-show="shows != 'area'"></footerbar>
    <Loading></Loading>
  </div>
</template>

<script>   
import headerbar from '@/components/headerbar'
import headerleft from './components/headerleft'
import headerright from './components/headerright'
import mysection from './components/mysection'
import mybanner from './components/mybanner'
import footerbar from '@/components/footerbar'
import homelist from '@/components/homelist'
import hotlist from './components/hotlist'
import areas from '@/components/areas'
import Loading from '@/components/Loading'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'home',
  data() {
    return {
      title: '上海',
      img: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPSc1MCcgaGVpZ2h0PSc1MCc+ICAgPGcgZmlsbD0nbm9uZScgZmlsbC1ydWxlPSdldmVub2RkJz4gICAgIDxwYXRoIGZpbGw9JyNGNjMwM0UnIGQ9J00zOC43OTMgNTBIMTEuMjA3QzUuMDE3IDUwIDAgNDQuOTgyIDAgMzguNzkzVjExLjIwN0MwIDUuMDE3IDUuMDE3IDAgMTEuMjA3IDBoMjcuNTg2QzQ0Ljk4MyAwIDUwIDUuMDE3IDUwIDExLjIwN3YyNy41ODZDNTAgNDQuOTgzIDQ0Ljk4MiA1MCAzOC43OTMgNTAnLz4gICAgIDxwYXRoIGZpbGw9JyNGRkYnIGQ9J00zMC4wMDQgMTAuNjNjLTMuMTU4LS44MzctNC4xMy01LjAwNi0xMC4wMzItNS4wMDYgMi4xMzcgMi40NTQgMS4xNSA0LjYxLS40NTMgNS4xMDMtNy44MyAyLjA5LTEzLjY5IDguNjgtMTMuMzIgMTcuNzkuMzggOS4zOCA4LjM5IDE1LjQ5NSAxOC43NSAxNS40OTUgMTAuMzUgMCAxOC4zNy02LjExNiAxOC43NS0xNS40OTQuMzctOS4yNTgtNS42OS0xNS45MTMtMTMuNy0xNy44ODgnLz4gICAgIDxwYXRoIGZpbGw9JyMzNzNENDInIGQ9J00yNSAyNi4zYy0uNzE2IDAtMS4yNjcgMy4wOTItMi40NzMgNC43OTQtLjg5NiAxLjI2NS0yLjE2MiAxLjgzOC00LjM3IDEuOTc2LS43NjMuMDQ4LTEuNjQuMDQ1LTIuNjg3LS4wMS0xLjQzMi0uMDc1LTIuNjctLjg0Ny0zLjU4Mi0yLjIzNC0uNjUtLjk5Mi0xLjEzNC0yLjI4My0xLjQzNi0zLjgzOHYtLjAwN2MtLjEwNy0uNTQtLjIwNS0xLjA1LS4yNjUtMS41NC0uMTYzLTEuMDgtLjYyMy0xLjQ2LS45MjYtMS41OWwtLjAzLS4wMWMtLjIzLS4wNi0uMjgtLjI5NC0uMjgtLjM0LS4wMy0uNDQtLjEzLTEuNDEtLjE3LTIuMDE1LS4wMy0uNDUzLjM1LS41MTIuNDItLjUxNyAyLjYwOC0uMTYzIDguNjU1LS40OSAxMS40LjIzLjgyNS4yMTQgMy4xNy42NiA0LjQxLjY2IDEuMjQgMCAzLjU5LS40NDYgNC40MS0uNjYgMi43NS0uNzIgOC43OTgtLjM5MyAxMS40LS4yMy4wNzUuMDA1LjQ0OC4wNjQuNDIuNTE3LS4wNC42MDUtLjE0NiAxLjU4LS4xNzQgMi4wMTQtLjAwMi4wNDQtLjA0Ny4yOC0uMjguMzQtLjAxMi4wMDMtLjAyMi4wMS0uMDMzLjAxNC0uMzA1LjEzNC0uNzY1LjUxNi0uOTMgMS41OTQtLjA2LjQ4Ny0uMTYuOTk2LS4yNjMgMS41NDJWMjdjLS4zMDQgMS41NTMtLjc4NyAyLjg0NC0xLjQzOCAzLjgzNi0uOTEgMS4zODctMi4xNSAyLjE2LTMuNTg0IDIuMjM0LTEuMDQ1LjA1NS0xLjkyMy4wNi0yLjY4Ni4wMS0yLjIwNy0uMTM4LTMuNDczLS43MS00LjM3LTEuOTc2LTEuMjEtMS43MDYtMS43Ni00LjgtMi40OC00LjgnLz4gICAgIDxwYXRoIGZpbGw9JyNGNjMwM0UnIGQ9J00xOS45MjUgMjMuMzA4Yy0uMDYtLjAxLS4xMjUtLjAyNC0uMTk1LS4wMzgtLjk4LS4xODMtMi45NzUtLjQzNi00LjUyLS4zMzgtLjY4LjA0My0xLjI3LjE1Mi0xLjY1LjM2Ny0uOTQuNTMtMS4wMTYgMS4zNi0uODU4IDIuNDkuMDQ2LjMyLjExMi42Ny4xODIgMS4wNS4zNzYgMiAxLjI2NCA0LjEzIDMuMTEyIDQuMjQuODMuMDUgMS41MS4wNSAyLjA3NS4wMSAxLjc0LS4xMSAyLjM2LS41OCAyLjgtMS4yMjcgMi40Ny0zLjY2IDEuNDktNi4wNjYtLjkzMi02LjU3Jy8+ICAgICA8cGF0aCBmaWxsPScjMUY5QkRFJyBkPSdNMzAuMDc1IDIzLjMwOGMuMDYtLjAxLjEyNS0uMDI0LjE5NS0uMDM4Ljk4LS4xODMgMi45NzUtLjQzNiA0LjUyLS4zMzguNjguMDQzIDEuMjcuMTUyIDEuNjUuMzY3Ljk0LjUzIDEuMDE2IDEuMzYuODU4IDIuNDktLjA0Ni4zMi0uMTEyLjY3LS4xODIgMS4wNS0uMzc2IDItMS4yNjQgNC4xMy0zLjExMiA0LjI0LS44My4wNS0xLjUxLjA1LTIuMDc1LjAxLTEuNzQtLjExLTIuMzYtLjU4LTIuOC0xLjIyNy0yLjQ3LTMuNjYtMS40OS02LjA2Ni45MzItNi41NycvPiAgIDwvZz4gPC9zdmc+',
      navlist: ['正在热映', '即将上映'],
      bannerlist: ['https://gw.alicdn.com/tfs/TB118acQFXXXXcKXpXXXXXXXXXX-1280-520.jpg_720x720Q30.jpg', 'https://gw.alicdn.com/tfs/TB13f8za3oQMeJjy0FpXXcTxpXa-1280-520.jpg_720x720Q30.jpg', 'https://gw.alicdn.com/tfs/TB15jI2bwMPMeJjy1XbXXcwxVXa-1280-520.jpg_720x720Q30.jpg', 'https://gw.alicdn.com/tfs/TB1u9oZa3MPMeJjy1XcXXXpppXa-1280-520.jpg_720x720Q30.jpg', 'https://gw.alicdn.com/tfs/TB1xeGebMMPMeJjy1XbXXcwxVXa-1280-520.jpg_720x720Q30.jpg'],
      shows: 0,
      titles: '你好',
      movieList: [],
      page: 0,
      pageSize: 10,
      flg: true,//请求前，如果是true就请求，一请求就变false,请求成功就为true//解决的是每当滚动条到底部不用一直调用回调函数
      keepAlive: true

    }
  },
  components: {
    headerbar,
    headerleft,
    headerright,
    mysection,
    mybanner,
    footerbar,
    homelist,
    hotlist,
    areas,
    Loading
  },
  watch: {
    'title'(val, oldval) {

      this.shows = 0
      this.getMovieList()
    }
  },
  methods: {
    scrollLoad() {
      if (!this.keepAlive) return
      if (this.flg && this.shows === 0) {
        this.page += 1
        this.getMovieList()
      }

    },
    activelist(index) {
      this.shows = index
    },
    tabarea() {
      this.shows = 'area'
    },
    close(city) {
      this.title = city
    },
    getMovieList(page, pageSize) {
      this.flg = false
      //共享请求数据
      this.$store.dispatch('home/getMovieList', {
        cityId: 12345,
        page: this.page,
        pageSize: this.pageSize,
        type:'home'
      }).then(
        ( data ) => {
          this.flg = true
          this.movieList=data
        },
        () => {
          this.flg = true
        }
      )
    }
  },
  created() {
    this.getMovieList()
  },//mounted:操作DOM要在这个函数里面

  activated() {//keep-alive里的两个钩子函数
    this.keepAlive = true
    console.log('组件激活的时候调用')
  },
  deactivated() {
    this.keepAlive = false
    console.log('组件被停用的时候调用')
  }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page {
  width: 100%;
  padding-top: .4rem;
}
</style>
