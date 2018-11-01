<template>
<div class="row">
  <div class="col-md-8">
    <highcharts :options="options"></highcharts>
  </div>
  <div class="col-md-4">
    <highmaps :options="mapOptions"></highmaps>
  </div>
</div>
</template>

<script>
import nigerianMap from '../assets/js/nigerian-map-path.js'
export default {
  data () {
    return {
      options: {
        chart: {
          type: 'column',
          width: 900
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
        legend: {},
        credits: {
          enabled: false
        },
        series: [{
          name: 'On target',
          data: [
            ['North America', 723],
            ['Asia', 635],
            ['Africa', 408],
            ['Europe', 203], null, null, null
          ],
          color: '#13b433'
        }, {
          name: 'Not on target',
          data: [null, null, null, null, ['Australia', 133],
            ['South America', 102],
            ['Antartica', 57]
          ],
          color: '#e85d58'
        }]
      },
      mapOptions: {
        chart: {
          width: 400
        },

        title: {
          text: 'Nigerian map demo'
        },

        subtitle: {
          text: 'Source map: <a href="http://code.highcharts.com/mapdata/countries/ng/ng-all.js">Nigeria</a>'
        },

        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: 'bottom'
          }
        },

        colorAxis: {
          min: 0
        },
        plotOptions: {
          map: {
            mapData: nigerianMap
          }
        },
        series: [{
          data: [
            ['ng-ri', 0], ['ng-kt', 1], ['ng-so', 2], ['ng-za', 3], ['ng-yo', 4], ['ng-ke', 5], ['ng-ad', 6], ['ng-bo', 7],
            ['ng-ak', 8], ['ng-ab', 9], ['ng-im', 10], ['ng-by', 11], ['ng-be', 12], ['ng-cr', 13], ['ng-ta', 14], ['ng-kw', 15],
            ['ng-la', 16], ['ng-ni', 17], ['ng-fc', 18], ['ng-og', 19], ['ng-on', 20], ['ng-ek', 21], ['ng-os', 22],
            ['ng-oy', 23], ['ng-an', 24], ['ng-ba', 25], ['ng-go', 26], ['ng-de', 27], ['ng-ed', 28], ['ng-en', 29], ['ng-eb', 30],
            ['ng-kd', 31], ['ng-ko', 32], ['ng-pl', 33], ['ng-na', 34], ['ng-ji', 35], ['ng-kn', 36]
          ],
          name: 'Random data',
          states: {
            hover: {
              color: '#BADA55'
            }
          },
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }]
      }
    }
  }
}
</script>
