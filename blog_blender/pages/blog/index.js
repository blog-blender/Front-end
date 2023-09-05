import Link from 'next/link'
import CreateBlogForm from '@/components/create_blog/create_blog'
import CreatePostForm from '@/components/create_post/create_post';
import { AuthContext } from '@/components/AuthContext';
import { useContext, useState, useEffect } from "react";
import axios from 'axios';

export default function Blog() {
  let AuthData = useContext(AuthContext);

  const [siteCategories, setSiteCategories] = useState(null);
  const siteCategorieslUrl = 'http://127.0.0.1:8000/api/v1/blogs/categories'

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
      getData(siteCategorieslUrl, AuthData.token.access, setSiteCategories)
    }
  }, [])

  let mock = {
    id: 1,
    owner: {
        username: "ibrahim",
        profile_pic: null,
        id: 4,
        first_name: "",
        last_name: "",
        email: "ibrahim@gmail.com"
    },
    title: "coding fellows",
    banner: "http://127.0.0.1:8000/media/blog_banner/blog_31BfYpu.jpg",
    blog_pic: "http://127.0.0.1:8000/media/blog_pic/robin-4k-beautiful-background-wallpaper-preview.jpg",
    description: "blog update",
    Category_associates: [
        {
            id: 4,
            category_name: "ibraheem",
            blog_id: 1
        },
        {
            id: 5,
            category_name: "znakha",
            blog_id: 1
        },
        {
            id: 6,
            category_name: "gym",
            blog_id: 1
        }
    ]
}

  return (
    <main>
      <Link href="./profile/">profile</Link>
      <Link href="./blog/">blog</Link>
      <Link href="./">Home</Link>
      {/* {siteCategories?<CreateBlogForm AuthData={AuthData} categories={siteCategories.data.map((category)=>{return category.category_name})}/>:<p>empty</p>} */}
      {siteCategories?<CreateBlogForm AuthData={AuthData} categories={siteCategories.data.map((category)=>{return category.category_name})} initialData={mock}/>:<p>empty</p>}
      {/* <CreatePostForm /> */}
      
    </main>
  )
}
