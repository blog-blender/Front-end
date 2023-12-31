import { useState } from 'react';
import Checkbox from './Checkbox';
import axios from 'axios';

const BlogForm = (props) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
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
  const [blogDetail, setBlogDetail] = useState(props.initialData ? props.initialData : {});
  const [blogImages, setBlogImages] = useState({
    blogPhoto: {
      upload: null,
      display: null,
    },
    coverPhoto: {
      upload: null,
      display: null,
    },
  });

  const blogPhotoChangeHandler = (event) => {
    const uploadedImage = event.target.files[0];
    if (!uploadedImage) return;

    const imageUrl = URL.createObjectURL(uploadedImage);
    setBlogImages((prevImages) => ({
      ...prevImages,
      blogPhoto: {
        upload: uploadedImage,
        display: imageUrl,
      },
    }));
  };

  const coverPhotoChangeHandler = (event) => {
    const uploadedImage = event.target.files[0];
    if (!uploadedImage) return;

    const imageUrl = URL.createObjectURL(uploadedImage);
    setBlogImages((prevImages) => ({
      ...prevImages,
      coverPhoto: {
        upload: uploadedImage,
        display: imageUrl,
      },
    }));
  };

  const imageDiscardHandler = (imageType) => {
    setBlogImages((prevImages) => ({
      ...prevImages,
      [imageType]: {
        upload: null,
        display: null,
      },
    }));
  };

  const textChangeHandler = (event) => {
    const newFormData = { ...blogDetail };
    newFormData[event.target.id] = event.target.value;
    setBlogDetail(newFormData);
  };


  const collectFormData = () => {
    const formData = {
      title: blogDetail.title,
      description: blogDetail.description,
      selectedCategories,
      blogPhoto: blogImages.blogPhoto.upload,
      coverPhoto: blogImages.coverPhoto.upload,
    };
    console.log(formData);
  };



  const submitHandler = async (event) => {
    event.preventDefault();
    let url, payload, method;
    const formData = new FormData();
  
    const config = {
      headers: {
        Authorization: `Bearer ${props.AuthData.token.access}`,
      },
    };
  
    if (props.initialData) {
      method = "put";
      url = `https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/update/`;
      payload = {
        title: blogDetail.title,
        description: blogDetail.description,
        banner: blogImages.blogPhoto.upload,
        blogPic: blogImages.coverPhoto.upload,
      };
      config.params = { blog_id: props.initialData.id };
    } else {
      method = "post";
      url = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/createblog/';
      payload = {
        title: blogDetail.title,
        description: blogDetail.description,
        banner: blogImages.blogPhoto.upload,
        blogPic: blogImages.coverPhoto.upload,
      };
    }
  
    // Append data to the FormData object
    formData.append("title", payload.title);
    formData.append("description", payload.description);
    formData.append("owner", props.AuthData.user.id);
    const categoryNames = selectedCategories.map((category) => category.name);
    console.log("Category Names:", categoryNames);
    
    if (payload.banner) {
      console.log("BANNER");
      formData.append("banner", payload.banner);
    }
    if (payload.blogPic) {
      console.log("PIC");
      formData.append("blog_pic", payload.blogPic);
    }
    formData.append("category_names", categoryNames.join(", "));;
    



  
    // Create an object with the form data
    const formDataObject = {};
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  console.log("Form Data Object:", formDataObject);

  axios[method](url, formData, config)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    collectFormData();
  };
  const handleCheckboxChange = (selectedOptions) => {
    setSelectedCategories(selectedOptions);
  };
  return (
    <div className="flex items-center justify-center   ">
      
      <form className="w-full max-w-3xl border border-gray-300 rounded-lg p-10 bg-primary-500 ">
      <div className="text-center mb-6">
      <label className="text-4xl font-medium leading-5 text-indigo-900">
        Creating Blog
      </label>
    </div>
        <div className="mb-6">
          <label htmlFor="title" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
            Blog Name :
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              type="text"
              id="title"
              onChange={textChangeHandler}
              className="block w-full pl-16 pr-12 border-gray-300 rounded-md py-2 text-gray-900 placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              placeholder="Enter a blog title"
            />
          </div>
        </div>
        <div className="mb-6">
          <div className="mb-6">
            <label htmlFor="description" className="block text-2xl font-medium leading-5 text-primary-100 py-2">
              Blog Description:
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <textarea
                placeholder="Your description."
                name="description"
                id="description"
                rows="3"
                onChange={textChangeHandler}
                className="block w-full rounded-md border-gray-300 py-2 px-3 text-gray-900 placeholder-gray-400 focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
              ></textarea>
            </div>
          </div>
          <div className="mb-6">
            <Checkbox
  selectedOptions={selectedCategories}
  categories={props.categories.map((object)=>{return object.category_name})}
  onOptionChange={handleCheckboxChange}
            />
          </div>
          <div className="mb-6 flex justify-between items-center"></div>
          <div className="flex items-center space-x-56">
            <div className="relative text-center w-full mb-4">
              <label
                htmlFor="blog-photo-upload"
                className="cursor-pointer font-semibold text-indigo-900 text-lg bg-transparent hover:text-indigo-500"
              >
                {blogImages.blogPhoto.display ? "Blog Photo" : "Upload Blog Photo"}
                <input
                  id="blog-photo-upload"
                  name="photos[]"
                  type="file"
                  multiple
                  className="sr-only"
                  accept="image/*"
                  onChange={blogPhotoChangeHandler}
                />
              </label>
              {blogImages.blogPhoto.display && (
                <div className="relative mt-2">
                  <label
                    htmlFor="blog-photo-upload"
                    className="cursor-pointer text-xs leading-5 text-black-900 opacity-25 absolute top-0 left-0 w-full h-full rounded-md bg-gray-800 hover:opacity-70 hover:text-white flex items-center justify-center"
                  >
                    Click to Change
                  </label>
                  <img
                    src={`http://res.cloudinary.com/dhaem8m4p/${blogImages.blogPhoto.display}`}
                    alt="Blog Photo"
                    className="w-full h-full rounded-md border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={() => imageDiscardHandler("blogPhoto")}
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
              )}
              <p className="text-xs leading-5 text-gray-600 mt-2">
                PNG, JPG, GIF up to 10MB (multiple photos NOT allowed).
              </p>
            </div>
            <div className="relative text-center w-full mb-4">
              <label
                htmlFor="cover-photo-upload"
                className="cursor-pointer font-semibold text-indigo-900 text-lg bg-transparent hover:text-indigo-500"
              >
                {blogImages.coverPhoto.display ? "Cover Photo" : "Upload Cover Photo"}
                <input
                  id="cover-photo-upload"
                  name="photos[]"
                  type="file"
                  multiple
                  className="sr-only"
                  accept="image/*"
                  onChange={coverPhotoChangeHandler}
                />
              </label>
              {blogImages.coverPhoto.display && (
                <div className="relative mt-2">
                  <label
                    htmlFor="cover-photo-upload"
                    className="cursor-pointer text-xs leading-5 text-black-900 opacity-25 absolute top-0 left-0 w-full h-full rounded-md bg-gray-800 hover:opacity-70 hover:text-white flex items-center justify-center"
                  >
                    Click to Change
                  </label>
                  <img
                    src={`http://res.cloudinary.com/dhaem8m4p/${blogImages.coverPhoto.display}`}
                    alt="Cover Photo"
                    className="w-full h-full rounded-md border border-gray-300"
                  />
                  <button
                    type="button"
                    onClick={() => imageDiscardHandler("coverPhoto")}
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
              )}
              <p className="text-xs leading-5 text-gray-600 mt-2">
                PNG, JPG, GIF up to 10MB (multiple photos NOT allowed).
              </p>
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
};

export default BlogForm;
