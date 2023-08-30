import Link from 'next/link'
import Example from '@/components/test'
import CreateBlogForm from '@/components/create_blog/create_blog'

export default function Home() {
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
