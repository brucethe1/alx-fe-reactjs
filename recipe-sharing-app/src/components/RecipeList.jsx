// src/components/RecipeList.jsx
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.filteredRecipes);
  const selectRecipe = useRecipeStore((state) => state.selectRecipe);

  if (recipes.length === 0) return <p>No matching recipes found.</p>;

  return (
    <div>
      <h2>All Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          onClick={() => selectRecipe(recipe)}
          style={{
            border: '1px solid #ccc',
            borderRadius: '5px',
            padding: '10px',
            marginBottom: '10px',
            cursor: 'pointer',
          }}
        >
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
