import '@/styles/globals.css'
import { Routes } from '@/components/route';
import { AuthProvider } from '@/components/AuthContext'
import React from 'react'




export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Routes Component={Component} pageProps={pageProps}/>
    </AuthProvider>
  )
}