// src/components/RecipeDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selected = data.find((item) => item.id.toString() === id);
    setRecipe(selected);
  }, [id]);

  if (!recipe) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">← Back to Recipes</Link>

      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>

          <h2 className="text-xl font-semibold mt-6 mb-2">Ingredients</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            {recipe.ingredients.map((ing, i) => (
              <li key={i}>{ing}</li>
            ))}
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-800">
            {recipe.instructions.map((step, i) => (
              <li key={i}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;
