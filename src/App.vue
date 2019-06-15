<template>
  <div id="app">
    <lowercase></lowercase>
  </div>
</template>

<script>
import lowercase from './components/lowercase'

export default {
  name: 'App',
  components: {
    lowercase
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 100px;
}
</style>
