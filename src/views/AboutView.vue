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

<style lang="scss">
  .card-list {
    display: grid;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);
    padding: 10px 0;

    @media (max-width: 1023.9px) { 
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 767.9px) { 
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .about {
    min-height: 50vh;
    display: flex;
    align-items: center
  }

  

</style>
