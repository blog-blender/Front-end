import { useState, useContext } from 'react';
import { blog_data } from '@/data_samples/blog_list';
import { post_data } from '@/data_samples/post_list';
import axios from 'axios';
import { AuthContext } from '../AuthContext';

export default function CreatePostForm({ onSave, closeHandeler, initialData }) {
  let mock_data= {
    id: 5,
    Auther_id: {
      username: "eman",
      profile_pic: null
    },
    title: "new",
    content: "test",
    blog_id: 1,
    comments: [
      {
        user_id: {
          username: "firas",
          profile_pic: null
        },
        content: "gtgtgt",
        id: 8
      }
    ],
    photo: [
      {
        id: 1,
        data: "http://127.0.0.1:8000/media/post_picture/robin-4k-beautiful-background-wallpaper-preview.jpg",
        post_id: 5
      }
    ],
    likes: []
  }
  initialData = mock_data
  const [postImages, setPostImages] = useState({
    upload: [],
    display: initialData?initialData.photo.map((object)=> object.data):[],
  });

  const [postData, setInitialData] = useState(initialData?initialData:{});
  console.log(postImages,3333333333333);
  const {token, user, login} = useContext(AuthContext);

  const imageChangeHandler = (event) => {
    const uploadedImage = event.target.files[0];
    if(!uploadedImage)
    return
    const imageUrl = URL.createObjectURL(uploadedImage);
    setPostImages({
      upload: [
        ...postImages.upload,
        uploadedImage
      ],
      display: [
        ...postImages.display,
        imageUrl
      ],
    });

  };

  const imageDiscardHandler = (event) =>{
      const deletedImageIndex = event.target.id
      const newDisplayImages = postImages.display.filter(
        (item, index)=>index != deletedImageIndex
        )
        const newUploadImages =  postImages.display.filter(
        (item, index)=>index != deletedImageIndex
        )

      setPostImages({
        upload: newUploadImages,
        display: newDisplayImages,
      })
  }

  const textChangeHandler = (event) => {
    const newFormData = {...postData}
    newFormData[event.target.id] = event.target.value
    setInitialData(newFormData)
  };
  
  const submitHandler = async (event)=>{
    event.preventDefault();
    const formData = new FormData();
    const payload ={
      title: postData.title,
      Auther_id: user.id, 
      content: postData.content,
      post_id: 1,
      photos: postImages.upload.length>0?initialData.photos:postImages.upload,
      }
    formData.append("title", payload.title);
    formData.append("Auther_id", payload.Auther_id);
    formData.append("content", payload.content);
    for (const image of payload.photos) {
      formData.append("photos", image);
    }
    const params = {
      post_id:postData.id
    }
    
    const config = {
      headers: {
        Authorization : `Bearer ${token.access}`,
      },
      params: params,
  };
  
    const createUrl = 'http://127.0.0.1:8000/api/v1/posts/create/'
    const updateUrl = `http://127.0.0.1:8000/api/v1/posts/update/`
    const resultUrl = initialData?updateUrl:createUrl
    const method = initialData?"put":"post"
    const data=await axios[method](resultUrl ,formData,config)
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-3/4">
        <div className="flex justify-end mb-2">
          <button
            className="bg-blue-500 text-white rounded-lg px-4 py-2 mr-2"
            onClick={closeHandeler}
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
              value={postData.title}
              onChange={textChangeHandler}
              className="border rounded-lg p-2 w-full"
            />

          </div>
          <div className="mb-4">
            <label htmlFor="content">Post Content:</label>
            <textarea
              id="content"
              onChange={textChangeHandler}
              className="border rounded-lg p-2 w-full h-20 overflow-y-auto"
            >{postData.content}</textarea>
          </div>
          

          <div className="mb-4 overflow-scroll h-60">
            <label htmlFor="postImage">Post Images:</label>
            <input
              type="file"
              id="postImage"
              accept="image/*"
              onChange={imageChangeHandler}
              className="border rounded-lg p-2 w-full"
            />
            {
              postImages.display.map((url,index) => 
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
              onClick={submitHandler}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

