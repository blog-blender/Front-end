import BlogList from "@/components/blog_list/blog_list"
// import Blog from "@/components/blog_list/blog/blog"
// import Comment from "@/components/comment_list/comment/comment"
// import CommentList from "@/components/comment_list/comment_list"
import { blog_data } from "@/data_samples/blog_list"
// import { comment_data } from "@/data_samples/comment_list"
import CreatePostModal from "@/components/create_post/modal"
import BlogDetailPage from "@/components/BlogDetailPage/BlogDetailPage";
import CreateBlogModal from '@/components/create_blog/modal'
import React, { useState ,useEffect} from 'react';
import Photo from '../components/image_slider/image';
import AccountSettingsForm from "@/components/setting/setting";
import EditPostForm from "@/components/edit_post/edit_post";
import PostList from "@/components/edit_post/PostList";
import RejesterPage from '@/components/register/regester'
import LoginPage from "@/components/register/login";



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
const [posts, setPosts] = useState([]);

  useEffect(() => {
   
    const placeholderPosts = [
      { id: 1, name: 'Post 1', description: 'Description 1' },
      { id: 2, name: 'Post 2', description: 'Description 2' },
      { id: 3, name: 'Post 3', description: 'Description 3' },
    ];
    setPosts(placeholderPosts);
  }, []);
  return (
    <main>
      <LoginPage/>
      {/* <RejesterPage/> */}
      {/* <BlogList className="w-1/4 overflow-auto overscroll-contain h-full  left-0 top-16" onClick={handleBlogClick} data={blog_data}/>
      {selectedBlog && <BlogDetailPage blog={selectedBlog} />}
      <CreateBlogModal/>
      <CreatePostModal/>
      <PostList posts={posts} />
      <Photo photos={photoUrls} />
      <AccountSettingsForm/> */}
    </main>
  )
}







