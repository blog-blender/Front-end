import CommentList from "@/components/comment_list/comment_list"
import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import LoginPage from "@/components/loginpage/login"
import RejesterPage from "@/components/loginpage/regester"
import Send from "@/components/postt/send"

export default function Home() {
  return (
    <main>
    <div style={{display:'grid', gap:'20px'}}>      
      <Header />
      <Send/>
      <Footer />
      {/* <LoginPage/>     
      <RejesterPage /> */}
      </div>
    </main>
  )
}
