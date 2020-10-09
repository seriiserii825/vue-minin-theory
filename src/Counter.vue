<template>
  <div>
    <h1>{{ counter }}</h1>
  </div>
</template>
<script>
import {eventEmitter} from "./main";

export default {
  data(){
    return {
      counter: 0
    }
  },
  created() {
   eventEmitter.$on('updateCounter', (num) => {
     this.counter += num
   })
  }
}
</script>