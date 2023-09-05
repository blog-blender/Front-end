import { useState } from "react";
import React from "react";
import axios from "axios";

export default function CommentForm(props) {
  let [commentContent, setCommentContent] = useState(props.initialData?props.initialData.content:"") 

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
      
      <section class="w-full flex px-2 py-2">
        <div>
          <img class="rounded-full" src="https://pbs.twimg.com/profile_images/1366772608373387269/K6En5xnu_normal.jpg" alt="Profile Picture" />
        </div>
        <div class="flex-1">
          <textarea class="w-full h-10 bg-white pl-3 outline-none placeholder-gray-600 text-black resize-none overflow-auto max-h-screen" onChange={update} rows="4" placeholder="What's happening?">{commentContent}</textarea>
          <div  class="flex justify-end flex items-center   border-blue">
            <div style={{display:'flex', justifyContent:'flex-end'}}> 
              <button style={{display:'flex',justifyContent:'flex-end',backgroundColor:'#0D9488'}} onClick={submitHandler} class="transition duration-500 ease-in-out bg-blue-500 bg-opacity-100  text-white text-opacity-100  py-2 px-3 rounded-2xl text-base font-bold focus:outline-none" >Send</button>
            </div>
          </div>
        </div>
      </section>
    </div>
    )
	

}