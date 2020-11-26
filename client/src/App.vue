<template>
  <div id="app">
    <PageLoader/>
    <SilverStone/>
  </div>
</template>

<script>
import SilverStone from './components/SilverStone.vue'
import PageLoader from './components/PageLoader'

export default {
  name: 'App',
  components: {
    SilverStone,
    PageLoader
  }
}
</script>

<style>
#app {
  color: #2c3e50;
  width: 100%;
  margin: 0;
  padding: 0;
}
</style>
