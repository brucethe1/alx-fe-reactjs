
import { useState } from 'react';
import { FiUpload, FiPlus, FiTrash2 } from 'react-icons/fi';

export default function AddRecipeForm() {
  const [formData, setFormData] = useState({
    title: '',
    ingredients: [''],
    steps: [''],
    prepTime: '',
    difficulty: 'medium',
    image: null,
    imagePreview: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle text/select inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle array fields (ingredients/steps)
  const handleArrayChange = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData(prev => ({ ...prev, [field]: updated }));
  };

  // Add new ingredient/step field
  const addField = (field) => {
    setFormData(prev => ({ ...prev, [field]: [...prev[field], ''] }));
  };

  // Remove ingredient/step field
  const removeField = (field, index) => {
    const filtered = formData[field].filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, [field]: filtered }));
  };

  // Handle image upload
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file,
        imagePreview: URL.createObjectURL(file)
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Required';
    if (formData.ingredients.some(i => !i.trim())) newErrors.ingredients = 'All ingredients needed';
    if (formData.steps.some(s => !s.trim())) newErrors.steps = 'All steps needed';
    if (!formData.prepTime) newErrors.prepTime = 'Required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Submit logic would go here
      console.log('Submitting:', formData);
      setTimeout(() => {
        setIsSubmitting(false);
        alert('Recipe submitted successfully!');
      }, 1500);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Share Your Recipe
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Recipe Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recipe Title*
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="e.g., Grandma's Apple Pie"
          />
          {errors.title && (
            <p className="mt-1 text-sm text-red-600">{errors.title}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Recipe Image
          </label>
          <div className="flex items-center space-x-4">
            <label className="flex flex-col items-center justify-center w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-amber-500">
              {formData.imagePreview ? (
                <img 
                  src={formData.imagePreview} 
                  alt="Preview" 
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <div className="flex flex-col items-center p-4 text-gray-500">
                  <FiUpload className="w-6 h-6 mb-2" />
                  <span className="text-xs">Upload Image</span>
                </div>
              )}
              <input 
                type="file" 
                className="hidden" 
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
            <span className="text-sm text-gray-500">
              {formData.image?.name || 'No file selected'}
            </span>
          </div>
        </div>

        {/* Prep Time & Difficulty */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Preparation Time*
            </label>
            <select
              name="prepTime"
              value={formData.prepTime}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                errors.prepTime ? 'border-red-500' : 'border-gray-300'
              }`}
            >
              <option value="">Select time</option>
              <option value="15min">15 minutes</option>
              <option value="30min">30 minutes</option>
              <option value="1h">1 hour</option>
              <option value="1h+">More than 1 hour</option>
            </select>
            {errors.prepTime && (
              <p className="mt-1 text-sm text-red-600">{errors.prepTime}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Difficulty
            </label>
            <select
              name="difficulty"
              value={formData.difficulty}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
        </div>

        {/* Ingredients - Dynamic Fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Ingredients* (Add each ingredient separately)
          </label>
          {formData.ingredients.map((ingredient, index) => (
            <div key={index} className="flex items-center space-x-2 mb-2">
              <input
                type="text"
                value={ingredient}
                onChange={(e) => handleArrayChange('ingredients', index, e.target.value)}
                className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                  errors.ingredients ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={`Ingredient ${index + 1}`}
              />
              {formData.ingredients.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeField('ingredients', index)}
                  className="p-2 text-red-500 hover:text-red-700"
                >
                  <FiTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField('ingredients')}
            className="mt-2 flex items-center text-sm text-amber-600 hover:text-amber-800"
          >
            <FiPlus className="mr-1" /> Add Ingredient
          </button>
          {errors.ingredients && (
            <p className="mt-1 text-sm text-red-600">{errors.ingredients}</p>
          )}
        </div>

        {/* Preparation Steps - Dynamic Fields */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Preparation Steps*
          </label>
          {formData.steps.map((step, index) => (
            <div key={index} className="flex items-start space-x-2 mb-3">
              <span className="mt-3 text-gray-500">{index + 1}.</span>
              <textarea
                value={step}
                onChange={(e) => handleArrayChange('steps', index, e.target.value)}
                rows={2}
                className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                  errors.steps ? 'border-red-500' : 'border-gray-300'
                }`}
                placeholder={`Step ${index + 1}`}
              />
              {formData.steps.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeField('steps', index)}
                  className="p-2 text-red-500 hover:text-red-700 mt-3"
                >
                  <FiTrash2 />
                </button>
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={() => addField('steps')}
            className="mt-2 flex items-center text-sm text-amber-600 hover:text-amber-800"
          >
            <FiPlus className="mr-1" /> Add Step
          </button>
          {errors.steps && (
            <p className="mt-1 text-sm text-red-600">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full px-6 py-3 rounded-lg font-medium text-white ${
              isSubmitting 
                ? 'bg-amber-400 cursor-not-allowed' 
                : 'bg-amber-600 hover:bg-amber-700'
            } transition-colors duration-200 flex items-center justify-center`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </>
            ) : 'Publish Recipe'}
          </button>
        </div>
      </form>
    </div>
  );
}
