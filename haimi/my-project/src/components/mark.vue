<template>
    <div class="marks">
         <div class="mark">
          <dl>
              <dt><img src="//img.haimi.com/Fn1c4f4IxmYZfhVuis7Y5C955mCg?imageView2/1/w/120/h/120" alt=""></dt>
              <dd>
                  <h1>￥88.00</h1>
                  <p>(库存42件)</p>
              </dd>
          </dl>
          <div class="num">
              <div class="left">
                  购物数量
              </div>
              <div class="right">
                 <div class="nums">
                     <span @click="sub()">-</span>
                     <span>{{num}}</span>
                     <span @click="add()">+</span>
                 </div>
              </div>
          </div>
          <button @click="hide()">确定</button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'marks',
    props:['titles'],
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            num: 1
        }
    },
    methods : {
        hide () {
          this.$emit('hides',this.num)
          let infos={
              src:'//img.haimi.com/Fn1c4f4IxmYZfhVuis7Y5C955mCg?imageView2/1/w/120/h/120',
              num:this.num,
              price:'88.00',
              title:this.titles
          }
          window.localStorage.setItem('info',JSON.stringify(infos))
        },
        sub () {
          this.num--
          if(this.num <=1){
             this.num = 1 
          }
        },
        add () {
           this.num++
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.marks {
    position: fixed;
    z-index:99999;
    left: 0;
    top: 0;
    bottom: 0;
    right:0;
   background: rgba(0,0,0,.3);
    .mark {
        position: absolute;
        bottom:.5rem;
        left:0;
        width: 100%;
        height: 1rem;
        background: #fff;
        dl {
            width: 100%;
            display: flex;
            border-bottom: 1px solid #eee;
            dt {
                width: 0.45rem;
                height: 0.45rem;
                margin: .1rem;
                img {
                    width: 100%;
                }
            }
            dd {
                flex: 1;
                h1 {
                    font-size: .15rem;
                    color: #801a2a;
                    margin-top: .06rem;
                }
                p {
                    color: #ccc;
                    font-size: .13rem;
                }
            }
        }
        .num {
            width: 100%;
            height: 0.3rem;
            line-height: .3rem;
            .left {
                float: left;
                margin-left: .1rem;
            }
            .right {
                float: right;
                border: 1px solid #eee;
                span {
                    display: inline-block;
                    width: 0.2rem;
                    text-align: center;
                    line-height: .3rem;
                    &:nth-of-type(2) {
                        border-left: 1px solid #eee;
                        border-right: 1px solid #eee;
                        padding: 0 .1rem;
                    }
                }
            }
        }
    }
    button {
        width: 100%;
        height: 0.5rem;
        border: none;
        outline: none;
        background: #801a2a;
        color: #fff;
        text-align: center;
        line-height: .5rem;
    }
}
</style>
