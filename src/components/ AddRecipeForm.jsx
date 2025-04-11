import React, { useState } from 'react';

function AddRecipeForm() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!title.trim()) newErrors.title = 'Title is required';
    if (!ingredients.trim()) {
      newErrors.ingredients = 'Ingredients are required';
    } else if (ingredients.split(',').length < 2) {
      newErrors.ingredients = 'Add at least two ingredients';
    }
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients: ingredients.split(',').map((i) => i.trim()),
      instructions: steps.split('.').map((s) => s.trim()).filter(Boolean),
      image: 'https://via.placeholder.com/400x200?text=New+Recipe',
      summary: steps.split('.')[0] || 'Delicious recipe'
    };

    console.log('New Recipe Submitted:', newRecipe);

    // Clear form
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6 text-center">Add a New Recipe</h1>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block font-medium mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.title && <p className="text-red-500 text-sm">{errors.title}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Ingredients (comma separated)</label>
          <textarea
            rows="3"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.ingredients && <p className="text-red-500 text-sm">{errors.ingredients}</p>}
        </div>

        <div>
          <label className="block font-medium mb-1">Preparation Steps (separated by periods)</label>
          <textarea
            rows="5"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.steps && <p className="text-red-500 text-sm">{errors.steps}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition w-full sm:w-auto"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
}

export default AddRecipeForm;
