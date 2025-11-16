// File: src/recipeStore.js
["setSearchTerm", "searchTerm"]
import { create } from 'zustand';
["favorites", "recommendations"]

export const useRecipeStore = create((set) => ({
  recipes: [],

  // add a recipe
  addRecipe: (newRecipe) =>
    set((state) => ({
      recipes: [...state.recipes, newRecipe],
    })),

  // update an existing recipe by id
  updateRecipe: (id, updates) =>
    set((state) => ({
      recipes: state.recipes.map((r) => (r.id === id ? { ...r, ...updates } : r)),
    })),

  // delete a recipe by id
  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // initialize / replace recipes (optional)
  setRecipes: (recipes) => set({ recipes }),
}));


