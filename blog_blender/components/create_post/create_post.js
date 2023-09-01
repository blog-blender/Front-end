import { useState, useContext } from 'react';
import { blog_data } from '@/data_samples/blog_list';
import { post_data } from '@/data_samples/post_list';
import axios from 'axios';
import { AuthContext } from '../AuthContext';


export default function CreatePostForm({ onSave, onClose }) {
  const [blogImages, setPostImages] = useState({
    upload: [],
    display: [],
  });

  const [initialData, setInitialData] = useState(
    {
      title:"old title",
      content:"old content",
      blogImages:"",
    });

  const {token, user, login} = useContext(AuthContext);

  const handlePostImageChange = (event) => {
    const uploadedImage = event.target.files[0];
    const imageUrl = URL.createObjectURL(uploadedImage);
    setPostImages({
      upload: [
        ...blogImages.upload,
        uploadedImage
      ],
      display: [
        ...blogImages.display,
        imageUrl
      ],
    });

  };

  const imageDiscardHandler = (event) =>{
      const deletedImageIndex = event.target.id
      const newDisplayImages = blogImages.display.filter(
        (item, index)=>index != deletedImageIndex
        )
        const newUploadImages =  blogImages.display.filter(
        (item, index)=>index != deletedImageIndex
        )

      setPostImages({
        upload: newUploadImages,
        display: newDisplayImages,
      })
  }

  const handlePostTextChange = (event) => {
    const newFormData = {...initialData}
    newFormData[event.target.id] = event.target.value
    setInitialData(newFormData)
  };
  
  const handleSubmit = async (event)=>{
    event.preventDefault();
    const formData = new FormData();
    const payload ={
      title: "Sample Post Title",
      Auther_id: 1, 
      content: "This// Replace with a valid user ID is the content of the sample post.",
      blog_id: 1,
      photos: blogImages.upload,
      }
    formData.append("title", payload.title);
    formData.append("Auther_id", payload.Auther_id);
    formData.append("content", payload.content);
    formData.append("blog_id", payload.blog_id);
    // formData.append("photo_data", ...payload.photos);
    for (const image of payload.photos) {
      formData.append("photo_data", image);
    }
    const config = {
      headers: {
        Authorization : `Bearer ${token.access}`,
      },
  };
    // const url='http://127.0.0.1:8000/api/v1/posts/create/'
    const url='http://127.0.0.1:8000/api/v1/posts/test/'
    const data=await axios.post(url ,formData,config)
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
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
            <label htmlFor="title">Post Title:</label>
            <input
              type="text"
              id="title"
              name='title'
              value={initialData.title}
              onChange={handlePostTextChange}
              className="border rounded-lg p-2 w-full"
            />

          </div>
          <div className="mb-4">
            <label htmlFor="content">Post Content:</label>
            <textarea
              id="content"
              onChange={handlePostTextChange}
              className="border rounded-lg p-2 w-full h-20 overflow-y-auto"
            >{initialData.content}</textarea>
          </div>
          

          <div className="mb-4 overflow-scroll h-60">
            <label htmlFor="blogImage">Post Images:</label>
            <input
              type="file"
              id="blogImage"
              accept="image/*"
              onChange={handlePostImageChange}
              className="border rounded-lg p-2 w-full"
            />
            {
              blogImages.display.map((url,index) => 
                <div>
                  <span id={index} onClick={imageDiscardHandler}>X</span>
              <img src={url} />
              </div>
              )
            }
          </div>
          <div className="flex justify-between">
            <button
              type="button"
              className="bg-blue-500 text-white rounded-lg px-4 py-2"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

