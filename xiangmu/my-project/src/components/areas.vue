<template>
<transition name="fade">
  <div class="areas">
       <div class="header">选择城市<span @click="Close(citys)">x</span></div>
       <div class="infos">
            <div id="hot" class="info" v-for='(item, key) of allcitydata' :key='key'>
        	  	   <h1>{{key}}</h1>
        	  	   <ul v-for='(items, index) of item' :key='index'>
        	  	   	<li @click='clickCity(items)'>{{items}}</li>
        	  	   </ul>
        	  </div>
       </div>
       <div class="mark">
        <ul>
          <li><a href="#hot">热门</a></li>
          <li><a href="#city_A">A</a></li>
          <li><a href="#city_B">B</a></li>
          <li><a href="#city_C">C</a></li>
          <li><a href="#city_D">D</a></li>
          <li><a href="#city_E">E</a></li>
          <li><a href="#city_F">F</a></li>
          <li><a href="#city_G">G</a></li>
        </ul>
      </div>    
  </div>
</transition>
</template>

<script>
let allCity = ['北京|beijing|bj', '上海|shanghai|sh', '重庆|chongqing|cq', '深圳|shenzhen|sz', '广州|guangzhou|gz', '杭州|hangzhou|hz',
  '南京|nanjing|nj', '苏州|shuzhou|sz', '天津|tianjin|tj', '成都|chengdu|cd', '南昌|nanchang|nc', '三亚|sanya|sy', '青岛|qingdao|qd',
  '厦门|xiamen|xm', '西安|xian|xa', '长沙|changsha|cs', '合肥|hefei|hf', '西藏|xizang|xz', '内蒙古|neimenggu|nmg', '安庆|anqing|aq', '阿泰勒|ataile|atl', '安康|ankang|ak',
  '阿克苏|akesu|aks', '包头|baotou|bt', '北海|beihai|bh', '百色|baise|bs', '保山|baoshan|bs', '长治|changzhi|cz', '长春|changchun|cc', '常州|changzhou|cz', '昌都|changdu|cd',
  '朝阳|chaoyang|cy', '常德|changde|cd', '长白山|changbaishan|cbs', '赤峰|chifeng|cf', '大同|datong|dt', '大连|dalian|dl', '达县|daxian|dx', '东营|dongying|dy', '大庆|daqing|dq', '丹东|dandong|dd',
  '大理|dali|dl', '敦煌|dunhuang|dh', '鄂尔多斯|eerduosi|eeds', '恩施|enshi|es', '福州|fuzhou|fz', '阜阳|fuyang|fy', '贵阳|guiyang|gy',
  '桂林|guilin|gl', '广元|guangyuan|gy', '格尔木|geermu|gem', '呼和浩特|huhehaote|hhht', '哈密|hami|hm',
  '黑河|heihe|hh', '海拉尔|hailaer|hle', '哈尔滨|haerbin|heb', '海口|haikou|hk', '黄山|huangshan|hs', '邯郸|handan|hd',
  '汉中|hanzhong|hz', '和田|hetian|ht', '晋江|jinjiang|jj', '锦州|jinzhou|jz', '景德镇|jingdezhen|jdz',
  '嘉峪关|jiayuguan|jyg', '井冈山|jinggangshan|jgs', '济宁|jining|jn', '九江|jiujiang|jj', '佳木斯|jiamusi|jms', '济南|jinan|jn',
  '喀什|kashi|ks', '昆明|kunming|km', '康定|kangding|kd', '克拉玛依|kelamayi|klmy', '库尔勒|kuerle|kel', '库车|kuche|kc', '兰州|lanzhou|lz',
  '洛阳|luoyang|ly', '丽江|lijiang|lj', '林芝|linzhi|lz', '柳州|liuzhou|lz', '泸州|luzhou|lz', '连云港|lianyungang|lyg', '黎平|liping|lp',
  '连成|liancheng|lc', '拉萨|lasa|ls', '临沧|lincang|lc', '临沂|linyi|ly', '芒市|mangshi|ms', '牡丹江|mudanjiang|mdj', '满洲里|manzhouli|mzl', '绵阳|mianyang|my',
  '梅县|meixian|mx', '漠河|mohe|mh', '南充|nanchong|nc', '南宁|nanning|nn', '南阳|nanyang|ny', '南通|nantong|nt', '那拉提|nalati|nlt',
  '宁波|ningbo|nb', '攀枝花|panzhihua|pzh', '衢州|quzhou|qz', '秦皇岛|qinhuangdao|qhd', '庆阳|qingyang|qy', '齐齐哈尔|qiqihaer|qqhe',
  '石家庄|shijiazhuang|sjz', '沈阳|shenyang|sy', '思茅|simao|sm', '铜仁|tongren|tr', '塔城|tacheng|tc', '腾冲|tengchong|tc', '台州|taizhou|tz',
  '通辽|tongliao|tl', '太原|taiyuan|ty', '威海|weihai|wh', '梧州|wuzhou|wz', '文山|wenshan|ws', '无锡|wuxi|wx', '潍坊|weifang|wf', '武夷山|wuyishan|wys', '乌兰浩特|wulanhaote|wlht',
  '温州|wenzhou|wz', '乌鲁木齐|wulumuqi|wlmq', '万州|wanzhou|wz', '乌海|wuhai|wh', '兴义|xingyi|xy', '西昌|xichang|xc', '襄樊|xiangfan|xf',
  '西宁|xining|xn', '锡林浩特|xilinhaote|xlht', '西双版纳|xishuangbanna|xsbn', '徐州|xuzhou|xz', '义乌|yiwu|yw', '永州|yongzhou|yz', '榆林|yulin|yl', '延安|yanan|ya', '运城|yuncheng|yc',
  '烟台|yantai|yt', '银川|yinchuan|yc', '宜昌|yichang|yc', '宜宾|yibin|yb', '盐城|yancheng|yc', '延吉|yanji|yj', '玉树|yushu|ys', '伊宁|yining|yn', '珠海|zhuhai|zh', '昭通|zhaotong|zt',
  '张家界|zhangjiajie|zjj', '舟山|zhoushan|zs', '郑州|zhengzhou|zz', '中卫|zhongwei|zw', '芷江|zhijiang|zj', '湛江|zhanjiang|zj']
export default {
  name: 'areas',
  props: ['title'],
  data () {
    return {
      isSelect: false,
      allcitydata: {},
      citys: '北京',
      code: 'ABCDEFGHIGKLMNOPQRSTUVWXYZ'
    }
  },
  components: {
  },
  methods: {
    Close (city) {
      this.$emit('update:title',city)
    },
    setAllCity () {
      this.allcitydata['热门'] = []
      for (let i = 0; i < 6; i++) {
        this.allcitydata['热门'].push(allCity[i].split('|')[0])
      }
      for (let i = 0; i < this.code.length; i++) {
        let str = this.code.charAt(i)
        this.allcitydata[str] = []
        for (let j = 0; j < allCity.length; j++) {
          let firstWord = allCity[j].split('|')[1].charAt(0).toLocaleUpperCase()
          if (str === firstWord) {
            this.allcitydata[str].push(allCity[j].split('|')[0])
          }
        }
      }
    },
    clickCity (city) {
      this.citys = city
      //实现自定义组件的数据双向绑定
      //v-model形式
      // this.$emit('input', city)
      //sync模式
      // this.$emit('update:title',city)
    }
  },
  created () {
    this.setAllCity()
  }
}
</script>
<style scoped lang="less">
.fade-enter-active, .fade-leave-active {
  transition: .3s;
  opacity: 1;
  transform: translateY(0);
}

.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(-100px);
}
  .areas{
    width:100%;
    position: fixed;
    top: 0;
    left: 0;
		height: 100%;
    z-index:1000;
    .header{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 0.45rem;
        border-bottom:1px solid #eee;
        text-align:center;
        line-height: .5rem;
        font-size: .18rem;
        background: #fff;
        span{
          position: absolute;
          right: 0.2rem;
          top:-.04rem;
          font-size: .2rem;
        }
    }
    .infos{
      text-align:left;
      background: #eee;
			width: 100%;
			height: 100%;
			overflow: auto;
      .result{
	        	 width: 100%;
	        	 height: .4rem;
	        	 line-height: .4rem;
	        	 background: #fff;
	        	 margin-top: .3rem;
	        	 box-sizing:border-box;
	        	 padding-left: .13rem;
	        	 font-size: .11rem;
	        }
	        .info{
	        	width: 100%;
	        	h1{
	        		width: 100%;
	        		height: .4rem;
	        		line-height: .4rem;
	        		box-sizing:border-box;
	        	    padding-left:.13rem;
	        	    font-size: .13rem;
	        	    color:#666666;
	        	    font-weight: 400;
	        	}
	        	ul{
	        		background: #fcfcfc;
	        		li{
	        			width: 100%;
	        			height: .5rem;
                color: #777;
	        			line-height: .5rem;
	        			box-sizing:border-box;
	        	        padding-left:.13rem;
	        	        border-bottom: 1px solid #f5f5f5;
	        		}
	        	}
	        }
    }
.mark{
	position: fixed;
	right: 0;
	top: .7rem;
	background: rgba(255,255,255,.6);
	z-index: 999;
	width: .4rem;
	height: 4rem;
  border:1px solid #ccc;
    ul{
    	width: 100%;
    	height: 100%;
    	li{
    		width: 100%;
    		height: .2rem;
    		a{
    			display: block;
    			width: 100%;
    			height: 100%;
    			line-height: .4rem;
    		  color: #999;
    		  text-align: center;
          font-size: .1rem;
    		}
    		
    		img{
    			width: .12rem;
    			height: .2rem;
    			margin-top: .2rem;
    		}
    	}
    }

}
  }   
</style>