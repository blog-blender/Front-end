import { useState } from 'react';
import Checkbox from './Checkbox';
import axios from 'axios';

const CreateBlogForm = ({ onSave, onClose, userState }) => {
  // const [photo, setPhoto] = useState
  const [selectedCategories, setSelectedCategories] = useState([]);
  
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleOrderSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("photo", selectedImage);

    const config = {
      headers: {
        Authorization : `Bearer ${userState.token.access}`,
      },
  };
    const url='http://127.0.0.1:8000/api/v1/posts/test/'
    const data=await axios.post(url ,formData,config)
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-end mb-2">
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2"
            onClick={handleImageChange}
          >
            Close
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Create New Blog</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block font-semibold mb-1">
              Blog Name:
            </label>
            <input
              type="text"
              id="name"
              onChange={handleImageChange}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold mb-1">
              Blog Description:
            </label>
            <textarea
              id="description"
              onChange={handleImageChange}
              className="border rounded-lg p-2 w-full h-20 overflow-y-auto"
            />
          </div>
          <div className="mb-4">
            <Checkbox
              selectedOptions={selectedCategories}
              onOptionChange={handleImageChange}
              categories={["temp1","temp2"]}
            />
            </div>
          <div className="mb-4 flex">
            <div className="mr-4">
              <label htmlFor="bannerImage" className="block font-semibold mb-1">
                Banner Image:
              </label>
              <input
                type="file"
                id="bannerImage"
                accept="image/*"
                onChange={handleImageChange}
                className="border rounded-lg p-2 w-40"
              />
            </div>
            <div>
              <label htmlFor="blogImage" className="block font-semibold mb-1">
                Blog Image:
              </label>
              <input
                type="file"
                id="blogImage"
                accept="image/*"
                onChange={handleImageChange}
                className="border rounded-lg p-2 w-40"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
              onClick={handleOrderSubmit}
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