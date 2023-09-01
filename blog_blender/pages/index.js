import BlogList from "@/components/blog_list/blog_list"
import PostList from "@/components/post_list/post_list"
import Link from 'next/link'

import { blog_data } from "@/data_samples/blog_list"
import { post_data } from "@/data_samples/post_list"
import { user_data } from "@/data_samples/user_data"
import axios from "axios";
import { useState, useContext, useEffect } from "react";
import {AuthContext} from '@/components/AuthContext';

export default function Home() {
  let AuthData = useContext(AuthContext)

  const [data, setData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [blogData, setBlogData] = useState(null);

  const postsUrl = 'http://127.0.0.1:8000/api/v1/posts/details/?post_id=6'
  const blogsUrl = 'http://127.0.0.1:8000/api/v1/posts/?blog_id=1'

  async function getData(url, token, setter, params){
    const config = {headers: {
      Authorization : `Bearer ${token}`,
      params : params},};
    let result
    axios.get(url ,config)
    .then((response)=>{console.log(response);setter(response)})
    .catch((error)=>{setter(error)})
    setter(result)
  }

  useEffect(() => {
    if (AuthData.token){
      getData(postsUrl,AuthData.token.access,setPostData)
      getData(blogsUrl,AuthData.token.access,setBlogData)
    }
  },[data])

  return (
    <main>
      <div className="flex sticky top-0 self-start">
      <BlogList className="w-1/4 overflow-auto overscroll-contain h-full sticky left-0 top-16"  data={blog_data}/>
      <PostList className="w-3/4"  posts={postData?[postData.data]:post_data} user={user_data[0]}/>
      </div>
    </main>
  )

}







