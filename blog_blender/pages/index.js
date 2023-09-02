import BlogList from "@/components/blog_list/blog_list"
import PostList from "@/components/post_list/post_list"
import Link from 'next/link'

import { blog_data } from "@/data_samples/blog_list"
import { comment_data } from "@/data_samples/comment_list"
import { post_data } from "@/data_samples/post_list"
import { useState } from "react";


import CreatePostModal from "@/components/create_post/modal"
import BlogDetailPage from "@/components/BlogDetailPage/BlogDetailPage";
import CreateBlogModal from '@/components/create_blog/modal'

import Styles from "./home.module.css"
import CommentList from "@/components/comment_list/comment_list"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Image from 'next/image';
import Carousel from "@/components/homeslider/home_image"
import FriendList from "@/components/friend/friend_list"




export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };
  return (

    <main>

      <Carousel />
      <div className={Styles.mainContent}>
      <BlogList className="w-1/4 overflow-auto overscroll-contain h-full  left-0 top-16" onClick={handleBlogClick} data={blog_data}/>
      {selectedBlog && <BlogDetailPage blog={selectedBlog} />}

        <PostList className={Styles.postList} posts={post_data} user={{ id: 1 }} />
        <FriendList />
      </div>

      <div className={Styles.test}>
        {/* <CommentList/> */}
        {/* <Footer /> */}
        {/* <LoginPage/>      */}
        {/* <RejesterPage /> */}
      </div>
    </main>
  )

}







