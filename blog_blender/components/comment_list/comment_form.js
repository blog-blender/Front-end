import { useState } from "react";
import React from "react";
import axios from "axios";
// "comments": [
//   {
//       "user_id": {
//           "username": "Ibraheem",
//           "profile_pic": "http://127.0.0.1:8000/media/profile_pics/TNGRRLUMA-U04PA8EC6ET-3c0112671aa0-512.jpg"
//       },
//       "content": "Your writing style is so engaging. I felt like I was right there with you!",
//       "id": 11
//   }
// ],
export default function CommentForm(props) {
  let [commentContent, setCommentContent] = useState(props.initialData?props.initialData.content:"") 
  console.log(props.initialData,"COMMMMENT");
  function update(event) {
    event.target.style.height = event.target.scrollHeight + 1 + "px"
    setCommentContent(event.target.value)
    console.log(event.target.value,89898989);
  }

  const submitHandler = async (event)=>{
    event.preventDefault();
    let url,payload,method
    if(props.initialData){
      method = "put"
      url = `http://127.0.0.1:8000/api/v1/posts/comments/update/${props.initialData.id}/`
      payload = {
        content:commentContent,
        post_id:props.postId,
        user_id:props.AuthData.user.id
      }
    }
    else{
      method = "post"

      url = 'http://127.0.0.1:8000/api/v1/posts/comment/create'

      payload = {
        user_id:props.AuthData.user.id,
        post_id:props.postId,
        content:commentContent
      }
    }

    const config = {
      headers: {
        Authorization : `Bearer ${props.AuthData.token.access}`,
      },
    };

    axios[method](url, payload, config)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    

  };

  return (
    <div  class="bg-white rounded-2xl border border-solid border-gray-300 transform -translate-y-5 ">
      
    
    <section class="w-full flex px-3 py-2">
      <div class="mr-1">
        <img className="rounded-full w-8 h-8" src={props.userPic} alt="Profile Picture"/>
      </div>
      <div class="flex-1">
        <textarea class="w-full p-2 bg-transparent outline-none placeholder-gray-600 text-black resize-none overflow-auto max-h-screen" onChange={update} rows="4" placeholder="What's happening?">{commentContent}</textarea>
        <div style={{display:'flex', justifyContent:'flex-end'}} class="flex items-center pt-2 border-t border-blue">
          <div style={{display:'flex', justifyContent:'flex-end'}}> 
            <button style={{display:'flex',justifyContent:'flex-end',backgroundColor:'#0D9488'}} onClick={submitHandler} class="transition duration-500 ease-in-out bg-blue-500 bg-opacity-100  text-white text-opacity-100  py-2 px-3 rounded-2xl text-base font-bold focus:outline-none" >Send</button>
          </div>
        </div>
      </div>  
      </section>
    </div>
    )
	

}