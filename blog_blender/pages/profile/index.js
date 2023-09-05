import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import PostList from '@/components/post_list/post_list';
import BlogList from '@/components/blog_list/blog_list';

import styles from './profile.module.css'
import AccountSettingsForm from '@/components/setting/setting';
import Modal from '@/components/modal';
import PostForm from '@/components/create_post/create_post';
import PostFormModal from '@/components/create_post/modal';
import { AuthContext } from '@/components/AuthContext';
import axios from 'axios';

export default function Profile() {
  let banner, profilePic, userName, firstName, lastName, email, id
  const [viewComments, setViewComments] = useState(false);
  const [viewPostForm, setViewPostForm] = useState(null);
  let AuthData = useContext(AuthContext);

  const [siteCategories, setSiteCategories] = useState(null);
  const siteCategorieslUrl = 'http://127.0.0.1:8000/api/v1/blogs/categories'

  const [userDatail, setUserDetail] = useState(null);
  const userDeatailUrl = 'http://127.0.0.1:8000/api/v1/accounts/users'
  const userDeatailParams = { username: AuthData.user.username,}

  const [recentPosts, setrecentPosts] = useState(null);
  const recentPostsUrl = 'http://127.0.0.1:8000/api/v1/posts/recent'
  const recentPostsParams = { user_id:3, num_of_posts:10 }
  // const recentPostsParams = { user_id:AuthData.user.id, num_of_posts:10 }

  const [myBlogs, setMyBlogs] = useState(null);
  const myBlogsUrl = 'http://127.0.0.1:8000/api/v1/blogs'
  // const myBlogsParams = { owner:AuthData.user.id}
  const myBlogsParams = { owner:3}


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
      // console.log("profile fetch");
      getData(userDeatailUrl, AuthData.token.access, setUserDetail, userDeatailParams)
      getData(siteCategorieslUrl, AuthData.token.access, setSiteCategories)
      getData(recentPostsUrl, AuthData.token.access, setrecentPosts,recentPostsParams)
      getData(myBlogsUrl, AuthData.token.access, setMyBlogs,myBlogsParams)
    }
  }, [])

  if (userDatail) {

    let data = userDatail.data[0]
    banner = data.user_banner_pic
    profilePic = data.profile_pic
    userName = data.username
    firstName = data.first_name
    lastName = data.last_name
    email = data.email
    id = AuthData.user.id
    // console.log(email,"email");
  }


  return (  
    <div className={styles.grid}>
      <header className={styles.header}>
        <div className={styles.content}>
          <img className={styles.banner} src={banner} alt="User Banner" />
          <div className={styles.user_info}>
            <img className={styles.user_photo} src={profilePic} alt="User Photo" />
                  {/* <PostFormModal postFormOpen={viewPostForm} setPostFormOpen={setViewPostForm} initialData={viewPostForm == true?undefined:viewPostForm}/>  */}
            <ul className="flex-container nowrap">
              <li className={styles.name}>{firstName + " " + lastName}</li>
              <li className={styles.username}>@{userName}</li>
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
                    onClick={(event) => {event.preventDefault();document.body.style.overflow = "hidden";setViewComments(true);}}
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

          
          {myBlogs?<BlogList data={myBlogs.data}/>:<p>no blogs</p>}


          {/* to here */}
        </div>



      </aside>
      
      <Modal current_value={viewPostForm} set_value={setViewPostForm} target={<PostForm initialData={viewPostForm == true?undefined:viewPostForm}/>} AuthData={AuthData} />
      <Modal current_value={viewComments} set_value={setViewComments} target={<AccountSettingsForm initialData={{ id, banner, profilePic, userName, firstName, lastName, email }} AuthData={AuthData} />} />
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
                
                  <span className={styles.title} onClick={(event)=>{event.preventDefault();setViewPostForm(true)}}>Your posts . . . </span>
                </div>
                
              </div>
              </a>
            </div>


          </div>

          {recentPosts?<PostList data={recentPosts.data} AuthData={AuthData} userData={userDatail.data[0]}/>:<p>no posts</p>}

        </div>
      </main>
      
    </div>
  )
};