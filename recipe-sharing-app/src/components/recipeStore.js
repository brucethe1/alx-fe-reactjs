import create from 'zustand';

// Define Zustand store for managing recipes
const useRecipeStore = create((set) => ({
  // Initial state
  recipes: [],
  
  // Action to add a new recipe
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  
  // Action to set the recipes list entirely (useful when you want to reset the list, e.g., after fetching data)
  setRecipes: (recipes) => set({ recipes }),
}));

export { useRecipeStore };
