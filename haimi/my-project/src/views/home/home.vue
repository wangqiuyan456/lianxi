<template>
    <div class="home">
        <search></search>
        <menus @tabs="tabs"></menus>
        <div class="tuijian" v-if="ind == 0">
            <lunbo></lunbo>
            <infolist></infolist>
            <bannerlist></bannerlist>
            <pingpai></pingpai>
            <haowu></haowu>
            <list v-scrollBottom="scrollLoad" :movieList="movieList"></list>
        </div>
        <div class="tuijian" v-if="ind == 1">
            <banner></banner>
            <list :movieList="movieList"></list>
        </div>
        <div class="tuijian" v-if="ind == 2">
            <list :movieList="movieList"></list>
        </div>
        <div class="tuijian" v-if="ind == 3">
            <banner></banner>
            <list :movieList="movieList"></list>
        </div>
        <div class="tuijian" v-if="ind == 4">
            <banner></banner>
            <list :movieList="movieList"></list>
        </div>
        <footerBar></footerBar>
        <Loading></Loading>
    </div>
</template>

<script>
import search from '@/components/search'
import menus from './components/menus'
import lunbo from '@/components/lunbo'
import banner from './components/banner'
import bannerlist from './components/bannerlist'
import pingpai from './components/pingpai'
import haowu from './components/haowu'
import infolist from './components/infolist'
import list from '@/components/list'
import footerBar from '@/components/footerBar'
import Loading from '@/components/Loading'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: 'home',
    components: {
        footerBar,
        lunbo,
        search,
        menus,
        banner,
        list,
        infolist,
        bannerlist,
        pingpai,
        haowu,
        Loading
    },
    data() {
        return {
            ind: 0,
            flg: true,
            page: 0,
            pageSize: 10,
            movieList: [],
            keepAlive: true
        }
    },
    methods: {
        tabs(ind) {
            this.ind = ind
            console.log(this.ind)
        },
        scrollLoad() {
            if (!this.keepAlive) return
            if (this.flg && this.ind === 0) {
                this.page += 1
                this.getMovieList()
            }
        },
        getMovieList(page, pageSize) {
            this.flg = false
            //共享请求数据
            this.$store.dispatch('home/getMovieList', {
                cityId: 12345,
                page: this.page,
                pageSize: this.pageSize,
                type: 'home'
            }).then(
                (data) => {
                    this.flg = true
                    this.movieList = data
                },
                () => {
                    this.flg = true
                }
                )
        },
        created() {
            this.getMovieList()
        },
        activated() {//keep-alive里的两个钩子函数
            this.keepAlive = true
            console.log('组件激活的时候调用')
        },
        deactivated() {
            this.keepAlive = false
            console.log('组件被停用的时候调用')
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>