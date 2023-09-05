

// import 'font-awesome/css/font-awesome.min.css';
// import { AuthContext } from '@/components/AuthContext copy';
import {AuthContext} from '@/components/AuthContext';

import { useContext, useState, useEffect } from "react";
import Post from '@/components/post_list/post/profile_post/post'
// import  Header  from '@/components/nav_bar/nav_bar'
// import Comments from '@/components/comment_list/comment_list'
// import Footer from '@/components/footer/footer'
export default function PostDetails() {
    let AuthData = useContext(AuthContext);



    return (
        <>
         <Post/>
        <p>mmmmmmmmmmm</p>
        {/* <Header/>
       
        <Comments/>
        <Footer/> */}
        
        
        
        
        
        
        
        </>


    )
}