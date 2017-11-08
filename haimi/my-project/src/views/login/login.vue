<template>
    <div class="login">
        <div class="login-box">
            <input type="text" v-model="userName" placeholder="手机号" />
            <input v-model="passWord" placeholder="验证码：" />
            <div class="btn-group">
                <button class="btn" @click="loginDo()">登录</button>
            </div>
        </div>
        <footerBar></footerBar>
    </div>
</template>

<script>
import footerBar from '@/components/footerBar'
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
    name: 'login',
    data() {
        return {
            userName: '',
            passWord: ''
        }
    },
    components: {
        footerBar
    },
    methods: {
        loginDo() {
            let loginData = {}
            loginData['userName'] = this.userName
            loginData['passWord'] = this.passWord
            this.$store.dispatch('Login/loginDo', loginData).then(
                (data) => {
                    console.log('登陆成功', data)
                    let path = window.localStorage.getItem('toPath')
                    path = !path ? '/home' : path
                    this.$router.push(path)
                },
                () => {
                    alert('账号密码错误')
                }
            )
        }

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.login-box {
    margin-top: .1rem;
    .btn-group {
        margin-top: .2rem;
        .btn {
            width: 90%;
            display: block;
            margin-left: 5%;
            height: 0.32rem;
            text-align: center;
            line-height: 0.32rem;
            background: #991f33;
            color: #fff;
            outline: none;
            border: none;
        }
    }
    input {
        display: block;
        width: 90%;
        height: 0.2rem;
        line-height: 0.2rem;
        font-size: 0.12rem;
        border: 0;
        margin-top: .25rem;
        border-bottom: 1px solid #eee;
        ;
        margin-left: 5%;
    }
    p {
        display: -webkit-box;
        margin-top: 0.1rem;
        border-bottom: 1px solid #ff5000;
        input {
            -webkit-box-flex: 1;
            margin-top: 0;
            border: 0;
            margin-top: .1rem;
        }
        a {
            font-size: 0.12rem;
            line-height: 0.4rem;
            display: block;
            color: #ff4d64;
        }
        #yanzheng {
            background: orange;
        }
    }
}
</style>