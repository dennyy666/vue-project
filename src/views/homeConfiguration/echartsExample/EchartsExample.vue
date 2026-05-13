<script setup lang="ts">
// 依赖：请确保安装 echarts：
// npm install echarts --save
import { ref, onMounted, onBeforeUnmount } from 'vue'
import * as echarts from 'echarts'

const barChartRef = ref<HTMLElement | null>(null)
const pieChartRef = ref<HTMLElement | null>(null)

let barChart: echarts.ECharts | null = null
let pieChart: echarts.ECharts | null = null

const initBar = () => {
  if (!barChartRef.value) return
  barChart = echarts.init(barChartRef.value)
  const option: echarts.EChartsOption = {
    title: { text: '示例条形图' },
    tooltip: {},
    xAxis: { type: 'category', data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] },
    yAxis: { type: 'value' },
    series: [
      { type: 'bar', data: [120, 200, 150, 80, 70, 110, 130], itemStyle: { color: '#4f9cff' } }
    ]
  }
  barChart.setOption(option)
}

const initPie = () => {
  if (!pieChartRef.value) return
  pieChart = echarts.init(pieChartRef.value)
  const option: echarts.EChartsOption = {
    title: { text: '示例饼图', left: 'center' },
    tooltip: { trigger: 'item' },
    legend: { orient: 'vertical', left: 'left' },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: '55%',
        data: [
          { value: 1048, name: '搜索引擎' },
          { value: 735, name: '直接访问' },
          { value: 580, name: '邮件营销' },
          { value: 484, name: '联盟广告' },
          { value: 300, name: '视频广告' }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
  pieChart.setOption(option)
}

const resize = () => {
  barChart?.resize()
  pieChart?.resize()
}

onMounted(() => {
  initBar()
  initPie()
  window.addEventListener('resize', resize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', resize)
  barChart?.dispose()
  pieChart?.dispose()
})
</script>

<template>
  <div class="echarts-wrap">
    <div class="chart left">
      <div ref="barChartRef" class="chart-box" />
    </div>
    <div class="chart right">
      <div ref="pieChartRef" class="chart-box" />
    </div>
  </div>
</template>

<style scoped lang="less">
.echarts-wrap {
  display: flex;
  gap: 16px;
  align-items: stretch;
}
.chart {
  background: #fff;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}
.chart-box {
  width: 100%;
  height: 360px;
}
.left { flex: 1.3; }
.right { flex: 0.9; }
</style>