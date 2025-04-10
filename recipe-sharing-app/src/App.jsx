// src/App.jsx
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import { useRecipeStore } from './store/recipeStore';

const App = () => {
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);

  return (
    <div className="app-container" style={{ padding: '1rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Recipe Sharing App</h1>
      {!selectedRecipe && (
        <>
          <SearchBar />
          <AddRecipeForm />
          <RecipeList />
        </>
      )}
      {selectedRecipe && <RecipeDetails />}
    </div>
  );
};

export default App;
