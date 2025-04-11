import create from 'zustand';

// Zustand store to manage recipes
const useRecipeStore = create((set) => ({
  recipes: [],
  
  // Function to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  
  // Function to set the list of recipes directly
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
