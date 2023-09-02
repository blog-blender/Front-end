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

import styles from './profile.module.css'

export default function Profile() {
  let data = user_data[0]
  const [viewState, setViewState] = useState("recent posts");
  function changeViewState(event){
    setViewState(event.target.value)
  }
  return (
    <main>
      <Link href="./profile/">profile </Link>
      <Link href="./blog/">blog </Link>
      <Link href="./">Home </Link>
      
      <div>
        <img className={styles.banner} src={data.banner}/>
        <div className={styles.user_info}>
            <img className={styles.user_photo} src={data.user_photo}/>
            <div>
              <h1 className="text-4xl font-bold">{data.first_name + " " + data.last_name}</h1>
              <h3 className="font-thin">{data.user_name}</h3>
            </div>
        </div>
        
        <div className={styles.profile_nav}>
          <button onClick={changeViewState} value="my blogs">My Blogs</button>
          <button onClick={changeViewState} value="recent posts">recent posts</button>
          <button onClick={changeViewState} value="settings">Settings</button>
        </div>

        <div>
          {viewState == "recent posts" ?<p>recent</p>:viewState == "settings"? <p>settings</p>:<p>my blogs</p>}
        </div>
      </div>

    </main>
  )
}
