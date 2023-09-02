import Link from 'next/link'
import { useState, useContext, useEffect } from "react";
import styles from './profile.module.css'
import AccountSettingsForm from '@/components/setting/setting';
import { user_data } from '@/data_samples/user_data';
import { AuthContext } from '@/components/AuthContext';
import axios from 'axios';

export default function Profile() {
  let data = user_data[0]
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
    let result
    axios.get(url ,config)
    .then((response)=>{console.log(response);setter(response)})
    .catch((error)=>{setter(error)})
    setter(result)
  }

  useEffect(() => {
    if (AuthData.token){
      console.log("profile fetch");
      getData(userDeatailUrl,AuthData.token.access,setUserDetail,userDeatailParams)
      getData(siteCategorieslUrl,AuthData.token.access,setSiteCategories)
    }
  },[])
  console.log(siteCategories);
  function changeViewState(event){
    setViewState(event.target.value)
  }
  return (
    <main>
      <Link href="./profile/">profile </Link>
      <Link href="./blog/">blog </Link>
      <Link href="./">Home </Link>
      
      <div>
        <img className={styles.banner} src={data.banner}/>
        
        <div className={styles.user_info}>
            <img className={styles.user_photo} src={data.user_photo}/>
            <div>
              <h1 className="text-4xl font-bold">{data.first_name + " " + data.last_name}</h1>
              <h3 className="font-thin">{data.user_name}</h3>
            </div>
        </div>
        
        <div className={styles.profile_nav}>
          <button onClick={changeViewState} value="my blogs">My Blogs</button>
          <button onClick={changeViewState} value="recent posts">recent posts</button>
          <button onClick={changeViewState} value="settings">Settings</button>
        </div>

        <div>
          {viewState == "recent posts" ?<p>recent</p>:viewState == "settings"? <AccountSettingsForm userDatail={userDatail}/>:<p>my blogs</p>}
        </div>
      </div>

    </main>
  )
}
