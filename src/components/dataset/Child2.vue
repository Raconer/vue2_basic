import { EventBus } from '@/utils/EventBus';
<template>
  <div>
    Child 2 Vue <br/>
    Title : {{child2Data.title}}
  </div>
</template>

<script>
import {EventBus} from '@/utils/EventBus';

export default {
 
  data(){
    let child2Data = {
      title :"Child 2 Data Title"
    };
    return {
        child2Data
    }
  },
  created(){
    EventBus.$on('sendSilbling',()=>{
      console.log("Child2 Start Event Bus ")
    })
  }
}
</script>

<style>

</style>