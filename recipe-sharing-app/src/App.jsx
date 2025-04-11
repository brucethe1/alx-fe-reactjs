import React, { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';
import { RecipeList } from './RecipeList';
import { AddRecipeForm } from './AddRecipeForm';
import { FavoritesList } from './FavoritesList';
import { RecommendationsList } from './RecommendationsList';

const App = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const generateRecommendations = useRecipeStore(state => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, [recipes]);

  return (
    <div>
      <h1>Recipe Sharing Application</h1>
      <AddRecipeForm />
      <RecipeList />
      <FavoritesList />
      <RecommendationsList />
    </div>
  );
};

export default App;
