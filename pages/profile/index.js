import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import PostList from '@/components/post_list/post_list';
// import PostList from '@/components/post_list/home_post/home_post_list';
import BlogList from '@/components/blog_list/blog_list';
// import BlogList from '@/components/blog_list/home/home_blog_list';
import styles from './profile.module.css'
import AccountSettingsForm from '@/components/setting/setting';
import Modal from '@/components/modal';
import PostForm from '@/components/create_post/create_post';
import BlogForm from '@/components/create_blog/create_blog';
import { AuthContext } from '@/components/AuthContext';
import axios from 'axios';

export default function Profile() {
  let banner, profilePic, userName, firstName, lastName, email, id

  const [fetchTrigger,setRefetchTrigger] = useState(false)
  const [viewSettingsForm, setViewSettingsForm] = useState(false);
  const [viewPostForm, setViewPostForm] = useState(null);
  const [viewBlogForm, setViewBlogForm] = useState(null);
  let AuthData = useContext(AuthContext);
  console.log(AuthData,"FORM AUTH DATA");
  const [siteCategories, setSiteCategories] = useState(null);
  const siteCategorieslUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/categories'

  const [userDatail, setUserDetail] = useState(null);
  const userDeatailUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/accounts/users'
  const userDeatailParams = { username: AuthData.user.username, }

  const [recentPosts, setrecentPosts] = useState(null);
  const recentPostsUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/recent'
  // const recentPostsParams = { user_id:3, num_of_posts:10 }
  const recentPostsParams = { user_id: AuthData.user.id, num_of_posts: 10 }

  const [myBlogs, setMyBlogs] = useState(null);
  const myBlogsUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs'
  // const myBlogsParams = { owner:3}
  const myBlogsParams = { owner: AuthData.user.id }


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
  let fetchData = ()=>{
    getData(userDeatailUrl, AuthData.token.access, setUserDetail, userDeatailParams)
    getData(siteCategorieslUrl, AuthData.token.access, setSiteCategories)
    getData(recentPostsUrl, AuthData.token.access, setrecentPosts, recentPostsParams)
    getData(myBlogsUrl, AuthData.token.access, setMyBlogs, myBlogsParams)
    setRefetchTrigger(false)
  }

  useEffect(() => {
    fetchData()
  },[])

  console.log(fetchTrigger,"FETCH STATUS");

  useEffect(() => {
    if (fetchTrigger) {
      fetchData()
    }
  },[fetchTrigger])

  useEffect(() => {
    if (AuthData.token) {
      // console.log("profile fetch");
      
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



  if (myBlogs)
    console.log(myBlogs.data, "MY BLOGS");
  return (
    <div className={styles.container}>
      {/* Profile Data */}
      <div className={styles.header}>

        <img className={styles.banner} src={`http://res.cloudinary.com/dhaem8m4p/${banner}` || 'https://nichemedia.co.nz/wp-content/uploads/2023/03/placeholder-banner.png'} alt="User Banner" />


        <div className={styles.user_info}>
          <img className={styles.user_photo} src={ `http://res.cloudinary.com/dhaem8m4p/${profilePic}`|| 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png?20150327203541'} alt="User Photo" />
          <ul className="flex-container nowrap">
            <li className={styles.name}>{firstName + " " + lastName}</li>
            <li className={styles.username}>@{userName}</li>
          </ul>
          <ul className="flex-container wrap">
            <li className={styles.setting_icon}>
              {/* <a href="/your-target-page-url"> */}
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
                  onClick={(event) => { event.preventDefault(); document.body.style.overflow = "hidden"; setViewSettingsForm(true); }}
                >

                  {/* Your SVG content here */}
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0-2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
                </svg>
              {/* </a> */}
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.content}>

        <div className={styles.glassdiv}>
          {/* <a href="http://localhost:3000/post"> */}
            <div className={styles.container2}>
              <div className={styles.box}>
                <span className={styles.title} onClick={(event)=>{event.preventDefault();setViewPostForm(true)}}> + Create Post</span>
              </div>
            </div>
          {/* </a> */}
        </div>
        <div className={styles.glassdivsec}>
          {/* <a href="http://localhost:3000/post"> */}
            <div className={styles.container2sec}>
              <div className={styles.box}>
                <span className={styles.title} onClick={(event)=>{event.preventDefault();setViewBlogForm(true)}}> + Create Blog</span>
              </div>
            </div>
          {/* </a> */}
        </div>

      </div>
      {myBlogs ? <Modal current_value={viewPostForm} set_value={setViewPostForm} target={<PostForm setViewPostForm={setViewPostForm} setRefetchTrigger={setRefetchTrigger} AuthData={AuthData} initialData={viewPostForm == true ? undefined : viewPostForm} ownedBlogs={myBlogs ? myBlogs.data : []}/>}/> : <></>}
      {myBlogs && siteCategories ? <Modal current_value={viewBlogForm} set_value={setViewBlogForm} target={<BlogForm setRefetchTrigger={setRefetchTrigger} categories={siteCategories.data} AuthData={AuthData} />} /> : <></>}
      <Modal current_value={viewSettingsForm} set_value={setViewSettingsForm} target={<AccountSettingsForm setRefetchTrigger={setRefetchTrigger} initialData={{ id, banner, profilePic, userName, firstName, lastName, email }} AuthData={AuthData} />} />

      <div className={styles.blogListContainer}>
        {myBlogs ? <BlogList style ={styles} data={myBlogs.data}/> : <p>no blogs</p>}
      </div>

      <div className={styles.content}>
        <div className={styles.myposts}>
          {recentPosts && myBlogs? <PostList setRefetchTrigger={setRefetchTrigger} data={recentPosts.data} AuthData={AuthData} userData={userDatail.data[0] } ownedBlogs={myBlogs ? myBlogs.data : []}/> : <p>no posts</p>}
        </div>
      </div>





    </div>
  )
};