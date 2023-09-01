import Link from 'next/link'
import { useState, useContext } from "react";
import { user_data } from '@/data_samples/user_data';
import CreatePostForm from '@/components/create_post/create_post';
import CreateBlogForm from '@/components/create_blog/create_blog';

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
      <CreatePostForm/>
    </main>
  )
}
