<template>
  <div>
    <h1>This is an about page</h1>

    <button @click="do_the_stuff()">Test things</button>
    <button @click="boop()">aaaaaaaaaaa</button>
    <div>Liste des produits</div>
    <div>
      <ul id="example-1">
        <li v-for="articles in test_var.articles" :key="articles">
          <div @click="boop(articles)">
            {{ articles }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import json from "../components/inventory.json";
import { useArticlesStore } from "../stores/articles_store";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const storeStore = useArticlesStore();
let test_var = json;
storeStore.all_articles = test_var;

function boop(article) {
  alert(article.id + " - " + article.title);
  storeStore.selected_articles.push(article)
  // router.push("/panier");
}

function do_the_stuff() {
  console.log(test_var);
  console.log(test_var.articles);
  console.log();
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
