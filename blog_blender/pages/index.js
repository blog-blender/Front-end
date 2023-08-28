import BlogList from "@/components/blog_list/blog_list"
import Blog from "@/components/blog_list/blog/blog"
import Comment from "@/components/comment_list/comment/comment"
import CommentList from "@/components/comment_list/comment_list"
import { blog_data } from "@/data_samples/blog_list"
import { comment_data } from "@/data_samples/comment_list"
import BlogModal from "@/components/create_post/modal"
import BlogDetailPage from "@/components/BlogDetailPage/BlogDetailPage";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateBlogModal from '@/components/create_blog/modal'
import React, { useState } from 'react';
export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };
  return (
    <main>
      <CreateBlogModal/>
      <BlogModal/>
      <BlogList onBlogClick={handleBlogClick} />
      {selectedBlog && <BlogDetailPage blog={selectedBlog} />}

    </main>
  )

}







