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

import CommentList from "@/components/comment_list/comment_list"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"


export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };
  return (
    <main>
      <div className="flex sticky top-0 self-start">
      <BlogList className="w-1/4 overflow-auto overscroll-contain h-full sticky left-0 top-16 " onClick={handleBlogClick} />
      {selectedBlog && <BlogDetailPage blog={selectedBlog} />}
      <PostList className="w-3/4"  posts={post_data} user={{id:1}}/>
      </div>
    </main>
  )

}







