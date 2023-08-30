import React, { useState } from 'react';
import Checkbox from './Checkbox';
import Axios from 'axios';

const CreateBlogForm = ({ onSave, onClose }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  let state = {
    title:"ayman",
    owner:1,
    banner:"temp",
    blog_pic:"temp",
    description:"aaaaa",
    category:["gym"]
  }
  let formData = new FormData();

  
  function onChange(event){
    if(event.target && event.target.files[0]){
      state.banner=event.target.files[0]
      state.blog_pic=event.target.files[0]
    }
  }

  async function handleSubmit(e){
    e.preventDefault();
    formData.append('title', state.title);
    formData.append('owner', state.owner);
    formData.append('banner', state.banner, "temp");
    formData.append('blog_pic', state.blog_pic, "temp");
    formData.append('description', state.description);
    formData.append('category', state.category);
    Axios.post("http://127.0.0.1:8000/api/v1/blogs/createblog/", {formData}, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    .then(res =>{
      console.log(res);
    })
    .catch(error =>{
      console.log(error);
    })
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-end mb-2">
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2"
            onClick={onClose}
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
              onChange={onChange}
              className="border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold mb-1">
              Blog Description:
            </label>
            <textarea
              id="description"
              onChange={onChange}
              className="border rounded-lg p-2 w-full h-20 overflow-y-auto"
            />
          </div>
          <div className="mb-4">
            <Checkbox
              selectedOptions={selectedCategories}
              onOptionChange={onChange}
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
                onChange={onChange}
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
                onChange={onChange}
                className="border rounded-lg p-2 w-40"
              />
            </div>
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