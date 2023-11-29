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
</script>

<template>
  <div>
    <div class="header">
      <h1>To do list</h1>
      <input type="text">
      <button>Add task</button>
    </div>
    <div class="body">
      <input type="checkbox">
      <span>Task 1</span>
      <button>Remove</button>
    </div>

  </div>
</template>

<style lang="scss">

</style>
