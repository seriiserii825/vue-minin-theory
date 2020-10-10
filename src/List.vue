<template>
  <div>
    <h2>List</h2>
    <ul>
      <li v-for="name of filteredNames">{{ name }}</li>
    </ul>
    <input type="text" v-model="searchName">
  </div>
</template>
<script>
import ListMixin from "./ListMixin";
export default {
  mixins: [ListMixin]
}
</script>