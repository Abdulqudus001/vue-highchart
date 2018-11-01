<template>
<div>
  <highcharts :options="options"></highcharts>
</div>
</template>

<script>
export default {
  data () {
    return {
      // This uses a the es6 return syntax for return statements ({})
      options: {
        chart: {
          type: 'line',
        },
        title: {
          text: 'Historic World Population by Region'
        },
        subtitle: {
          text: 'Source: <a href="https://en.wikipedia.org/wiki/World_population">Wikipedia.org</a>'
        },
        xAxis: {
          type: 'category',
          // categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Population (millions)',
            align: 'high'
          },
          labels: {
            overflow: 'justify'
          }
        },
        tooltip: {
          valueSuffix: ' millions'
        },
        plotOptions: {
          bar: {
            dataLabels: {
              enabled: true
            },
            pointWidth: 10
          }
        },
        legend: {
        },
        credits: {
          enabled: false
        },
        series: [{
          name: 'On target',
          data: [['North America', 723], ['Asia', 635], ['Africa', 408], ['Europe', 203], null, null, null],
          color: '#13b433'
        }, {
          name: 'Not on target',
          data: [null, null, null, ['Australia', 133], ['South America', 102], ['Antartica', 57]],
          color: '#e85d58'
        }]
      }
    }
  }
}
</script>
