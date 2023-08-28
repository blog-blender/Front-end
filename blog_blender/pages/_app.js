import '@/styles/globals.css'
import { useState } from "react";
import AppContext from '@/components/AppContext';

export default function App({ Component, pageProps }) {
  const [appData, setAppData] = useState({});
  return (
    <AppContext.Provider value={{appData,setAppData}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
