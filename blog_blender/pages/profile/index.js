import Link from 'next/link'
import { blog_data } from "@/data_samples/blog_list"
import { post_data } from "@/data_samples/post_list"
import { user_data } from "@/data_samples/user_data"
import { useState, useContext, useEffect } from 'react'
import PostList from '@/components/post_list/post_list';
import BlogList from '@/components/blog_list/blog_list';
import styles from './profile.module.css'
import AccountSettingsForm from '@/components/setting/setting';
import Modal from '@/components/modal';
import { AuthContext } from '@/components/AuthContext';
import axios from 'axios';

export default function Profile() {
  let data = user_data[0]
  let banner, profilePic, userName, firstName, lastName, email, id
  const [viewModal, setViewModal] = useState(false);
  let AuthData = useContext(AuthContext);

  const [siteCategories, setSiteCategories] = useState(null);
  const siteCategorieslUrl = 'http://127.0.0.1:8000/api/v1/blogs/categories'

  const [userDatail, setUserDetail] = useState(null);
  const userDeatailUrl = 'http://127.0.0.1:8000/api/v1/accounts/users'
  const userDeatailParams = { username: AuthData.user.username, }

  async function getData(url, token, setter, params) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: params,
    };
    axios.get(url, config)
      .then((response) => { console.log(response); setter(response) })
      .catch((error) => { setter(error) })
  }

  useEffect(() => {
    if (AuthData.token) {
      console.log("profile fetch");
      getData(userDeatailUrl, AuthData.token.access, setUserDetail, userDeatailParams)
      getData(siteCategorieslUrl, AuthData.token.access, setSiteCategories)
    }
  }, [])

  if (userDatail) {
    let data = userDatail.data
    banner = data.banner
    profilePic = data.profile_pic
    userName = data.username
    firstName = data.first_name
    lastName = data.last_name
    email = data.email
    id = AuthData.user.id
  }


  return (
    <div className={styles.grid}>
      <header className={styles.header}>
        <div className={styles.content}>
          <img className={styles.banner} src={data.banner} alt="User Banner" />
          <div className={styles.user_info}>
            <img className={styles.user_photo} src={data.user_photo} alt="User Photo" />
            <ul className="flex-container nowrap">
              <li className={styles.name}>{data.first_name + " " + data.last_name}</li>
              <li className={styles.username}>@{data.user_name}</li>
            </ul>
            <ul className="flex-container wrap">
              <li className={styles.setting_icon}>
                <a href="/your-target-page-url">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.setting_icon}
                    onClick={(event) => {event.preventDefault();document.body.style.overflow = "hidden";setViewModal(true);}}
                  >
                    {/* Your SVG content here */}



                    <circle cx="12" cy="12" r="3" />
                    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <aside className={styles.leftbar}>

        <div className={styles.content}>
          {/* here i mean  */}

          <BlogList data={blog_data} />



          {/* to here */}
        </div>



      </aside>

      <Modal current_value={viewModal} set_value={setViewModal} target={<AccountSettingsForm initialData={{ id, banner, profilePic, userName, firstName, lastName, email }} AuthData={AuthData} />} />
      <main className={styles.main}>
        <div className={styles.content}>




          <div className={styles.containerfor}>
            <div className={styles.typewriter}>
              <div className={styles.slide}><i></i></div>
              <div className={styles.paper}></div>
              <div className={styles.keyboard}></div>
            </div>
            <div className={styles.glassdiv}>
              <a href = "http://localhost:3000/post"> 
              
              <div className={styles.container}>
                <div className={styles.box}>
                
                  <span className={styles.title}>Your posts . . . </span>
                </div>
                
              </div>
              </a>
            </div>


          </div>

          <PostList posts={post_data} AuthData={AuthData} />

        </div>
      </main>
      <footer className={styles.footer}>
        <div className={styles.content}>
          <p>Footer</p>
        </div>
      </footer>
    </div>
  )
};