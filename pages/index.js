import Link from 'next/link'
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import { AuthContext } from '@/components/AuthContext';

import Styles from "./home.module.css"

import BlogList from "@/components/blog_list/blog_list"
import PostList from "@/components/post_list/post_list"
import Carousel from "@/components/homeslider/home_image"
import FriendList from "@/components/friend/friend_list"
import Image from "next/image";


import style from '@/components/blog_list/homeeman.module.css'
import SearchBar from '@/components/search_bar/search_bar';



export default function Home() {
  // let baseUrl = 
  let AuthData = useContext(AuthContext);

  const [fetchTrigger, setRefetchTrigger] = useState(false)

  const [postData, setPostData] = useState(null);
  const [blogData, setBlogData] = useState(null);
  const [friendsData, setFriendsData] = useState(null);
  const [searchResult, setsearchResult] = useState(null);
  const [userDatail, setUserDetail] = useState(null);


  const userDeatailUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/accounts/users`
  const userDeatailParams = { username: AuthData.user.username, }

  const postsUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/posts/home/`
  const postsParams = { user_id: AuthData.user.id }

  const blogsUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/blogs/userfollowing/`
  const blogsParams = { user_id: AuthData.user.id }

  const friendsUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/blogs/user_friends/`
  const friendsParams = { user_id: AuthData.user.id }



  async function getData(url, token, setter, params) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: params,
    };
    axios.get(url, config)
      .then((response) => { console.log(response); setter(response) })
      .catch((error) => { console.log(error, "error"); setter(error) })
  }

  let fetchData = async () => {
    await AuthData.keepConnectionValid(AuthData.token.access, AuthData.token.refresh)
    getData(postsUrl, AuthData.token.access, setPostData, postsParams)
    getData(blogsUrl, AuthData.token.access, setBlogData, blogsParams)
    getData(friendsUrl, AuthData.token.access, setFriendsData, friendsParams)
    getData(userDeatailUrl, AuthData.token.access, setUserDetail, userDeatailParams)
    setRefetchTrigger(false)
  }

  useEffect(() => {
    fetchData()
  }, [])
  // console.log(fetchData, "FETCH STATUS");
  useEffect(() => {
    if (fetchTrigger) {
      fetchData()
      console.log("FETCHING");
    }
  }, [fetchTrigger])

  // console.log(friendsData);
  return (
    <main>
      <div className="h-fit">
        <Carousel />
        <SearchBar/>
      </div>

      <div className={Styles.mainContent}>
      <div className={Styles.blogListContainer}>
        {(blogData && blogData != []) ? <BlogList style={Styles} data={blogData.data.map((object => { return object.blog_id }))} /> : null}
      </div>
        {(postData && userDatail && typeof (postData.data) != "string") ? <PostList className={Styles.postList} data={postData.data} AuthData={AuthData} userData={userDatail.data[0]} setRefetchTrigger={setRefetchTrigger} /> : <p>please follow some blogs to see there posts</p>}
        {/* {(friendsData)?(friendsData.status != 500 ?<FriendList data={friendsData.data}/>:<>no friends</>):<></>} */}
        {/* (friendsData)?(friendsData.response.status != 500 ?<FriendList data={friendsData.data}/>:<></>):<></>*/}
      </div>
    </main>
  )
}