import '@/styles/globals.css'
import { useState } from "react";
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import { AuthProvider } from '@/components/AuthContext'

import { user_data } from '@/data_samples/user_data';

export default function App({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Header className="sticky top-0 bg-#e5e7eb-600 z-30"/>
      <Component {...pageProps} />
      <Footer className="bg-#e5e7eb-600 z-30 bg-gray-100 h-1/4 sm:py-12"/>
    </AuthProvider>
  )
}
