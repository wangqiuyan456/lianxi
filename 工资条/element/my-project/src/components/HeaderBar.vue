<template>
    <header id="header-bar" v-if="getUserInfo != ''">
        <div class="logo-box"><img src="../static/images/logo.png" /></div>
        <div class="tool-box">
            <h3 class="team-name">八维网站</h3>
            <div class="user-box">
                <i class="iconfont icon-xiaoxi"></i>
                <span>
                    <!-- <img :src="getUserInfo.data.photo" class="photo" />
                    {{getUserInfo.data.userName}} -->
                </span>
                <i class="iconfont icon-tuichu" @click="login_out"></i>
            </div>
        </div>
    </header>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'HeaderBar',
  computed: {
    ...mapGetters('user',[
      'getUserInfo' 
    ])
  },
  methods: {
      login_out () {
          this.$store.dispatch('user/loginOut').then( (data)=>{
              this.$router.replace( '/login' )
          } )
      }
  }
}
</script>

<style lang="less">
#header-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  z-index: 100;
  background: #fff;
  border-bottom: 1px solid #eee;
  .logo-box{
      width: 200px;
      height: 55px;
      float: left;
      img{
          display: block;
          height: 100%;
          margin-left: 20px;
      }
  }
  .tool-box{
      height: 55px;
      line-height: 55px;
      h3{
          font-size: 14px;
          font-weight: bold;
          color: #666;
          float: left;
      }
      .user-box{
          float: right;
          margin-top:-30px;
          i{
              font-size: 24px;
              margin: 0 10px;
          }
          span{
              margin: 0 10px;
              font-size: 12px;
          }
          img{
              display: inline-block;
              width: 30px;
              vertical-align: middle;
              border-radius: 100%;
              margin-top:-10px;
          }
      }
  }
}
</style>

