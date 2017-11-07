<template>
  <div class="page">
    <img src="https://gw.alicdn.com/tfs/TB1p.BGQXXXXXbFXFXXXXXXXXXX-160-160.png" alt="">
    <div class="login-box" v-if="type == 'user'" >
        <input type="text" key="username-input" v-model="userName" placeholder="手机号/邮箱/会员名" />
        <input type="password" v-model="passWord" placeholder="请输入密码" />
        <div class="btn-group">
            <button class="btn red" @click="loginDo('user')">登录</button>
            <button class="btn" @click="type='phone'">短信验证码登录</button>
        </div>
    </div>
    <div class="login-box" v-if="type == 'phone'" >
        <input type="text" key="userphone-input" v-model="userPhone" placeholder="请输入手机号" />
        <p>
            <input type="number" v-model.number="code" placeholder="校验码" />
            <a href="javascript:;" id="yanzheng" @click="yanzheng()" refs="yan">{{yaninfo}}</a>
        
        </p>
            <div class="btn-group">
                <button class="btn red" @click="loginDo('phone')">登录</button>
                <button class="btn" @click="type='user'" >账号密码登录</button>
            </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  name: 'zoom',
  data () {
    return {
      type: 'user',
      userName: '',
      userPhone: '',
      passWord: '',
      code: '',
      yaninfo: '获取短信校验证码',
      num: 5
    }
  },
  methods: {
    loginDo (type) {
      let loginData = {}
      if (type === 'user') {
        loginData['userName'] = this.userName
        loginData['passWord'] = this.passWord
      } else {
        loginData['userPhone'] = this.userPhone
        loginData['passWord'] = this.passWord
      }
      this.$store.dispatch('Login/loginDo',loginData).then(
          (data)=>{
              console.log( '登陆成功', data )
              let path = window.localStorage.getItem('toPath')
              path = !path ? '/movie' : path
              this.$router.push(path)
          },
          ()=>{
              alert('账号密码错误')
          }
      )
    },
    yanzheng () {
        this.yaninfo = this.num
    }
  },
  watch: {
      'yaninfo' : function(){
          var that =this
           setInterval(getNumber,1000)
            function getNumber(){
               if(that.num < 5){
                  that.num--

               }
               that.yaninfo = that.num
            }
            getNumber()
      }
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.page{
    font-size: 20px;
    padding: 0.2rem;
    img{
        width: 0.7rem;
        height: 0.7rem;
        margin-top: .18rem;
    }
    .login-box{
        .btn-group{
            margin-top: 0.5rem;
            .btn{
                width: 100%;
                display: block;
                height: 0.4rem;
                border-radius: 0.4rem;
                text-align: center;
                line-height: 0.4rem;
                border: 1px solid #ff5000;
                background: transparent;
                color: #ff5000;;
                margin: 0.1rem 0;
                &.red{
                    background: #ff5000;;
                    color: #fff;
                }
            }
        }
        input{
            display: block;
            width: 100%;
            height: 0.2rem;
            line-height: 0.2rem;
            font-size: 0.12rem;
            border: 0;
            border-bottom: 1px solid #ff5000;;
            margin-top: 0.35rem;
        }
        p{
            display: -webkit-box;
            margin-top: 0.1rem;
            border-bottom: 1px solid #ff5000;
            input{
                -webkit-box-flex: 1;
                margin-top: 0;
                border: 0;
                margin-top: .1rem;
            }
            a{
                font-size: 0.12rem;
                line-height: 0.4rem;
                display: block;
                color: #ff4d64;
            }
            #yanzheng{
                background:orange;
            }
        }
    }
}
</style>
