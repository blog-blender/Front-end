import React from 'react'
import LoginPage from '../register/login'
import RejesterPage from '../register/regester'
import { useState } from 'react'
export default function PublicRoute({ Component, pageProps }) {
  const [viewState, setViewState] = useState("login");
  return (
    <>
        {viewState == "login"?<LoginPage setViewState={setViewState}/>
        :<RejesterPage setViewState={setViewState}/>}
        {/* <Component {...pageProps}/> */}
    </>    
  )
}
