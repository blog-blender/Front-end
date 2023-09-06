import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '@/components/AuthContext';
import axios from 'axios';

export default function Profile() {
  let AuthData = useContext(AuthContext);


  const [siteCategories, setSiteCategories] = useState(null);
  const [userDatail, setUserDetail] = useState(null);

  const [deleteBlog, setdeleteBlog] = useState(null);
const deleteBlogUrl = 'http://127.0.0.1:8000/api/v1/blogs/delete/10/'
const deleteBlogParams = { username: AuthData.user.username}

const [deletePost, setdeletePost] = useState(null);
const deletePostUrl = 'http://127.0.0.1:8000/api/v1/posts/delete/10/'
const deletePostParams = { username: AuthData.user.username}

const [deleteComment, setdeleteComment] = useState(null);
const deleteCommentUrl = 'http://127.0.0.1:8000/api/v1/posts/comments/update/7/'
const deleteCommentParams = { username: AuthData.user.username}

const [deleteFollow, setdeleteFollow] = useState(null);
const deleteFollowUrl = 'http://127.0.0.1:8000/api/v1/blogs/unfollow/2/'
const deleteFollowParams = { username: AuthData.user.username}

const [deleteUser, setdeleteUser] = useState(null);
const deleteUserUrl = 'http://127.0.0.1:8000/api/v1/accounts/update'
const deleteUserParams = { username: AuthData.user.username}

const [deleteLike, setdeleteLike] = useState(null);
const deleteLikeUrl = 'http://127.0.0.1:8000/api/v1/posts/like/delete/1/'
const deleteLikeParams = { username: AuthData.user.username}

const [followBlog, setfollowBlog] = useState(null);
const followBlogUrl = 'http://127.0.0.1:8000/api/v1/blogs/follow/'
const followBlogParams = { username: AuthData.user.username}

////////////////////////////////////////

  async function deleteData(url, token, setter ,params) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: params,
    };
    axios.delete(url, config)
      .then((response) => { console.log(response); setter(response) })
      .catch((error) => { setter(error) })
  }

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
      // deleteData(deleteUserUrl,AuthData.token.access)
    }
  }, [])




  return (
    <>test</>
  )
};