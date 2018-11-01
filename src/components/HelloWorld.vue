<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-8">
        <line-chart></line-chart>
      </div>
      <div class="col-md-4">
        <bar-chart></bar-chart>
      </div>
    </div>
    <regions-chart></regions-chart>
  </div>
</template>

<script>
import BarChart from './barChart'
import LineChart from './lineChart'
import RegionsChart from './regionsChart'

export default {
  components: {BarChart, LineChart, RegionsChart},
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
