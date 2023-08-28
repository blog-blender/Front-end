import React from 'react';
import { blog_data } from '@/data_samples/blog_list';

const Checkbox = ({ selectedOptions, onOptionChange }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">Select Categories:</label>
      <div className="flex flex-wrap">
        {blog_data[0].categories.map((category, index) => (
          <label key={index} className="flex items-center cursor-pointer mr-4">
            <input
              type="checkbox"
              checked={selectedOptions.includes(category)}
              onChange={() => onOptionChange(category)}
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
