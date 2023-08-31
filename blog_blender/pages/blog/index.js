import Link from 'next/link'
import Example from '@/components/test'
import CreateBlogForm from '@/components/create_blog/create_blog'
import AuthContext from '@/components/AuthContext';
import { useContext } from "react";

export default function Home() {
  let AuthData = useContext(AuthContext)
  const userState= AuthData.state

  console.log();

  return (
    <main>
      <Link href="./profile/">profile</Link>
      <Link href="./blog/">blog</Link>
      <Link href="./">Home</Link>
      <Example/>
      <CreateBlogForm userState={userState}/>
    </main>
  )
}
