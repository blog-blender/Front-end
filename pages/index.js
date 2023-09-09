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


import style from '@/components/blog_list/homeeman.module.css'
import { string } from 'i/lib/util';



export default function Home() {
  let AuthData = useContext(AuthContext);

  const [fetchTrigger,setRefetchTrigger] = useState(false)

  const [postData, setPostData] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [friendsData, setFriendsData] = useState(null);
  const [searchResult, setsearchResult] = useState(null);
  const [userDatail, setUserDetail] = useState(null);
  

  const userDeatailUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/accounts/users'
  const userDeatailParams = { username: AuthData.user.username,}

  const postsUrl = `https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/home/`
  const postsParams = {user_id:AuthData.user.id}

  const blogsUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/userfollowing/'
  const blogsParams = {user_id:AuthData.user.id}

  const friendsUrl = "https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/user_friends/"
  const friendsParams = {user_id:AuthData.user.id}

  const searchResultUrl = "https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/search/"
  const searchResultParams = {blog_title:"Tech"}



  async function getData(url, token, setter, params){
    const config = {headers: {
      Authorization : `Bearer ${token}`},
      params : params,};
    axios.get(url ,config)
    .then((response)=>{console.log(response);setter(response)})
    .catch((error)=>{console.log(error,"error");setter(error)})
  }

  let fetchData = ()=>{
    getData(postsUrl,AuthData.token.access,setPostData,postsParams)
    getData(blogsUrl,AuthData.token.access,setBlogData,blogsParams)
    getData(friendsUrl,AuthData.token.access,setFriendsData,friendsParams)
    getData(searchResultUrl,AuthData.token.access,setsearchResult,searchResultParams)
    getData(userDeatailUrl, AuthData.token.access, setUserDetail, userDeatailParams)
    setRefetchTrigger(false)
  }

  useEffect(() => {
    fetchData()
  },[])
  console.log(fetchData,"FETCH STATUS");
  useEffect(() => {
    if (fetchTrigger) {
      fetchData()
    }
  },[fetchTrigger])

if (friendsData){console.log("HOME FREIND DATA",friendsData)}


const [isFilterVisible, setIsFilterVisible] = useState(false);
const toggleFilter = () => {
  setIsFilterVisible(!isFilterVisible);
};
  console.log(friendsData);
  return (
    <main>
      <div className="overlay-container">
      <Carousel /> 
      <div className={Styles.home}>
      
      
      <div>
      <div onClick={toggleFilter}>
      <input className={Styles.CarouselSearch} />
        <Image className={Styles.glass} alt="glass" src="/glass.svg" width={6} height={6} />
      </div>
      {isFilterVisible && (
        <div>
          {/* Display your filter options (checkboxes) here */}
          <label>
            <input type="checkbox" value="option1" /> Option 1
          </label>
          <label>
            <input type="checkbox" value="option2" /> Option 2
          </label>
          {/* Add more checkboxes as needed */}
        </div>
      )}
    </div>
    </div> 
    </div>
      
      <div className={Styles.mainContent}>
        {(blogData && blogData!= [] )?<BlogList style={style} data={blogData.data.map((object=>{return object.blog_id}))}/>:<></>}

        {(postData && userDatail && typeof(postData.data)!= "string")?<PostList className={Styles.postList} data={postData.data} AuthData={AuthData} userData={userDatail.data[0] } setRefetchTrigger={setRefetchTrigger}/>:<p>please follow some blogs to see there posts</p>}
        {/* {(friendsData)?(friendsData.status != 500 ?<FriendList data={friendsData.data}/>:<>no friends</>):<></>} */}
        {/* (friendsData)?(friendsData.response.status != 500 ?<FriendList data={friendsData.data}/>:<></>):<></>*/}
      </div>
    </main>
  )
}