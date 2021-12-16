<template>
  <div>
    Parent Vue<br>
    Data : {{parent}}<br>
    Child 1 Data : {{child1Data.title}}<br>
    <input type="button" value="child1 Send Value" @click="childSendEvent()">
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
    };
    let child1Data = {
      title : ""
    };

    return {
      child1Data,
      parent
    }
  },
  components:{
    child1,
    child2
  },
  methods:{
    parentEvent(childData){
      this.child1Data = childData;
    },
    childSendEvent(){
      this.parent = {
      title : "Change Parent Title"
    };
    }
  }
}
</script>

<style>

</style>