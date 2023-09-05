import React from 'react';

const Checkbox = ({ selectedOptions, onOptionChange, categories }) => {
  const handleCheckboxChange = (category) => {
    if (selectedOptions.includes(category)) {
      // If the category is already selected, remove it
      onOptionChange(selectedOptions.filter((selectedCategory) => selectedCategory !== category));
    } else {
      // If the category is not selected, add it
      onOptionChange([...selectedOptions, category]);
    }
  };

  return (
    <div className="mb-6">
      <label className="block text-2xl font-medium leading-5 text-primary-100 py-2">Select Categories :</label>
      <div className="flex flex-wrap">
        {categories.map((category, index) => (
          <label key={index} className="flex items-center cursor-pointer mr-4 text-primary-100 py-2">
            <input
              type="checkbox"
              checked={selectedOptions.includes(category)}
              onChange={() => handleCheckboxChange(category)}
              className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out rounded-md focus:ring-2 focus:ring-indigo-500"
            />
            <span className="ml-2 text-gray-700">{category}</span>
          </label>
        ))}
      </div>

    </div>
  );
};

export default Checkbox;
