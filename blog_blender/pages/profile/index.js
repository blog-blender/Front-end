import BlogList from "@/components/blog_list/blog_list"
import Blog from "@/components/blog_list/blog/blog"
import Comment from "@/components/comment_list/comment/comment"
import CommentList from "@/components/comment_list/comment_list"
import PostList from "@/components/post_list/post_list"
import Link from 'next/link'
import { blog_data } from "@/data_samples/blog_list"
import { comment_data } from "@/data_samples/comment_list"
import { post_data } from "@/data_samples/post_list"
import { user_data } from "@/data_samples/user_data"
import { useState } from "react";
import Profile_info from './Profile_info'; // Assuming both files are in the same directory

import Post from "@/pages/profile/Post"

import styles from './profile.module.css'

export default function Profile() {
  let data = user_data[0]
  const [viewState, setViewState] = useState("recent posts");
  function changeViewState(event){
    setViewState(event.target.value)
  }
  return (
    <div>
     
    <main>
      {/* <Link href="./profile/">profile </Link>
      <Link href="./blog/">blog </Link>
      <Link href="./">Home </Link> */}
      
      <div>
        <Profile_info/>
        {/* <Content/> */}
        {/* <img className={styles.banner} src={data.banner}/> */}
        

{/*         
        <div className={styles.profile_nav}>
          <button onClick={changeViewState} value="my blogs">My Blogs</button>
          <button onClick={changeViewState} value="recent posts">recent posts</button>
          <button onClick={changeViewState} value="settings">Settings</button>
        </div> */}

        {/* <div>
          {viewState == "recent posts" ?<p>recent</p>:viewState == "settings"? <p>settings</p>:<p>my blogs</p>}
        </div> */}
      </div>

    </main>
    </div>
  )
  

    };