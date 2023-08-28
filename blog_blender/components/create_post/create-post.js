import React, { useState } from 'react';

const CreateBlogForm = ({ onSave, onClose }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [bannerImage, setBannerImage] = useState(null);
  const [blogImage, setBlogImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name,
      description,
      selectedCategories,
      bannerImage,
      blogImage,
    };
    onSave(formData);
  };

  const handleBannerImageChange = (e) => {
    setBannerImage(e.target.files[0]);
  };

  const handleBlogImageChange = (e) => {
    setBlogImage(e.target.files[0]);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter(cat => cat !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-end mb-2">
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2"
            onClick={onClose}
          >
            Close
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Create New Post</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name">Blog Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description">Blog Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border rounded-lg p-2 w-full h-40"
            />
          </div>
          <div className="mb-4">
            <label>Select Categories:</label>
            {/* Render checkboxes for categories */}
            {/* Use handleCategoryChange to manage selected categories */}
          </div>
          <div className="mb-4">
            <label htmlFor="bannerImage">Banner Image:</label>
            <input
              type="file"
              id="bannerImage"
              accept="image/*"
              onChange={handleBannerImageChange}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="blogImage">Blog Image:</label>
            <input
              type="file"
              id="blogImage"
              accept="image/*"
              onChange={handleBlogImageChange}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              type="button"
              className="bg-green-500 text-white rounded-lg px-4 py-2"
            >
              Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlogForm;