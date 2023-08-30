import LoginPage from '@/components/register/login'
import Link from 'next/link'



export default function Profile() {
  
  return (
    <main>
      <Link href="./profile/">profile </Link>
      <Link href="./blog/">blog </Link>
      <Link href="./">Home </Link>
      <LoginPage/>
    </main>
  )
}