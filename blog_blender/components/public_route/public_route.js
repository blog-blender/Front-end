import React from 'react'
import LoginPage from '../register/login'
import RejesterPage from '../register/regester'
export default function PublicRoute({ Component, pageProps }) {
  console.log("public");
  return (
    <>
        <LoginPage/>
        {/* <Component {...pageProps}/> */}
    </>    
  )
}
