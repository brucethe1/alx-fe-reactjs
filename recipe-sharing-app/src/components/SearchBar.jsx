// src/components/SearchBar.jsx
import { useRecipeStore } from '../store/recipeStore';

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <div style={{ margin: '1rem 0' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '0.5rem', width: '100%' }}
      />
    </div>
  );
};

export default SearchBar;
