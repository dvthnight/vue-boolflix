<template>
  <div id="app">
    <MainBoolfix/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import MainBoolfix from "./components/MainBoolfix.vue"

export default {
  name: 'App',
  components: {
    // HelloWorld
    MainBoolfix,
  }
}
</script>

<style lang="scss">
@import "./assets/scss/common.scss";
@import "~@fortawesome/fontawesome-free/css/all.css";

#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: white;
  // margin-top: 60px;
}
</style>
