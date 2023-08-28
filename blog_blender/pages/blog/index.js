import BlogList from "@/components/blog_list/blog_list"
import Blog from "@/components/blog_list/blog/blog"
import Comment from "@/components/comment_list/comment/comment"
import CommentList from "@/components/comment_list/comment_list"
import PostList from "@/components/post_list/post_list"
import Link from 'next/link'

import { blog_data } from "@/data_samples/blog_list"
import { comment_data } from "@/data_samples/comment_list"
import { post_data } from "@/data_samples/post_list"

export default function Home() {
  return (
    <main>
      <Link href="./profile/">profile</Link>
      <Link href="./blog/">blog</Link>
      <Link href="./">Home</Link>
      <h1>Blog</h1>
    </main>
  )
}
