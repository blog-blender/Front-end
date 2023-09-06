import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from '@/components/AuthContext';
import PostList from '@/components/post_list/post_list';
import axios from 'axios';



export default function BlogDetailPage() {
  let AuthData = useContext(AuthContext);
  const router = useRouter();
  const queryId = router.query.id;
  
  
  const [postDatail, setPostDetail] = useState(null);
  const userDetailUrl = 'http://127.0.0.1:8000/api/v1/posts/details/'
  const userDetailParams = { post_id: queryId,}

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
      getData(userDetailUrl, AuthData.token.access, setPostDetail, userDetailParams)
    }
  }, [])


  if (!postDatail) {
    return <div>Post not found</div>;
  }
  return(
    <PostList data={postDatail.data} userData={postDatail.data[0].Auther_id} AuthData={AuthData}/>
  )
}

