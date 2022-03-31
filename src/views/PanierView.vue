<template>
  <div>
    <h2>Contenu panier</h2>
    <ul>
      <li v-for="element in panier_temp" :key="element">Lapin</li>
    </ul>
  </div>
</template>

<script setup>
import { useArticlesStore } from "../stores/articles_store";
import { ref } from "vue";

const storeStore = useArticlesStore();
const panier_temp = storeStore.articles_du_panier;
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
