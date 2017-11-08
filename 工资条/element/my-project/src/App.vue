<template>

  <div id="app" v-if="$route.path != '/login'">
        <HeaderBar></HeaderBar>
        <div class="left-menu">
          <el-menu default-active="2" :router='true' @open="handleOpen" @close="handleClose">
            <template v-for="(item,index) in $router.options.routes">
              <el-submenu 
                :key="index"
                :index="index+''"
                v-if="item.meta && item.children"
              >
                <template slot="title"><i class="el-icon-message"></i>{{item.meta.title}}</template>
                <el-menu-item 
                  v-for="(navItem,i) in item.children"
                  :index="index+'-'+i"
                  :route="{ name: navItem.name }"
                  :key="i"
                >{{navItem.meta.title}}</el-menu-item>
              </el-submenu>
              <el-menu-item 
                  v-else-if="item.meta && item.name != 'Login'"
                  :index='index+""'
                  :route="{ name: item.name }"
                  :key="index"

                ><i class="el-icon-setting"></i>{{item.meta.title}}</el-menu-item>
            </template>
          </el-menu>
        </div>
        <div class="content">
          <router-view></router-view>
        </div>

  </div>
  <div id="app" v-else>
    <router-view></router-view>
  </div>
</template>

<script>
import './static/css/common.css'
import './static/css/reset.css'

import HeaderBar from '@/components/HeaderBar'
// import './static/color/upload.css'
// import "@/assets/element.less"
export default {
  name: 'app',
  components: {
    HeaderBar
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);  
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    }
  },
  watch: {
    '$router.options.routes' : () => {
      // console.log('aaaa')
    }
  },
  created () {
    
    //console.log( this.$router.options.routes )
  }
}
</script>

<style lang="less">
@import url(./static/css/base.less);
#app {
  .left-menu {
    position: fixed;
    top: 55px;
    bottom: 0;
    left: 0;
    width: 200px;
    background: #fff;
    border-right: 1px solid #eee;
    .el-menu {
      background: #fff;
      color: #666;
      .el-submenu .el-menu-item {
        color: #666;
      }
      .el-menu-item-group__title,
      .el-submenu__title {
        color: #666;
      }
      .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active,
      .el-menu-item.is-active {
        color:  @base-color;
        background: lighten(@base-color,30%);
      }
      .el-menu-item,
      .el-submenu__title {
        color: #666;
      }
    }
  }
  .content{
    margin-left: 200px;
    box-sizing: border-box;
  }
}

</style>
