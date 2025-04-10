// src/App.jsx
import { Routes, Route ,Router} from 'react-router-dom';
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeDetails from './components/RecipeDetails';


const App = () => {
  return (
    <div>
      <h1>Recipe Sharing App</h1>
      <Routes>
        <Router>
        <Route path="/" element={
          <>
            <AddRecipeForm />
            <RecipeList />
          </>
        } />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        </Router>
      </Routes>
    </div>
  );
};

export default App;
