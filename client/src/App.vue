<template>
  <div id="app">
    <PageLoader/>
    <MusicApp/>
  </div>
</template>

<script>
import MusicApp from './components/MusicApp.vue'
import PageLoader from '../src/components/PageLoad'
export default {
  name: 'App',
  components: {
    MusicApp,
    PageLoader
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
  z-index: 1;
}
</style>
