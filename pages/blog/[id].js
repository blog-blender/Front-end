import { router } from 'next/router';
import BlogDetail from '@/components/BlogDetailPage/BlogDetailPage';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from '@/components/AuthContext';
import axios from 'axios';



export default function BlogDetailPage() {
  let AuthData = useContext(AuthContext);
  const { id } = router.query

  const [fetchTrigger,setRefetchTrigger] = useState(false);

  const [siteCategories, setSiteCategories] = useState(null);
  const siteCategorieslUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/blogs/categories/`

  const [blogDetails, setBlogDetails] = useState(null);
  const blogDetailsUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/blogs`
  const blogDetailsParams = { blog_id: router.query.id }

  const [blogPosts, setblogPosts] = useState(null);
  const blogPostsUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/posts`
  const blogPostsParams = { blog_id: router.query.id }

  const [myBlogs, setMyBlogs] = useState(null);
  const myBlogsUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/blogs`
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
  async function fetchData() {
    await AuthData.keepConnectionValid(AuthData.token.access, AuthData.token.refresh)
    getData(myBlogsUrl, AuthData.token.access, setMyBlogs, myBlogsParams)
    getData(siteCategorieslUrl, AuthData.token.access, setSiteCategories)
    getData(blogDetailsUrl, AuthData.token.access, setBlogDetails, blogDetailsParams)
    getData(blogPostsUrl, AuthData.token.access, setblogPosts, blogPostsParams)
  }
  useEffect(() => {
    if (id) {
      fetchData()
    }
  }, [id])

  useEffect(() => {
    if (fetchTrigger) {
      fetchData()
    }
  },[fetchTrigger])

  if (!blogDetails || !blogPosts) {
    return <div>Blog not found</div>;
  }
  return <BlogDetail setRefetchTrigger={setRefetchTrigger} ownedBlogs={myBlogs ? myBlogs.data : []} blog={blogDetails.data[0]} AuthData={AuthData} posts={blogPosts.data} />;
}
