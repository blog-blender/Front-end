import Link from 'next/link'
import Example from '@/components/test'
import CreateBlogForm from '@/components/create_blog/create_blog'
// import AuthContext from '@/components/AuthContext'

import { useContext } from 'react'


export default function Home() {
  // const appContext = useContext(AuthContext)
  console.log();

  return (
    <main>
      <Link href="./profile/">profile</Link>
      <Link href="./blog/">blog</Link>
      <Link href="./">Home</Link>
      <Example/>
      <CreateBlogForm/>
    </main>
  )
}
