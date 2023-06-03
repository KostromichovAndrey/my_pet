<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

</script>

<template>

  <div class="container">
    <Header />
  </div>

  <div class="container">
    <RouterView />
  </div>

  <div class="container">
    <Footer />
  </div>

</template>

<style scoped lang="scss">
  // .container {
  //   border: 1px solid black;
  //   padding: 20px;
  //   max-width: 600px;
  //   margin: 0 auto;
  // }
</style> 
