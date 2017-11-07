<template>
  <div class="homelist">
     <ul>
      <li v-for="(items,index) in movieList" :key="index">
       <router-link :to="'homedetails/'+items.name">
        <dl>
           <dt>
             <img :src="items.image" alt="">
           </dt>
           <dd>
              <h1>{{items.name}}</h1>
              <div class="dir">
                <span>{{items.star}}</span>
                <span>{{items.remark}}</span>
              </div>
              <p>{{items.director}}</p>
              <p>{{items.data}}</p>
              <button>购票</button>
           </dd>
        </dl>
        <aside>
          <b>新人专享</b>|<span>新人首张优惠，名额有限</span>
        </aside>
       </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'homelist',
  props: ['movieList']
}
</script>
<style scoped lang="less">
    .homelist{
      width: 100%; 
      ul{
        width: 100%;
        overflow: hidden;
        li{
          width: 100%;
          height: 1.3rem;
          position: relative;
          padding: .1rem;
          &::after{
            content: "";
            width: 100%;
            height: .01rem;
            background: #eee;
            position: absolute;
            left: 0.1rem;
            bottom: 0;
          }
          dl{
            width: 100%;
            display: flex;
            dt{
              width: 0.75rem;
              height: 0.9rem;
              margin-right: .05rem;
              img{
                width: 0.65rem;
                height: 0.9rem;
               }
              }
            dd{
              flex:1;
              text-align: left;
              position: relative;
              h1{
                  color: #000;
                  font-size: .17rem;
                  font-weight: 500;
              }
              button{
                position: absolute;
                right: 0.25rem;
                top:.38rem;
                border: 1px solid #ff4d64;
                background: #fff;
                color: #ff4d64;
                padding: .03rem .06rem;
                border-radius: 4px;
                text-align: center;
              }
              p{
                color: #8a869e;
                width:1.6rem;
                font-size: .13rem;
                margin: .04rem 0;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
              .dir{
                img{
                  width: 0.5rem;
                  height:.1rem;
                }
              }
            }
            
          }
          aside{
             margin-left: .72rem;
             margin-top: .1rem;
             padding-bottom:.05rem;
             position: relative;
             padding-top:.08rem;
             text-align:left;
             &::after{
               position: absolute;
               content:"";
               width: 100%;
               height: 0.01rem;
               background: #eee;
               top: 0;
               left: 0;
             }
             b{
               font-weight: 400;
               color:#fea54c;
               padding-right:.05rem;
             }
             span{
               padding-left:.05rem;
               color: #8a869e;
               font-size: .13rem;
               
             }
          }
        }       
      }
    }
</style>
