import React from 'react'
import NavBar from '../nav_bar/nav_bar'
import Footer from '../footer/footer'

export default function AuthorizedRoute({ Component, pageProps }) {
    // console.log("private");
  return (
    <>
    <NavBar/>
        <Component {...pageProps}/>
    <Footer/>
    </>    
  )
}
