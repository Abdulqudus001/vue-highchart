<template>
  <div id="app">
    <nav class="header">
      <div class="header-icons">
        <button class="btn">Navigation</button>
        <v-icon medium class="white--text">info</v-icon>
        <v-icon medium class="white--text">share</v-icon>
        <v-icon medium class="white--text">print</v-icon>
        <v-icon medium class="white--text">cloud_download</v-icon>
        <v-icon medium class="white--text">fullscreen</v-icon>
        <v-icon medium class="white--text">inbox</v-icon>
      </div>
    </nav>
    <router-view/>
    <span class="footer">
      <div class="text-xs-center">
        <span class="white--text">Built with <label style="color:red;">&#9829;</label> by
          <a href="https://ehealth4everyone.com" target="_blank" class="black--text">eHealth4everyone</a>
        </span>
      </div>
    </span>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
