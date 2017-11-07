<template>
  <div class="bannerinfo">
    <div class="bannerbox" :style="bannerStyle">
      <dl>
        <dt>
          <img src="https://gw.alicdn.com/i4/TB1jw_xSpXXXXX3aFXXXXXXXXXX_.jpg_160x160Q75.jpg" alt="" :style="imgSize">
        </dt>
        <dd>
          <h1>{{yanyuanInfos.name}}</h1>
          <div class="dir">
            <em>{{yanyuanInfos.yname}}</em>
          </div>
          <p>{{yanyuanInfos.leixing}}</p>
          <p>
            <b>{{yanyuanInfos.guoji}}</b>|
            <b>{{yanyuanInfos.times}}</b>
          </p>
          <p>{{yanyuanInfos.didian}}</p>
          <p>{{yanyuanInfos.ren}}</p>
          <p>{{yanyuanInfos.num}}</p>
        </dd>
      </dl>
    </div>
    <div class="box">
      <div class="details" :style="{height : h}">
        <div class="cont">
          影片讲述了年轻的蜘蛛侠彼得·帕克，在钢铁侠的帮助下与终极大反派秃鹰进行斗争的故事。在经历了《美国队长3：内战》中与复仇者联盟成员惊心动魄的对战后，彼得回到和梅阿姨共同居住的家，并受到新导师托尼·斯塔克的暗中关注。彼得试图回归正常的日常生活，然而却经常被“企图证明自己不仅仅是一位友好邻居蜘蛛侠”的想法扰乱心绪，直到影片中的全新反派秃鹰的出现，对彼得来说重要的一切都开始受到威胁。
        </div>
      </div>
      <button @click="boxh">{{updown}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bannerinfo',
  props: ['bannerStyle', 'imgSize', 'yanyuanInfos'],
  data() {
    return {
      h: '70px',
      updown: '展开'
    }
  },
  methods: {
    boxh() {
      if (this.h === '70px') {
        this.h = '210px'
        this.updown = '收起'
      } else {
        this.h = '70px'
        this.updown = '展开'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.bannerinfo {
  .bannerbox {
    width: 100%;
    background: #333;
    dl {
      width: 90%;
      display: flex;
      padding: .1rem;
      padding-top: .3rem;
      padding-right: .2rem;
      dt {
        width: 0.75rem;
        margin-right: .05rem;
        img {
          width: 1.02rem;
          height: 1.40rem;
        }
      }
      dd {
        flex: 1;
        text-align: left;
        position: relative;
        padding-left: .4rem;
        h1 {
          color: #fff;
          font-size: .2rem;
          font-weight: 500;
          display: block;
          width: 1.5rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .dir{
          width: 1.7rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        em {
          font-style: normal;
          color: #fff;         
        }
        }
        p {
          color: #8a869e;
          width: 1.6rem;
          font-size: .13rem;
          margin: .04rem 0;
          color: #ccc;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          b {
            font-weight: 400;
          }
          &:nth-of-type(1) {
            margin-top: .1rem;
          }
          &:last-of-type {
            color: #ffa84c;
            font-size: .18rem;
          }
        }
      }
    }
  }
  .box {
    background: #fff;
    .details {
      box-sizing: border-box;
      overflow: hidden;
      padding: .1rem;
      .cont {
        font-size: .15rem;
      }
    }
    button {
      border: none;
      outline: none;
      background: #fff;
      width: 0.6rem;
      height: 0.3rem;
      color: #108ee9;
      font-size: .17rem;
    }
  }
}
</style>