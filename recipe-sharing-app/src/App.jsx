import { useEffect } from 'react';
import { useRecipeStore } from './store/recipeStore'; // Assuming store is in 'store/recipeStore.js'
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

const RecipeApp = () => {
  const setRecipes = useRecipeStore((state) => state.setRecipes);
  
  useEffect(() => {
    // Fetch recipes from an API and set them using setRecipes
    fetch('https://someapi.com/recipes')
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data); // Set the recipes list
      });
  }, [setRecipes]); // Runs once when the component mounts

  return (
    <div>
      <h1>Recipe Sharing App</h1>
      {/* Add your Recipe List component here */}
    </div>
  );
};

export default RecipeApp;
