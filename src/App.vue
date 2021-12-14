<template>
  <router-view></router-view>
</template>

<script>
export default{
  mounted(){
    console.log("Test Console");
    this.$session.set("test", "213213");
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
  margin-top: 60px;
}
</style>
