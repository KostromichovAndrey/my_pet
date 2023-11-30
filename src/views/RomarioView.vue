<script setup>
// import { onMounted, ref } from 'vue';
// import Card from '../components/Card.vue';

// const cardList = ref([])

// const fetchData = async () => {
//   fetch('https://jsonplaceholder.typicode.com/photos?_page=2&_limit=12')
//   .then(response => response.json())
//   .then(products => {

//     console.log(products, 'products')
//     cardList.value = products;
//   })
// }

// onMounted(() => {
//   fetchData();
// })
const task = "";
// const tusks = [];

// addTusk() {
//   this.tusks.push(this.addTusk)
// };

</script>

<template>
  <div>
    <div class="header">
      <h1>To do list</h1>
      <input v-model="tusk" type="text" placeholder="New tusk">
      <button @click="addTusk">Add task</button>
    </div>
    <div class="body">
      <ul>
        <li>
          <span>{{ tusk }}</span>
          <input type="checkbox">
        </li>
      </ul>
    </div>

  </div>
</template>

<style lang="scss">

</style>
