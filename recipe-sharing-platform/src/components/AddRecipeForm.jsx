import { useState } from 'react';
import { FiUpload, FiPlus, FiTrash2 } from 'react-icons/fi';

const initialFormData = {
  title: '',
  ingredients: [''],
  steps: [''],
  prepTime: '',
  difficulty: 'medium',
  image: null,
  imagePreview: ''
};

const difficultyOptions = [
  { value: 'easy', label: 'Easy' },
  { value: 'medium', label: 'Medium' },
  { value: 'hard', label: 'Hard' }
];

const prepTimeOptions = [
  { value: '', label: 'Select time' },
  { value: '15min', label: '15 minutes' },
  { value: '30min', label: '30 minutes' },
  { value: '1h', label: '1 hour' },
  { value: '1h+', label: 'More than 1 hour' }
];

export default function AddRecipeForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleArrayChange = (field, index, value) => {
    const updated = [...formData[field]];
    updated[index] = value;
    setFormData(prev => ({ ...prev, [field]: updated }));
    
    // Clear field error if all items are valid
    if (errors[field] && updated.every(item => item.trim())) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const addField = (field) => {
    setFormData(prev => ({ ...prev, [field]: [...prev[field], ''] }));
  };

  const removeField = (field, index) => {
    const filtered = formData[field].filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, [field]: filtered }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Basic image validation
    if (!file.type.match('image.*')) {
      setErrors(prev => ({ ...prev, image: 'Please upload an image file' }));
      return;
    }

    if (file.size > 2 * 1024 * 1024) { // 2MB limit
      setErrors(prev => ({ ...prev, image: 'Image must be less than 2MB' }));
      return;
    }

    setFormData(prev => ({
      ...prev,
      image: file,
      imagePreview: URL.createObjectURL(file),
      imageError: ''
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Recipe title is required';
    if (formData.ingredients.some(i => !i.trim())) newErrors.ingredients = 'All ingredients must be filled';
    if (formData.steps.some(s => !s.trim())) newErrors.steps = 'All steps must be filled';
    if (!formData.prepTime) newErrors.prepTime = 'Preparation time is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      // Reset form on success
      setFormData(initialFormData);
      alert('Recipe submitted successfully!');
    } catch (error) {
      console.error('Submission error:', error);
      alert('Failed to submit recipe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderArrayField = (field, label, placeholder, isTextarea = false) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}*
      </label>
      {formData[field].map((item, index) => (
        <div key={index} className="flex items-start space-x-2 mb-2">
          {isTextarea && <span className="mt-3 text-gray-500">{index + 1}.</span>}
          
          {isTextarea ? (
            <textarea
              value={item}
              onChange={(e) => handleArrayChange(field, index, e.target.value)}
              rows={2}
              className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                errors[field] ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={`${placeholder} ${index + 1}`}
            />
          ) : (
            <input
              type="text"
              value={item}
              onChange={(e) => handleArrayChange(field, index, e.target.value)}
              className={`flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 ${
                errors[field] ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder={`${placeholder} ${index + 1}`}
            />
          )}
          
          {formData[field].length > 1 && (
            <button
              type="button"
              onClick={() => removeField(field, index)}
              className={`p-2 text-red-500 hover:text-red-700 ${isTextarea ? 'mt-3' : ''}`}
              aria-label={`Remove ${field.slice(0, -1)} ${index + 1}`}
            >
              <FiTrash2 />
            </button>
          )}
        </div>
      ))}
      
      <button
        type="button"
        onClick={() => addField(field)}
        className="mt-2 flex items-center text-sm text-amber-600 hover:text-amber-800"
      >
        <FiPlus className="mr-1" /> Add {field.slice(0, -1)}
      </button>
      
      {errors[field] && (
        <p className="mt-1 text-sm text-red-600">{errors[field]}</p>
      )}
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto p-4 md:p-6 lg:p-8 bg-white rounded-lg shadow-md">
  {/* ... rest of your form code ... */}
</div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Share Your Recipe
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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
            required
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
            <div className="flex-1">
              <p className="text-sm text-gray-500">
                {formData.image?.name || 'No file selected'}
              </p>
              {errors.image && (
                <p className="mt-1 text-sm text-red-600">{errors.image}</p>
              )}
            </div>
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
              required
            >
              {prepTimeOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
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
              {difficultyOptions.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Ingredients */}
        {renderArrayField(
          'ingredients', 
          'Ingredients (Add each ingredient separately)', 
          'Ingredient'
        )}

        {/* Preparation Steps */}
        {renderArrayField(
          'steps', 
          'Preparation Steps', 
          'Step',
          true
        )}

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
