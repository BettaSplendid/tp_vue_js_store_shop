<template>
  <div>
    <h1>This is an about page</h1>
    <div style="text-align: right; border: black">
      {{ panier_value }}
    </div>

    <button @click="do_the_stuff()">Test things</button>
    <button @click="boop()">boop</button>
    <button @click="check_contenu_panier()">Output Panier Articles</button>
    <div>Liste des produits</div>
    <div>
      <ul id="example-1">
        <li v-for="articles in test_var.articles" :key="articles">
          <div @click="boop(articles)">
            {{ articles }}
          </div>
          <button @click="addPanier(articles)">Click here for panier</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import json from "../components/inventory.json";
import { useArticlesStore } from "../stores/articles_store";
import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const route = useRoute();
const storeStore = useArticlesStore();
let test_var = json;
let panier_value = ref(0);
let panier = [];
storeStore.all_articles = test_var;

function check_contenu_panier() {
  console.log("check_contenu_panier");
  if (panier.length == 0) {
    console.log("panier vide");
    console.log(panier);
    return;
  } else {
    console.log("panier non vide");
  }
  console.log(panier);
  for (let index = 0; index < panier.length; index++) {
    console.log(panier[index]);
  }
}

function addPanier(articles) {
  console.log("Add panier");
  panier_value.value++;
  panier.push(articles.id);
  storeStore.articles_du_panier = panier;
  console.log(storeStore.articles_du_panier);
  console.log(panier);
  console.log("Count output");
  let output = "";
  var counts = {};
  for (let index = 0; index < panier.length; index++) {
    counts[array[i]] = (counts[array[i]] + 1) || 1;

  }
  console.log(counts)
  console.log("Price is " + output);

  // console.log(panier.values);
}

function boop(article) {
  alert(article.id + " - " + article.title);
  storeStore.articles_du_panier.push(article);
  // router.push("/panier");
}

function do_the_stuff() {
  console.log("Do the stuff");
  console.log(test_var);
  console.log(test_var.articles);
  console.log(Object.entries);
  for (let index = 0; index < test_var.articles.length; index++) {
    console.log(test_var.articles[index]);
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
