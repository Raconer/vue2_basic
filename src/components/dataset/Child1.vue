<template>
  <div>
    Child 1 Vue <br/>
    Parent Title : {{parent.title}}<br>
    Title : {{child1Data.title}}<br>
    <input type="button" value="Parent Data Send" @click="childEvent()">&nbsp;
    <input type="button" value="Silbling Data Send" @click="silblingEvent()">
  </div>
</template>

<script>
import EventBus from '@/utils/EventBus';
export default {
  props: ["parent"],
  data(){
    let child1Data = {
      title :"Child 1 Data Title"
    };

    return {
        child1Data
    }
  },
 
  methods:{
    childEvent(){
      this.$emit("sendParent", this.child1Data);
    },
    silblingEvent(){
      EventBus.$emit("sendSilbling", this.child1Data);
    },
    testEvent(){
      alert("Child Start")
    }
  }
}
</script>

<style>

</style>



/* 
  // 기본 타입 확인 (`null` 은 어떤 타입이든 가능하다는 뜻입니다)
  // propA 는 숫자 타입이어야 함
  propA: Number,

  // 여러개의 가능한 타입
  // propB는 문자열이나 숫자 타입이어야 함
  propB: [String, Number],

  // propC는 문자열이며, 필수 값임
  propC: {
    type: String,
    required: true
  },

  //propD는 숫자 타입이며, 100의 기본 값을 가짐
  propD: {
    type: Number,
    default: 100
  },

  // propE의 타입은 객체/배열이며 기본값은 팩토리 함수에서 반환 되어야 함
  propE: {
    type: Object,
    default: function () {
      return { message: 'hello' }
    }
  },

  // 사용자 정의 유효성 검사 가능
  propF: {
    validator: function (value) {
      return value > 10
    }
  } 
*/