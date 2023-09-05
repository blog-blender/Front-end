import { useRouter } from 'next/router';
import { blog_data } from '@/data_samples/blog_list';
import BlogDetail from '@/components/BlogDetailPage/BlogDetailPage';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from '@/components/AuthContext';
import axios from 'axios';

export default function BlogDetailPage() {
  let AuthData = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query; // Get the blog ID from the route

  // Find the blog with the matching ID from your sample data
  const blog = blog_data.find(blog => blog.id === parseInt(id, 10));

  
  const [siteCategories, setSiteCategories] = useState(null);
  const siteCategorieslUrl = 'http://127.0.0.1:8000/api/v1/blogs/categories'

  const [blogDetails, setBlogDetails] = useState(null);
  const blogDetailsUrl = 'http://127.0.0.1:8000/api/v1/blogs'
  const blogDetailsParams = {blog_id:1}

  const [blogPosts, setblogPosts] = useState(null);
  const blogPostsUrl = 'http://127.0.0.1:8000/api/v1/posts'
  const blogPostsParams = {blog_id:1}

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

if (blogPosts){console.log(11111111111111,blogPosts)}

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return <BlogDetail blog={blog} />;
}
