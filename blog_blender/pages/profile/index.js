import Link from 'next/link'
import { useState, useContext } from "react";
import AppContext from '@/components/AppContext';
import styles from './profile.module.css'
import AccountSettingsForm from '@/components/setting/setting';

export default function Profile() {
  const appContext = useContext(AppContext)
  let data = appContext.globalData
  const [viewState, setViewState] = useState("recent posts");
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
          {viewState == "recent posts" ?<p>recent</p>:viewState == "settings"? <AccountSettingsForm/>:<p>my blogs</p>}
        </div>
      </div>

    </main>
  )
}
