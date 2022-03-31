import { defineStore } from "pinia";

export const useArticlesStore = defineStore({
  id: "articles_store",
  state: () => ({
    all_articles: [],
    articles_du_panier: [],
  }),
  persist:true,
  getters: {},
  actions: {},
});
