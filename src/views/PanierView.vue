<template>
  <div>
    <h2>Contenu panier :</h2>
    <button @click="logs()">Logs</button>

    <button @click="check()">Check</button>
    <ul>
      <li v-for="(element, index) in selected_articles_panier" :key="element">
        
        <p>
          Id article :
          {{ all_articles.articles[index] }}
        </p>
        -
        <p>
          QUantity article :
          {{ element }}
        </p>
        <br>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useArticlesStore } from "../stores/articles_store";
import { ref, onMounted } from "vue";
import json from "../components/inventory.json";

const storeStore = useArticlesStore();
const selected_articles_panier = storeStore.articles_du_panier;
const all_articles = json
let panier_length = Object.keys(selected_articles_panier).length;
let keys_to_check = Object.keys(selected_articles_panier);

function logs() {
  console.log("Logs");
  console.log(all_articles);
  console.log(selected_articles_panier);
  console.log(keys_to_check[0]);
  // console.log(selected_articles_panier[13]);
  // console.log(selected_articles_panier[2]);
}

function check() {
  console.log("Check");
}

onMounted(() => {
  console.log("started");
  calculate_panier();
  console.log("mounted");
});

function calculate_panier() {
  console.log("calculate_panier");
  console.log("panier_length " + panier_length);
  console.log(keys_to_check);

  for (let index = 0; index < panier_length; index++) {
    let current_article = keys_to_check[index];

    // console.log({ current_article });
    // console.log(current_article);
    console.log(
      "Article id " +
        current_article +
        " Article Quantity: " +
        selected_articles_panier[current_article]
    );
  }
}
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
