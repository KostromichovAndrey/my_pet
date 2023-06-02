<script setup>
defineProps({
  cardInfo: Object
})

</script>

<template>
  <div class="card">
    <img class="card-img" v-bind:src="cardInfo.url" alt="">
    <h3 class="card-title">{{ cardInfo.title }}</h3>
    <p class="card-descr">{{ cardInfo.title }}</p>
    <button>Add to compare list</button>
    <button>Add to favore</button>
    <button>Add to cart</button>
  </div>
</template>

<style scoped lang='scss'>
  .card {
    border: 1px solid black;
    border-radius: 10px;

    &-img {
      max-width: 150px;
      max-height: 200px;
    }

    &-title {
      padding: 10px;
    }

    &-descr {

    }
  }
</style> 