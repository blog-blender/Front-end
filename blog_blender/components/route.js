import { useContext } from "react";
import React from "react";
import { AuthContext } from "./AuthContext";
import AuthorizedRoute from '@/components/authorized_route/authorized_route';
import PublicRoute from '@/components/public_route/public_route';

export function Routes({ Component, pageProps }) {
    const value = useContext(AuthContext);
  // console.log('value', value);
    return (
      <>  {(value?.token)?<AuthorizedRoute Component={Component} pageProps={pageProps}/>:<PublicRoute Component={Component} pageProps={pageProps}/>}  
      </>
    )
  }