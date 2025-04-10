
// src/App.jsx
import { BrowserRouter as Route,Routes,Router } from 'react-router-dom';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import SearchBar from './components/SearchBar';
import Header from './components/ Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import UserProfile from './components/UserProfile';
import { useRecipeStore } from './store/recipeStore';

const App = () => {
  const selectedRecipe = useRecipeStore((state) => state.selectedRecipe);

  return (
    <div className="app-container" style={{ padding: '1rem', maxWidth: '800px', margin: 'auto' }}>
      <h1>Recipe Sharing App</h1>
      {!selectedRecipe && (
        <>
          <Routes>
         <Route path="searchbar"   element="{<SearchBar />}"/>
         <Route path="addrecipe" element="{<AddRecipeForm />}"/>
         <Route path="list" element ="{<RecipeList />}"/>
        </>
      )}
      {selectedRecipe && <RecipeDetails />}

      </Routes>
    </div>
  );

  
};

export default App;
