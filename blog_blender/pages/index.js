import BlogList from "@/components/blog_list/blog_list"
import PostList from "@/components/post_list/post_list"
import Link from 'next/link'
import { blog_data } from "@/data_samples/blog_list";
import { post_data } from "@/data_samples/post_list";
import { comment_data } from "@/data_samples/comment_list";
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import {AuthContext} from '@/components/AuthContext';

import BlogDetailPage from "@/components/BlogDetailPage/BlogDetailPage";

import Styles from "./home.module.css"
import Carousel from "@/components/homeslider/home_image"
import FriendList from "@/components/friend/friend_list"
import Image from "next/image";



export default function Home() {
  let AuthData = useContext(AuthContext);

  const [postData, setPostData] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [friendsData, setFriendsData] = useState(null);
  const [searchResult, setsearchResult] = useState(null);

  const postsUrl = `http://127.0.0.1:8000/api/v1/posts/home/`
  const postsParams = {user_id:3,num_of_posts:10}
  const blogsUrl = 'http://127.0.0.1:8000/api/v1/blogs/userfollowing/'
  const blogsParams = {user_id:3}
  const friendsUrl = "http://127.0.0.1:8000/api/v1/blogs/user_friends/"
  const friendsParams = {user_id:1}
  const searchResultUrl = "http://127.0.0.1:8000/api/v1/blogs/search/"
  const searchResultParams = {blog_title:"Tech"}

  async function getData(url, token, setter, params){
    const config = {headers: {
      Authorization : `Bearer ${token}`},
      params : params,};
    axios.get(url ,config)
    .then((response)=>{console.log(response);setter(response)})
    .catch((error)=>{setter(error)})
  }
  
  useEffect(() => {
    if (AuthData.token){
      getData(postsUrl,AuthData.token.access,setPostData,postsParams)
      getData(blogsUrl,AuthData.token.access,setBlogData,blogsParams)
      getData(friendsUrl,AuthData.token.access,setFriendsData,friendsParams)
      getData(searchResultUrl,AuthData.token.access,setsearchResult,searchResultParams)
    }
  },[])

// if (postData){console.log(11111111111111,postData)}

  return (
    <main>
      
      
      
      <div className="overlay-container">
      <Carousel /> 
      <div className={Styles.home}>
      
      <input className={Styles.input1} />
      <Image  className={Styles.glass} alt="glass" src="/glass.svg" width={6} height={6}/>
    </div> 
    </div>
      
      
      
      {/* <form>
  <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
    Search
  </label>
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
    </div>
    <input
      type="search"
      id="default-search"
      className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="Search Mockups, Logos..."
      required
    />
  </div>
</form> */}

      {/* <Carousel /> */}
      <div className={Styles.mainContent}>
      <BlogList onClick={()=>{}} data={blog_data}/>
      {/* {selectedBlog && <BlogDetailPage blog={selectedBlog} />} */}

        {postData?<PostList className={Styles.postList} user={{ id: 1 }} posts={postData.data} AuthData={AuthData}/>:<p>posts no valid</p>}
        <FriendList />
      </div>
    </main>
  )
}







