import { useState } from 'react';
import Checkbox from './Checkbox';
import axios from 'axios';

const CreateBlogForm = (props) => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const [blogDatail, setBlogDetail] = useState(props.initialData?props.initialData:{});
  const [blogImages, setBlogImages] = useState({
      upload:{banner:null,blogPic:null},
      display:{banner:blogDatail.banner,blogPic:blogDatail.blogPic},
    });
  
  // const urlToFile = async (url, callBack, callBackParams, setter)=>{
  //   let result = null
  //   if(url){
  //     console.log("acepted");
  //     result = await fetch(url)
  //     .then(res => res.blob())
  //     .then(blob => {
  //     callBack(new File([blob], 'image', {type: blob.type}), callBackParams, setter)
  //     })
  //   }
  // };

  // let getBlogFiles = async (value, params, setter) =>{
    
  // }

  // getBlogFiles(blogImages.display.banner, blogImages.display.blogPic, setBlogImages, blogImages);

  const imageChangeHandler = (event) => {
    const uploadedImage = event.target.files[0];
    console.log(uploadedImage,"on change");
    const imageUrl = URL.createObjectURL(uploadedImage);
    let temp = {...blogImages}
    temp.upload[event.target.id] = uploadedImage
    temp.display[event.target.id] = imageUrl
    setBlogImages(temp);
  };

  const imageDiscardHandler = (event) =>{
    const deletedImageId = event.target.id
    let temp = {...blogImages}
    temp.upload[deletedImageId] = null
    temp.display[deletedImageId] = blogDatail[deletedImageId]
    setBlogImages(temp)
}

  const textChangeHandler = (event) => {
    const newFormData = {...blogDatail}
    newFormData[event.target.id] = event.target.value
    setBlogDetail(newFormData)
  };
  
  const submitHandler = async (event)=>{
    event.preventDefault();
    let url,payload,method
    const formData = new FormData();

    const config = {
      headers: {
        Authorization : `Bearer ${props.AuthData.token.access}`,
      },
  };

    if(props.initialData){
      method = "put"
      url = `http://127.0.0.1:8000/api/v1/blogs/update/`
      payload ={
        title: blogDatail.title,
        description: blogDatail.description,
        banner: blogImages.upload.banner,
        blogPic: blogImages.upload.blogPic,
        }
        config.params = {blog_id:props.initialData.id}
        console.log(payload.banner,"uploaded",payload.blogPic);
    }
    else{
      method = "post"
      url = 'http://127.0.0.1:8000/api/v1/blogs/createblog/'
      payload ={
        title: blogDatail.title,
        description: blogDatail.description,
        banner: blogImages.upload.banner,
        blogPic: blogImages.upload.blogPic,
        }
    }
    formData.append("title", payload.title);
    formData.append("description", payload.description);
    formData.append("owner", props.AuthData.user.id);
    formData.append("category_name", "gym");
    formData.append("banner", payload.banner);
    formData.append("blog_pic", payload.blogPic);
    
    axios[method](url, formData, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-end mb-2">
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2"
            // onClick={close}
          >
            Close
          </button>
        </div>
        <h2 className="text-2xl font-semibold mb-4">Create New Blog</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="title" className="block font-semibold mb-1">
              Blog Name:
            </label>
            <input
              type="text"
              id="title"
              onChange={textChangeHandler}
              className="border rounded-lg p-2 w-full"
              // value={ini}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block font-semibold mb-1">
              Blog Description:
            </label>
            <textarea
              id="description"
              onChange={textChangeHandler}
              className="border rounded-lg p-2 w-full h-20 overflow-y-auto"
            />
          </div>
          <div className="mb-4">
            <Checkbox
              selectedOptions={selectedCategories}
              // onOptionChange={imageChangeHandler}
              categories={props.categories}
            />
            </div>
          <div className="mb-4 flex">
            <div className="mr-4">
              <label htmlFor="banner" className="block font-semibold mb-1">
                Banner Image:
              </label>
              <input
                type="file"
                id="banner"
                accept="image/*"
                onChange={imageChangeHandler}
                className="border rounded-lg p-2 w-40"
              />
              {
              <div>
                <span id="banner" onClick={imageDiscardHandler}>X</span>
                <img src={blogImages.display.banner} />
              </div>
            }
            </div>

            <div>
              <label htmlFor="blogImage" className="block font-semibold mb-1">
                Blog Image:
              </label>
              <input
                type="file"
                id="blogPic"
                accept="image/*"
                onChange={imageChangeHandler}
                className="border rounded-lg p-2 w-40"
              />
              {
              <div>
                <span id="blogPic" onClick={imageDiscardHandler}>X</span>
                <img src={blogImages.display.blogPic} />
              </div>
            }
            </div>
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
              onClick={submitHandler}
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