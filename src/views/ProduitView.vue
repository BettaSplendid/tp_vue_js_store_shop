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
          <button @click="panier_add(articles)">Click here for panier</button>
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

let panier_object = {};

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

function boop(article) {
  alert(article.id + " - " + article.title);
  // storeStore.articles_du_panier.push(article);
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

function panier_add(article) {
  // let article_id = article.id
  // let article_title = article.title
  //  var testtesttest = Object.assign({ article_panier_boy : article.id })
  //  console.log(testtesttest);
  //  console.log(Object.keys(testtesttest));
  let property_name = article.id;
  console.log(property_name);
  if (panier_object.hasOwnProperty(property_name)) {
    console.log("Exists");
    panier_object[property_name] = panier_object[property_name] + 1;
  } else {
    console.log("Does not exist");
    panier_object[property_name] = 1;
  }

  console.log(panier_object);
  storeStore.articles_du_panier = panier_object;
  console.log(storeStore.articles_du_panier);

  //  if(Object.keys(testtesttest).contains("c")) {
  //    console.log("testtesttest vide");
  // }
}

// for (let index = 0; index < article.length; index++) {
//   let randrand = rand(0, article.length);
//   if(Object.keys(panier_object).includes(article.id)) {
//     console.log("already in panier");
//     break;
//   } else {
//     console.log("Putting it in.");
//   }
//   let el_1 = article[index].id;
//   let createte = { el_1: randrand };
//   Object.assign(panier_object, createte);
// }
// console.log(panier_object);

// function addPanier(articles) {
//   console.log("Add panier");
//   panier_value.value++;
//   panier.push(articles.id);
//   storeStore.articles_du_panier = panier;
//   console.log(storeStore.articles_du_panier);
//   console.log(panier);
//   console.log("Count output");
//   let output = "";
//   var counts = {};
//   for (let index = 0; index < panier.length; index++) {
//     counts[panier[index]] = counts[panier[index]] + 1 || 1;
//   }
//   output = Object.values(counts).length;

//   console.log(counts);
//   console.log("Price is " + output);

//   // console.log(panier.values);
// }
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
