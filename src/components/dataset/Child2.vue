import { EventBus } from '@/utils/EventBus';
<template>
  <div>
    Child 2 Vue <br/>
    Title : {{child2Data.title}}<br>
    Child1 Title : {{child1Data.title}}
  </div>
</template>

<script>
import EventBus from '@/utils/EventBus';

export default {
  data(){
    let child2Data = {
      title :"Child 2 Data Title"
    };
    let child1Data = {  
      title :""
    }
    return {
        child1Data,
        child2Data
    }
  },
  created(){
    EventBus.$on('sendSilbling',(data)=>{
      this.child1Data = data;
    })
  }
}
</script>

<style>

</style>