import LoginPage from '../register/login'
import RejesterPage from '../register/regester'
import React from 'react';
import { useState, useContext } from "react";
import { AuthContext } from "../AuthContext";

export default function PublicRoute({ Component, pageProps }) {
  const [viewState, setViewState] = useState("login");
  let AuthData = useContext(AuthContext)
  return (
    <>
        {viewState == "login"?<LoginPage setViewState={setViewState} AuthData={AuthData}/>
        :<RejesterPage setViewState={setViewState} AuthData={AuthData}/>}
        {/* <Component {...pageProps}/> */}
    </>    
  )
}
