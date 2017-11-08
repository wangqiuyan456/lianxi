<template>
  <div class="gouwuche">
      <div class="gou" v-show="shows?hide:shows">
            <kongs></kongs>
            <list :movieList="movieList"></list>
            <footerBar></footerBar>
     </div>
     <div class="info">
          {{shows}} 
          <!-- <div class="box">
           <input type="text" type="radio">
           <dl>
               <dt></dt>
               <dd>
                    <h1>{{shows.title}}</h1>
                   <span>{{shows.price}}</span>
                   <i>{{shows.num}}</i> 
               </dd>
           </dl>
         </div>  -->
     </div>
  </div>
</template>

<script>
import footerBar from '@/components/footerBar'
import list from '@/components/list'
import kongs from './components/kongs'
export default {
  name: 'gouwuche',
  data () {
    return {
      page: 0,
      pageSize: 10,
      movieList: [],
      shows:window.localStorage.getItem('info'),
      hide:false
    }
  },
  components: {
        footerBar,
        list,
        kongs
    },
  methods: {
      getMovieList(page, pageSize) {
            //共享请求数据
            this.$store.dispatch('home/getMovieList', {
                cityId: 12345,
                page: this.page,
                pageSize: this.pageSize,
                type: 'home'
            }).then(
                (data) => {
                    this.movieList = data
                    console.log(this.movieList)
                },
                () => {
                }
                )
        }
       
    },
    created() {
            this.getMovieList()
        }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>