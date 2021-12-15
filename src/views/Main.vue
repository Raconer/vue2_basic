<template>
  <div>
    Main Page<br>
    Data : {{count}}<br>
    Computed : {{countComputed}}<br>
    <input type="button" value="Reset" @click="$store.commit('reset')">
    <input type="button" value="Increase" @click="$store.commit('increase', 10)">
    <input type="button" value="Decrease" @click="$store.commit('decrease', {amount: 10})">
    <input type="button" value="info" @click="$store.commit({type: 'infoCnt', amount: 10})">
    <hr/>
    <BasicSearch/>
    <BasicList/>
  </div>
</template>

<script>
import BasicList from '@/components/list/BasicList';
import BasicSearch from '@/components/search/BasicSearch';
export default {
    components:{
      BasicSearch,
      BasicList
    },
    data(){
        return {
            count : this.$store.state.CountModule.count
        }
    },
    computed: {
      // 계산된 getter
      countComputed: function () {
        return  this.$store.state.CountModule.count;
      }
    }
}
</script>

<style>

</style>