<script setup>
import { RouterLink } from 'vue-router'

const headerRouts = [
  {
    id: 1,
    name: "First page",
    path: "/",
  },
  {
    id: 2,
    name: "Second page",
    path: "/about",
  },
  {
    id: 3,
    name: "Third page",
    path: "/third-page",
  },
  {
    id: 4,
    name: "Forth page",
    path: "/forth-page",
  },
  // {
  //   id: 5,
  //   name: "Romario page",
  //   path: "/romario",
  // },
]
</script>

<template>
  <header class="header">
    <nav class="header-nav">
      <RouterLink v-for="itemLink in headerRouts" 
        v-bind:key="itemLink.id" 
        v-bind:to="itemLink.path"
        class="header-link"
      >
        {{ itemLink.name }}
      </RouterLink>
      
    </nav>
  </header>
</template>

<style scoped lang="scss">
  .header {
    border: 1px solid black;
    padding: 20px;
    text-align: center;

    &-nav {
      
    }

    &-link {
      color: black;
      margin-left: 20px;
      
      &:hover {
        color: aqua;
      }
    }
    
  }
</style> 