import BlogList from "@/components/blog_list/blog_list"
// import Blog from "@/components/blog_list/blog/blog"
// import Comment from "@/components/comment_list/comment/comment"
// import CommentList from "@/components/comment_list/comment_list"
// import { blog_data } from "@/data_samples/blog_list"
// import { comment_data } from "@/data_samples/comment_list"
import CreatePostModal from "@/components/create_post/modal"
import BlogDetailPage from "@/components/BlogDetailPage/BlogDetailPage";
import CreateBlogModal from '@/components/create_blog/modal'
import React, { useState } from 'react';
import Photo from '../components/image_slider/image';
import AccountSettingsForm from "@/components/setting/setting";


export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };

  const photoUrls = [
    "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    "https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=",
    "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    
];
  return (
    <main>
      <Photo photos={photoUrls} />
      {/* <CreateBlogModal/>
      <CreatePostModal/>
      <BlogList onBlogClick={handleBlogClick} />
      {selectedBlog && <BlogDetailPage blog={selectedBlog} />} */}
      <AccountSettingsForm/>
    </main>
  )

}







