import BlogList from "@/components/blog_list/blog_list"
import PostList from "@/components/post_list/post_list"
import Link from 'next/link'

import { blog_data } from "@/data_samples/blog_list"
import { post_data } from "@/data_samples/post_list"
import { user_data } from "@/data_samples/user_data"

import { useState, useContext } from "react";

import BlogDetailPage from "@/components/BlogDetailPage/BlogDetailPage";


export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };
  return (
    <main>
      <div className="flex sticky top-0 self-start">
      <BlogList className="w-1/4 overflow-auto overscroll-contain h-full sticky left-0 top-16" onClick={handleBlogClick} data={blog_data}/>
      {selectedBlog && <BlogDetailPage blog={selectedBlog} />}
      <PostList className="w-3/4"  posts={post_data} user={user_data[0]}/>
      </div>
    </main>
  )

}







