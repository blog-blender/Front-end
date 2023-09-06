import Link from 'next/link'
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import {AuthContext} from '@/components/AuthContext';

import Styles from "./home.module.css"

import BlogList from "@/components/blog_list/blog_list"
import PostList from "@/components/post_list/post_list"
import Carousel from "@/components/homeslider/home_image"
import FriendList from "@/components/friend/friend_list"
import Image from "next/image";



export default function Home() {
  let AuthData = useContext(AuthContext);

  const [postData, setPostData] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [friendsData, setFriendsData] = useState(null);
  const [searchResult, setsearchResult] = useState(null);
  const [userDatail, setUserDetail] = useState(null);
  

  const userDeatailUrl = 'http://127.0.0.1:8000/api/v1/accounts/users'
  const userDeatailParams = { username: AuthData.user.username,}

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
      getData(userDeatailUrl, AuthData.token.access, setUserDetail, userDeatailParams)
    }
  },[])

if (blogData){console.log("HOME BLOG DATA",blogData)}

  return (
    <main>
      <div className="overlay-container">
      <Carousel /> 
      <div className={Styles.home}>
      
      <input className={Styles.input1} />
      <Image  className={Styles.glass} alt="glass" src="/glass.svg" width={6} height={6}/>
    </div> 
    </div>
      
      <div className={Styles.mainContent}>
        {blogData?<BlogList data={blogData.data.map((object=>{return object.blog_id}))}/>:<p>no blogs</p>}

        {(postData && userDatail)?<PostList className={Styles.postList} data={postData.data} AuthData={AuthData} userData={userDatail.data[0]}/>:<p>posts no valid</p>}
        {friendsData?<FriendList data={friendsData.data}/>:<>no friends</>}
      </div>
    </main>
  )
}