<script setup>
import { onMounted, ref } from 'vue';
import Card from '../components/Card.vue';

const cardList = ref([])

const fetchData = async () => {
  fetch('https://jsonplaceholder.typicode.com/photos?_page=2&_limit=12')
  .then(response => response.json())
  .then(products => {

    console.log(products, 'products')
    cardList.value = products;
  })
}

onMounted(() => {
  fetchData();
})
</script>

<template>
  <div class="about">

    <div v-if="cardList.length" class="card-list">
      <Card v-for="item in cardList" 
      :key="item"
      v-bind:card-info="item"
      />
    </div>

  </div>
</template>

<style>
  .card-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
  }

@media (min-width: 1024px) {
  .about {
    min-height: 50vh;
    display: flex;
    align-items: center
  }
}
</style>
