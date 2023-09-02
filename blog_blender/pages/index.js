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
export default function Home() {
  const [selectedBlog, setSelectedBlog] = useState(null);

  const handleBlogClick = (blog) => {
    setSelectedBlog(blog);
  };
  return (
    
    <main>
        <Image 
          src="/images/img1.png" 
          alt="Header Image"
          className="img"
          width={1000}
          height={100} 
        />
      <section class={Styles.boxes}>
          <div class={Styles.box}>
          <Image src="/images/img2.jpg" alt="Box 2" width={400} height={400}/>
          
          </div>
          <div class={Styles.box}>
          <Image src="/images/img3.jpg" alt="Box 2" width={400} height={400}/>
          </div>
          <div class={Styles.box}>
          <Image src="/images/img4.jpg" alt="Box 3" width={400} height={400}/>
          </div>
          <div class={Styles.box}>
          <Image src="/images/img5.jpg" alt="Box 4" width={400} height={400}/>
          </div>
      </section>

        <div className={Styles.mainContent}>
      <BlogList className={Styles.customsticky} onClick={handleBlogClick} />
      {selectedBlog && <BlogDetailPage blog={selectedBlog} />}
      
      <PostList className={Styles.postList}  posts={post_data} user={{id:1}}/>
      
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







