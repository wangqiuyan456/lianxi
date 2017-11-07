<template>
<div class="shaixuan">
  <div class="info">
   <h1>地区<span>{{filterArr[0]}}</span></h1>
      <Radio v-for="(items,index) of diqulist" :key="index" name="地区"  :value="items" v-model="filterArr[0]"></Radio>
  </div>
  <div class="info">
   <h1>特色<span>{{filterArr[1]}}</span></h1>
               <!-- v-model绑定了一个默认值 -->
      <Radio v-for="(items,index) of teselist" :key="index" name="特色"  :value="items" v-model="filterArr[1]"></Radio>
  </div>
  <div class="footer">
    <button @click="quxiaosx()">取消筛选</button>
    <button @click="chuan()">确定</button>
  </div>
</div>
</template>

<script>
import Radio from '@/components/Radio'
export default {
  name: 'shaixuan',
  props: [ 'filterVal' ],
  data () {
    return {
      diqu : '',
      tese: '',
      diqu1:'',
      tese1:'',
      filterArr:['宝山区','退票'],//默认的选中值
      diqulist: ['朝阳','宝山区','上地','中关村'],
      teselist:['退票','改签','观影','4k厅']
    }
  
  },
  components: {
      Radio
  },
  methods: {
    quxiaosx () {
      this.$emit('quxiaosx')
      this.$set(this.filterArr,0,'')
      this.$set(this.filterArr,1,'')
    },
    chuan () {
      this.$emit('quxiaosx')
      this.$emit('update:filterVal', this.filterArr)
    }
  },
  watch : {
     diqu:(val1,val2)=>{
        console.log(val1+','+val2)
        this.diqu = val1
     },
     tese:(val1,val2)=>{
       console.log(val1+","+val2)
       this.tese = val1
     },
     'filterVal': function(){
            this.filterArr = this.filterVal
            if( this.filterArr.length <= 1 ){
                this.filterArr = ['','']
            }
        }
  }

}
</script>
<style scoped lang="less">
  .shaixuan{
      position: fixed;
      left: 0;
      top:.4rem;
      overflow: hidden;
      z-index: 9999;
      background: #fff;
      .info{ 
          width: 100%; 
          height: 1rem;
          margin-left: .1rem; 
          h1{
              width: 100%;
              height: .35rem;
              text-align:left;
              font-size: .13rem;
              line-height:.35rem;
              color: #000;
              span{
                width: 0.2rem;
                height: 0.1rem;
                  font-size: .12rem;
                  color: #8a869e;
                  font-weight: normal;
                  margin-left: .03rem;;
              }
          }
            ul{ width: 95%;
                display: flex;
                flex-wrap:wrap;
                border-bottom:1px solid #eee; 
                padding-bottom: .09rem;
                li{
                    width: 15%;
                    padding: .05rem .1rem;
                    margin:.01rem .03rem .03rem .0rem;
                    border:1px solid #eee;
                    height: 0.2rem;
                    color: #8a869e;
                    font-size: .13rem;
                    line-height: .2rem;
                    text-align: center;
                    position: relative;
                    input{
                        width: 100%;
                        height: 100%;
                        position: absolute;
                        left:0rem;
                        opacity: 0;
                        top:0;
                    }                 
                }
            }
       }
       .footer{
           position: fixed;
           bottom:0;
           left: 0;
           width: 100%;
           height: 0.55rem;
           border-top: 1px solid #eee;
           text-align:left;
           button{
               width: 1.4rem;
               height: 0.38rem;
               outline: none;
               background-color: transparent;
               border: none;
               border-radius: .05rem;
               margin: .08rem;
               margin-left: .1rem;
                &:nth-of-type(1){                    
                    border: 1px solid #908ca3;
                    color: #8a869e;
                    background: #fff;

                }
                &:nth-of-type(2){                    
                   background-color: #ff4d64;
                   border: 1px solid #ff4d64;
                   color:#fff;
                   
                }

           }
       }
  }
</style>