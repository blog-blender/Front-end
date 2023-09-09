import React, { useState } from 'react';
import axios from 'axios';

export default function PostForm({ initialData, ownedBlogs, AuthData, setRefetchTrigger, setViewPostForm }) {
  console.log("POST FORM", initialData, ownedBlogs, AuthData);
  const [postImages, setPostImages] = useState({
    upload: [],
    display: initialData ? initialData.photo.map((object) => { return object.data }) : [],
  });

  const [postData, setInitialData] = useState(initialData ? initialData : {});


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
    console.log("EVENT CREATE POST SUBMIT",event);
    const formData = new FormData();
    const payload = {
      title: postData.title,
      Auther_id: AuthData.user.id,
      content: postData.content,
      blog_id: postData.blog_id,
      photos: postImages.upload.length > 0 ? postImages.upload : initialData ? initialData.photo : null,
    };
    formData.append("title", payload.title);
    formData.append("Auther_id", AuthData.user.id);
    formData.append("content", payload.content);
    formData.append("blog_id", payload.blog_id);
    if (payload.photos)
      for (const image of payload.photos) {
        formData.append("photos", image);
      }

    const params = {
      post_id: postData.id
    }

    const config = {
      headers: {
        Authorization: `Bearer ${AuthData.token.access}`,
      },
      params: params
    };
    const createUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/create/';
    const updateUrl = `https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/update/`;
    const resultUrl = initialData ? updateUrl : createUrl;
    const method = initialData ? "put" : "post";
    const data = await axios[method](resultUrl, formData, config);
    console.log("closing");
    setRefetchTrigger(true)
    setViewPostForm(false)
  };

  const blogHandler = (event) => {
    const newFormData = { ...postData };
    newFormData[event.target.id] = event.target.value;
    setInitialData(newFormData);
  };

  return (
    <div className="flex items-center justify-center ">
      <form className="w-full max-w-3xl border border-gray-300 rounded-lg p-10 bg-primary-500  overflow-x-visible">
        <div className="text-center mb-6">
          <label className="text-4xl font-medium leading-5 text-indigo-900">
            Creating Post
          </label>
          <div>
            <label htmlFor="content" className="block text-2xl font-medium leading-5 text-primary-100 py-2">Choose Blog:</label>
            <div className="relative">
              <select onChange={textChangeHandler} id="blog_id" className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>BLOG NAME</option>
                {ownedBlogs.map((object) => { return <option value={object.id}>{object.title}</option> })}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 9.293a1 1 0 011.414 0L10 10.586l1.293-1.293a1 1 0 111.414 1.414l-2 2a1 1 0 01-1.414 0l-2-2a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="title" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
            Title:
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
          <label htmlFor="content" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
            Post content:
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <textarea
              onChange={textChangeHandler}
              value={postData.content}
              id="content"
              name="content"
              rows="3"
              className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              placeholder="Your article."
            ></textarea>
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="photos" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
            Photos:
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


            <div className="mb-6">
              <div className="mt-4 flex flex-wrap justify-center">
                {postImages.display.map((imageUrl, index) => (
                  <div key={index} className="relative mx-2 my-2">
                    <label
                      htmlFor="cover-photo-upload"
                      className="cursor-pointer text-xs leading-5 text-black-900 opacity-25 absolute top-0 left-0 w-full h-full rounded-md bg-gray-800 hover:opacity-70 hover:text-white flex items-center justify-center"

                    >Click to Change</label>
                    <img
                      src={imageUrl}
                      alt={`Preview ${index}`}
                      className="max-w-xs max-h-32 rounded-md border border-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => imageDiscardHandler(index)}
                      className="text-bg-indigo-900 bg-white rounded-full p-1 hover:bg-indigo-900 hover:text-white absolute top-0 right-0 transform translate-x-2/4 -translate-y-2/4"
                      style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>



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
