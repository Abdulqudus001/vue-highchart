// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import BootstrapVue from 'bootstrap-vue'
import VueHighcharts from 'vue-highcharts'
import Highcharts from 'highcharts/highstock'
import loadMap from 'highcharts/modules/map'
import loadStock from 'highcharts/modules/stock'
import loadDrilldown from 'highcharts/modules/drilldown'
// some charts like solid gauge require `highcharts-more.js`, you can find it in official demo.
import loadHighchartsMore from 'highcharts/highcharts-more'
import loadSolidGauge from 'highcharts/modules/solid-gauge'
import loadExporting from 'highcharts/modules/exporting'
import ExportData from 'highcharts/modules/export-data'
import loadOfflineExporting from 'highcharts/modules/offline-exporting'
// to boost the rendering speed by reducing animations and other stuff that takes rendering time
import loadBoost from 'highcharts/modules/boost'

// IMporting styles to be used globally
import './assets/stylesheets/styles.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

loadMap(Highcharts)
loadStock(Highcharts)
loadDrilldown(Highcharts)
loadHighchartsMore(Highcharts)
loadSolidGauge(Highcharts)
loadExporting(Highcharts)
loadOfflineExporting(Highcharts)
// load up the boost modules
loadBoost(Highcharts)
ExportData(Highcharts)

Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(VueHighcharts, {Highcharts})
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
