import create from 'zustand';

const useRecipeStore = create(set => ({
  // Initial state for recipes and favorites
  recipes: [],
  favorites: [],
  recommendations: [],
  
  // Action to add a new recipe
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  
  // Action to add a recipe to favorites
  addFavorite: (recipeId) => set(state => ({ 
    favorites: [...state.favorites, recipeId] 
  })),
  
  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  // Action to generate personalized recommendations based on favorites
  generateRecommendations: () => set(state => {
    // Simple mock recommendation: Select recipes with a random match
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
  
  // Action to initialize recipes (if needed)
  setRecipes: (recipes) => set({ recipes })
}));

export { useRecipeStore };
