import '@/styles/globals.css'
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import AuthorizedRoute from '@/components/authorized_route/authorized_route';
import PublicRoute from '@/components/public_route/public_route';
import { Routes } from '@/components/route';

import { AuthProvider, useAuth } from '@/components/AuthContext'

import { useContext } from 'react';
import AuthContext from '@/components/AuthContext';
import React from 'react'




export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Routes Component={Component} pageProps={pageProps}/>
    </AuthProvider>
  )
}