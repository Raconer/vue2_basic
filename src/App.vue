<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default{
  mounted(){
    console.log("Test Console");
    // this.$session.set("test", "213213");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0px auto;
  width: 1300px;
}
</style>
