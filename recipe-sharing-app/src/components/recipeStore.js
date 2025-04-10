// src/store/recipeStore.js
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  selectedRecipe: null,
  searchTerm: '',
  filteredRecipes: [],
  
  addRecipe: (recipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, recipe];
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter(r =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
      };
    }),

  setSearchTerm: (term) =>
    set((state) => {
      return {
        searchTerm: term,
        filteredRecipes: state.recipes.filter((r) =>
          r.title.toLowerCase().includes(term.toLowerCase())
        ),
      };
    }),

  selectRecipe: (recipe) => set({ selectedRecipe: recipe }),
  clearSelectedRecipe: () => set({ selectedRecipe: null }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return {
        recipes: updated,
        filteredRecipes: updated.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
        selectedRecipe:
          state.selectedRecipe?.id === id ? null : state.selectedRecipe,
      };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updatedRecipes = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return {
        recipes: updatedRecipes,
        filteredRecipes: updatedRecipes.filter((r) =>
          r.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        ),
        selectedRecipe: updatedRecipe,
      };
    }),
}));
