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

export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };
  return (
    <main>
      <div className="z-10 sticky self-start top-0 bg-gray-700 bg-opacity-100">
        <Link href="./profile/">profile</Link>
        <Link href="./blog/">blog</Link>
        <Link href="./">Home</Link>
        <h1>Home</h1>
      </div>
      <div className={Styles.mainContent}>
      <BlogList className="w-1/4 overflow-auto overscroll-contain h-full sticky left-0 top-56 " onClick={handleBlogClick} />
      {selectedBlog && <BlogDetailPage blog={selectedBlog} />}
      <PostList className="w-3/4"  posts={post_data} user={{id:1}}/>
      </div>

    </main>
  )

}







