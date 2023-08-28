import React from 'react';

const Checkbox = ({ selectedOptions, onOptionChange }) => {
  const options = ['Category1', 'Category2', 'Category3', 'Category4', 'Category5'];

  const groupedOptions = [];
  for (let i = 0; i < options.length; i += 3) {
    groupedOptions.push(options.slice(i, i + 3));
  }

  return (
    <div className="mb-4">
      <label className="block font-semibold mb-1">Select Categories:</label>
      <div className="flex flex-wrap">
        {groupedOptions.map((group, index) => (
          <div key={index} className="flex items-center mb-2">
            {group.map((option) => (
              <label key={option} className="flex items-center cursor-pointer mr-4">
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option)}
                  onChange={() => onOptionChange(option)}
                  className="form-checkbox h-5 w-5 text-indigo-600 transition duration-150 ease-in-out rounded-md focus:ring-2 focus:ring-indigo-500"
                />
                <span className="ml-2 text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Checkbox;