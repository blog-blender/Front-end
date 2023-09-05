import Link from 'next/link'
import { useState, useContext } from "react";
import { user_data } from '@/data_samples/user_data';
import PostForm from '@/components/create_post/create_post';
import BlogForm from '@/components/create_blog/create_blog';
import CreatePostModal from '@/components/create_post/modal';

export default function Post() {

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
      <CreatePostModal/>
      {/* <PostForm/> */}
      {/* <BlogForm/> */}
    </main>
  )
}
