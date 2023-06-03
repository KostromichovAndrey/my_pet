<script setup>
defineProps({
  cardInfo: Object
})

</script>

<template>
  <div class="card">
    <div class="card-content">

      <img class="card-img" v-bind:src="cardInfo.url" alt="">

      <div class="card-bar">
        <button class="btn">1</button>
        <button class="btn">2</button>
        <button class="btn">3</button>
      </div>

    </div>

    <div class="card-info">

      <h3 class="card-title">{{ cardInfo.title }}</h3>

      <p class="card-descr">{{ cardInfo.title }}</p>
      
    </div>

    <button></button>

  </div>
</template>

<style scoped lang='scss'>
  .card {
    border: 1px solid black;
    border-radius: 10px;
    // min-width: 250px;
    // min-height: 300px;
    display: flex;
    flex-direction: column;
    position: relative;
    overflow: hidden;
    height: 500px;
    

    &-content {
      position: relative;
      overflow: hidden;
      height: 65%;
    }
    
    &-info {
      padding: 10px 15px;
    }
    
    &-img {
      object-fit: cover;
      width: 100%;
    }

    &-descr {
      padding: 5px;
    }

    &-bar {
      position: absolute;
      bottom: 0;
      right: 0;
      display: flex;
      gap: 10px;
      max-width: 100%;
      & .btn {
        width: 35px;
        height: 35px;
        border: 1px solid black;
        border-radius: 45px;
      }
    }
  }
</style> 