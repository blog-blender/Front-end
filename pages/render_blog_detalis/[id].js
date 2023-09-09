import { useRouter } from 'next/router';
import { blog_data } from '@/data_samples/blog_list';
import BlogDetail from '@/components/BlogDetailPage/BlogDetailPage';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from '@/components/AuthContext';
import axios from 'axios';



export default function BlogDetailPage() {
  let AuthData = useContext(AuthContext);
  const router = useRouter();
  const queryId = router.query.id;
  
  const [siteCategories, setSiteCategories] = useState(null);
  const siteCategorieslUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/categories'

  const [blogDetails, setBlogDetails] = useState(null);
  const blogDetailsUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs'
  const blogDetailsParams = {blog_id:queryId}

  const [blogPosts, setblogPosts] = useState(null);
  const blogPostsUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts'
  const blogPostsParams = {blog_id:queryId}
  
  const [userDatail, setUserDetail] = useState(null);
  const userDeatailUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/accounts/users'
  const userDeatailParams = { username: AuthData.user.username,}

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
      getData(blogDetailsUrl, AuthData.token.access, setBlogDetails,blogDetailsParams)
      getData(blogPostsUrl, AuthData.token.access, setblogPosts ,blogPostsParams)
    }
  }, [])


  if (!blogDetails || !blogPosts) {
    return <div>Blog not found</div>;
  }
  return <BlogDetail blog={blogDetails.data[0]} AuthData={AuthData} posts={blogPosts.data}/>;
}
