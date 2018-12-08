<template>
  <div :class="className" :id="id" ref="myEchart">
  </div>
</template>
<script>
  import echarts from 'echarts'
  import { getCompanyList } from '@/api/companyList'

export default {
    props: {
      className: {
        type: String,
        default: 'yourClassName'
      },
      id: {
        type: String,
        default: 'yourID'
      },
      width: {
        type: String,
        default: '1000px'
      },
      height: {
        type: String,
        default: '1000px'
      }
    },
    data() {
      return {
        chart: null,
        kgList: {},
        tzList: {}
      }
    },
    created() {
      this.getCompanyList()
    },
    mounted() {
      this.initChart()
    },
    beforeDestroy() {
      if (!this.chart) {
        return
      }
      this.chart.dispose()
      this.chart = null
    },
    methods: {
      initChart() {
        this.chart = echarts.init(this.$refs.myEchart)
        // 把配置和数据放这里
        const option = null
        this.chart.showLoading()
        this.chart.hideLoading()
        getCompanyList().then(res => {
          this.tzList = JSON.parse(JSON.stringify(res.data.gudong).replace(/DetailList/g, 'children').replace(/Name/g, 'name'))
          const data = this.tzList
          console.log(data, 'data')
          echarts.util.each(data.children, function(datum, index) {
            index % 2 === 0 && (datum.collapsed = true)
          })
          this.chart.setOption({
            tooltip: {
              trigger: 'item',
              triggerOn: 'mousemove',
              axisPointer: {
                type: 'line'
              }
            },
            series: [
              {
                type: 'tree',
                data: [data],
                left: '2%',
                right: '2%',
                top: '8%',
                bottom: '20%',
                orient: 'vertical',
                expandAndCollapse: true,
                symbol: 'rectangle',
                symbolSize: [120, 60],
                roam: true,
                symbolKeepAspect: true,
                itemStyle: {
                  normal: {
                    borderColor: '#8e8e8e',
                    color: '#fff'
                  },
                  // 鼠标悬停时：
                  emphasis: {
                    itemStyle: {
                      borderWidth: 100,
                      borderColor: '#1062EC'
                    }
                  }
                },
                label: {
                  position: 'inside',
                  rotate: 0,
                  verticalAlign: 'middle',
                  align: 'center',
                  fontSize: 12,
                  textStyle: {
                    // 字体颜色、大小、加粗
                    color: '#131313',
                    background: '#000',
                    fontSize: 12
                  },
                  formatter(val) {
                    const strs = val.name.split('') // 字符串数组
                    let str = ''
                    for (let i = 0, s; s = strs[i++];) { // 遍历字符串数组
                      str += s
                      if (!(i % 8)) str += '\n' // 按需要求余
                    }
                    return str
                  }
                },
                leaves: {
                  label: {
                    normal: {
                      position: 'inside',
                      rotate: 0,
                      verticalAlign: 'middle',
                      align: 'center',
                      width: '80px'
                    }
                  }
                },
                animationDurationUpdate: 750
              }
            ]

          })
          if (option && typeof option === 'object') {
            this.chart.setOption(option, true)
          }
        })
      },
      getCompanyList() {
        getCompanyList().then(res => {
          this.tzList = JSON.parse(JSON.stringify(res.data.touzi).replace(/DetailList/g, 'children').replace(/Name/g, 'name'))
          console.log(this.tzList)
        })
      }
    }
  }
</script>
<style lang="scss" scoped>
.yourClassName {
  width: 200%;
  height: 700px;
}
</style>

