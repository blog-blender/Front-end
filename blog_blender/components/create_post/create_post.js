import { useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

export default function CreatePostForm({ onSave, closeHandeler, initialData }) {
  const [postImages, setPostImages] = useState({
    upload: [],
    display: initialData ? initialData.photos : [],
  });

  const [postData, setInitialData] = useState(initialData ? initialData : {});

  const { token, user, login } = useContext(AuthContext);

  const imageChangeHandler = (event) => {
    const uploadedImage = event.target.files[0];
    if (!uploadedImage) return;
    const imageUrl = URL.createObjectURL(uploadedImage);
    setPostImages({
      upload: [...postImages.upload, uploadedImage],
      display: [...postImages.display, imageUrl],
    });
  };

  const imageDiscardHandler = (index) => {
    const newDisplayImages = postImages.display.filter((_, i) => i !== index);
    const newUploadImages = postImages.upload.filter((_, i) => i !== index);

    setPostImages({
      upload: newUploadImages,
      display: newDisplayImages,
    });
  };

  const textChangeHandler = (event) => {
    const newFormData = { ...postData };
    newFormData[event.target.id] = event.target.value;
    setInitialData(newFormData);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    const payload = {
      title: postData.title,
      Auther_id: user.id,
      content: postData.content,
      post_id: postData.blog,
      photos: postImages.upload.length > 0 ? postImages.upload : initialData.photos,//////////////////////HERE!!///////////////////////
    };
    formData.append("title", payload.title);
    formData.append("Auther_id", payload.Auther_id);
    formData.append("content", payload.content);
    formData.append("blog_id", 1);
    for (const image of payload.photos) {
      formData.append("photos", image);
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token.access}`,
      },
    };
    const createUrl = 'http://127.0.0.1:8000/api/v1/posts/create/';
    const updateUrl = 'http://127.0.0.1:8000/api/v1/posts/[blog_id]/update/';
    const resultUrl = initialData ? updateUrl : createUrl;
    const method = initialData ? "put" : "post";
    const data = await axios[method](resultUrl, formData, config);
  };
  const blogHandler = (event) => {
    const newFormData = { ...postData };
    newFormData[event.target.id] = event.target.value;
    setInitialData(newFormData);
  };

  return (
<div className="flex items-center justify-center min-h-screen p-4"> {/* Add padding to the main content */}
  <form className="w-full max-w-3xl border border-gray-300 rounded-lg p-10 bg-primary-500 max-h-[80vh] overflow-auto"> {/* Set max height and make it scrollable */}
    {/* Form content */}
    <div className="mb-6">
      <label htmlFor="title" className="block text-2xl font-medium leading-5 text-black-900 py-2">
        Title
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          type="text"
          name="title"
          id="title"
          value={postData.title}
          onChange={textChangeHandler}
          className="block w-full pl-16 pr-12 border-gray-300 rounded-md py-2 text-gray-900 placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          placeholder="Enter a title"
        />
      </div>
    </div>

    <div className="mb-6">
      <label htmlFor="title" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
        Post content
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <textarea
          onChange={textChangeHandler}
          value = {postData.content}
          id="content"
          name="content"
          rows="3"
          className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
          placeholder="Your article."
        >
          {/* {postData.content} */}
        </textarea>
      </div>
    </div>

    <div className="mb-6">
      <label htmlFor="title" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
        Photos
      </label>
      <div className="mt-2 flex flex-col justify-center items-center rounded-lg border border-dashed border-gray-900/25 p-4">
        <div className="text-center w-full mb-4">
          <div className="flex text-sm leading-6 text-gray-600 justify-center items-center">
          <label
  htmlFor="file-upload"
  className="relative cursor-pointer rounded-md font-semibold text-indigo-900 text-lg bg-transparent focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
>
  <span>Upload files</span>
  <input
    id="file-upload"
    name="photos[]"
    type="file"
    multiple
    className="sr-only"
    accept="image/*"
    onChange={imageChangeHandler}
  />
</label>

            <p className="pl-1">or drag and drop</p>
          </div>
        </div>
        <p className="text-xs leading-5 text-gray-600 mb-4">
          PNG, JPG, GIF up to 10MB (multiple photos allowed).
        </p>
      </div>
      <div className="mb-6">

        <div className="mb-6 mt-4">
          <label htmlFor="blog" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
            Blog
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <select
              id="blog"
              name="blog"
              value={postData.blog}
              onChange={blogHandler} // Assuming you want to handle the blog selection in textChangeHandler
              className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 rounded-md text-gray-900 placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
            >
              <option value="blog1">Blog 1</option>
              <option value="blog2">Blog 2</option>
              <option value="blog3">Blog 3</option>
              {/* Add more options as needed */}
            </select>
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-wrap justify-center">
        {postImages.display.map((imageUrl, index) => (
          <div key={index} className="relative mx-2 my-2">
            <img
              src={imageUrl}
              alt={`Preview ${index}`}
              className="max-w-xs max-h-32 rounded-md border border-gray-300"
            />
            <button
              type="button"
              onClick={() => imageDiscardHandler(index)}
              className="absolute top-0 right-0 text-red-600"
            >
              Discard
            </button>
          </div>
        ))}
      </div>
    </div>

    <div className="mb-6 flex justify-end">
      <button
        onClick={submitHandler}
        type="submit"
        className="bg-indigo-900 text-white py-3 px-6 rounded-lg hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 text-lg"
      >
        Save
      </button>
    </div>
  </form>
</div>

  );
}
