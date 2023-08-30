import Link from 'next/link'
import Example from '@/components/test'

export default function Home() {
  return (
    <main>
      <Link href="./profile/">profile</Link>
      <Link href="./blog/">blog</Link>
      <Link href="./">Home</Link>
      <Example/>
    </main>
  )
}
