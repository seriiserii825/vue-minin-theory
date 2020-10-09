<template>
  <div>
    <app-car>
      <h2 slot="title">Car</h2>
      <p slot="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit, unde!</p>
    </app-car>
  </div>
</template>

<script>
import Car from "./Car";

export default {
  data() {
    return {
      carName: "Fiat",
    }
  },
  components: {
    appCar: Car,
  }
}
</script>


<style>
h1 {
  color: red;
}
</style>