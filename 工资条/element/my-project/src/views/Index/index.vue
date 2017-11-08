<template>
  <div class="Index">
     <div id="myChart" :style="{width: '100%', height: '600px'}"></div> 
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      // myChart.setOption(
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted () {
          // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
          myChart.setOption( {
                title: {
                    text: '薪资总支出'
                },
                tooltip : {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross',
                        label: {
                            backgroundColor: 'pink'
                        }
                    }
                },
                legend: {
                    data:['薪资总支出','发薪人数']
                },
                toolbox: {
                    feature: {
                        saveAsImage: {}
                    }
                },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis : [
                    {
                        type : 'category',
                        boundaryGap : false,
                        data : this.getdata()
                    }
                ],
                yAxis : [
                    {
                        type : 'value'
                    }
                ],
                series : [
                    {
                        name:'薪资总支出',
                        type:'line',
                        stack: '总量',
                        smooth: true,
                        areaStyle: {normal: {}},
                        data:[50000, 152000, 60000, 60000, 60000, 230, 70000,100,555,666,521,153]
                    },
                    {
                        name:'发薪人数',                      
                        type:'line',
                        smooth: true,
                        stack: '总量',
                        areaStyle: {normal: {}},
                        data:[220, 182, 191, 234, 290, 330, 0,144,255,344,157,248]
                    }


                ]
            })
  },
  methods: {
       getdata () {
            let data = [];
            let month;
            let Month = new Date().getMonth()+1
              for(let i = 0;i<12;i++){
                  month=Month+i
                  if(month>12){
                      month = month-12
                  }
                 data.push(month)
              }
              return data
       }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>