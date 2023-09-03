import Link from 'next/link'
import { useState, useContext, useEffect } from "react";
import { blog_data } from "@/data_samples/blog_list"
import { comment_data } from "@/data_samples/comment_list"
import { post_data } from "@/data_samples/post_list"
import { user_data } from "@/data_samples/user_data"
import Profile_info from './Profile_info'; // Assuming both files are in the same directory

import Post from "@/pages/profile/Post"

import styles from './profile.module.css'
import AccountSettingsForm from '@/components/setting/setting';
import { AuthContext } from '@/components/AuthContext';
import axios from 'axios';

export default function Profile() {
  let data = user_data[0]
  let banner,profilePic,userName,firstName,lastName,email,id
  const [viewState, setViewState] = useState("recent posts");
  let AuthData = useContext(AuthContext);

  const [siteCategories, setSiteCategories] = useState(null);
  const siteCategorieslUrl = 'http://127.0.0.1:8000/api/v1/blogs/categories'
  
  const [userDatail, setUserDetail] = useState(null);
  const userDeatailUrl = 'http://127.0.0.1:8000/api/v1/accounts/users'
  const userDeatailParams = {username:AuthData.user.username,}

  async function getData(url, token, setter, params){
    const config = {headers: {
      Authorization : `Bearer ${token}`},
      params : params,};
    axios.get(url ,config)
    .then((response)=>{console.log(response);setter(response)})
    .catch((error)=>{setter(error)})
  }

  useEffect(() => {
    if (AuthData.token){
      console.log("profile fetch");
      getData(userDeatailUrl,AuthData.token.access,setUserDetail,userDeatailParams)
      getData(siteCategorieslUrl,AuthData.token.access,setSiteCategories)
    }
  },[])

  if(userDatail)
  {
    let data = userDatail.data
    banner = data.banner
    profilePic = data.profile_pic
    userName = data.username
    firstName = data.first_name
    lastName = data.last_name
    email = data.email
    id = AuthData.user.id
  }

  function changeViewState(event){
    setViewState(event.target.value)
  }
  return (
    <div>
     
    <main>
      {/* <Link href="./profile/">profile </Link>
      <Link href="./blog/">blog </Link>
      <Link href="./">Home </Link> */}
      
      <div>
        <Profile_info/>
        {/* <Content/> */}
        {/* <img className={styles.banner} src={data.banner}/> */}
        

{/*         
        <div className={styles.profile_nav}>
          <button onClick={changeViewState} value="my blogs">My Blogs</button>
          <button onClick={changeViewState} value="recent posts">recent posts</button>
          <button onClick={changeViewState} value="settings">Settings</button>
        </div>
        <div>
          {viewState == "recent posts" ?<p>recent</p>:viewState == "settings"? <AccountSettingsForm initialData={{id,banner,profilePic,userName,firstName,lastName,email}} AuthData={AuthData}/>:<p>my blogs</p>}
        </div>
      </div>:<p>error while fetching data</p>}
        </div> */}

        {/* <div>
          {viewState == "recent posts" ?<p>recent</p>:viewState == "settings"? <p>settings</p>:<p>my blogs</p>}
        </div> */}
      </div>

    </main>
    </div>
  )
  

    };