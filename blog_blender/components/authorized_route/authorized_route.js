import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'

export default function AuthorizedRoute({ Component, pageProps }) {
    console.log("private");
  return (
    <>
    <Header className="sticky top-0 bg-#e5e7eb-600 z-30"/>
        <Component {...pageProps}/>
    <Footer className="bg-#e5e7eb-600 z-30 bg-gray-100 h-1/4 sm:py-12"/>
    </>    
  )
}
