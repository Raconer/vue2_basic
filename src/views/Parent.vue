<template>
  <div>
    Parent Vue
    Data : {{parent}}
    <hr>
    <child1 :parent="parent" v-on:sendParent="parentEvent"></child1>
    <hr>
    <child2></child2>
  </div>
</template>

<script>
import child1 from '@/components/dataset/Child1';
import child2 from '@/components/dataset/Child2';

export default {
  data(){
    let parent = {
      title : "Parent Title"
    }
    return {
      parent
    }
  },
  components:{
    child1,
    child2
  },
  methods:{
    parentEvent(childData){
      console.log("Start Parent Event")
      console.log(childData.title);
    }
  }
}
</script>

<style>

</style>