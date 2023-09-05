import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '@/components/AuthContext';
import axios from 'axios';

export default function Profile() {
  let AuthData = useContext(AuthContext);


  const [siteCategories, setSiteCategories] = useState(null);
  const [userDatail, setUserDetail] = useState(null);

  const deleteBlogUrl = 'http://127.0.0.1:8000/api/v1/blogs/update/1/'
  const deletePostUrl = 'http://127.0.0.1:8000/api/v1/posts/1/update'
  const deleteCommentUrl = 'http://127.0.0.1:8000/api/v1/posts/1/comments/update/1'
  const deleteFollowUrl = 'http://127.0.0.1:8000/api/v1/blogs/unfollow/1/'
  const deleteLikeUrl = 'http://127.0.0.1:8000/api/v1/posts/like/delete/1'
  const deleteUserUrl = 'http://127.0.0.1:8000/api/v1/accounts/update'

  async function deleteData(url, token, params) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: params,
    };
    axios.delete(url, config)
      .then((response) => { console.log(response);})
      .catch((error) => { console.log(error) })
  }

  useEffect(() => {
    if (AuthData.token) {
      deleteData(deleteBlogUrl,AuthData.token.access)
      deleteData(deletePostUrl,AuthData.token.access)
      deleteData(deleteCommentUrl,AuthData.token.access)
      deleteData(deleteFollowUrl,AuthData.token.access)
      deleteData(deleteLikeUrl,AuthData.token.access)
      deleteData(deleteUserUrl,AuthData.token.access)
    }
  }, [])




  return (
    <>test</>
  )
};