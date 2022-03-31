import { defineStore } from "pinia";

export const useArticlesStore = defineStore({
  id: "articles_store",
  state: () => ({
    all_articles: [],
    selected_articles: [],
  }),
  getters: {
  },
  actions: {
  },
});
