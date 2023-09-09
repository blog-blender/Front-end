import Link from 'next/link'
import { useState, useContext, useEffect } from 'react'
import { AuthContext } from '@/components/AuthContext';
import axios from 'axios';

export default function Profile() {
  let AuthData = useContext(AuthContext);


  const [siteCategories, setSiteCategories] = useState(null);
  const [userDatail, setUserDetail] = useState(null);

  const [deleteBlog, setdeleteBlog] = useState(null);
const deleteBlogUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/delete/10/'
const deleteBlogParams = { username: AuthData.user.username}

const [deletePost, setdeletePost] = useState(null);
const deletePostUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/delete/10/'
const deletePostParams = { username: AuthData.user.username}

const [deleteComment, setdeleteComment] = useState(null);
const deleteCommentUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/comments/update/7/'
const deleteCommentParams = { username: AuthData.user.username}

const [deleteFollow, setdeleteFollow] = useState(null);
const deleteFollowUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/unfollow/2/'
const deleteFollowParams = { username: AuthData.user.username}

const [deleteUser, setdeleteUser] = useState(null);
const deleteUserUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/accounts/update'
const deleteUserParams = { username: AuthData.user.username}

const [deleteLike, setdeleteLike] = useState(null);
const deleteLikeUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/like/delete/1/'
const deleteLikeParams = { username: AuthData.user.username}

const [followBlog, setfollowBlog] = useState(null);
const followBlogUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/follow/'
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



 

////////////////////////////////////////  
const [deleteBlog, setdeleteBlog] = useState(null);
const deleteBlogUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/delete/10/'
const deleteBlogParams = { username: AuthData.user.username}

const [deletePost, setdeletePost] = useState(null);
const deletePostUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/delete/10/'
const deletePostParams = { username: AuthData.user.username}

const [deleteComment, setdeleteComment] = useState(null);
const deleteCommentUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/comments/update/7/'
const deleteCommentParams = { username: AuthData.user.username}

const [deleteFollow, setdeleteFollow] = useState(null);
const deleteFollowUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/unfollow/2/'
const deleteFollowParams = { username: AuthData.user.username}

const [deleteUser, setdeleteUser] = useState(null);
const deleteUserUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/accounts/update'
const deleteUserParams = { username: AuthData.user.username}

const [deleteLike, setdeleteLike] = useState(null);
const deleteLikeUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/like/delete/1/'
const deleteLikeParams = { username: AuthData.user.username}

const [followBlog, setfollowBlog] = useState(null);
const followBlogUrl = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/blogs/follow/'
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



  let payload = {}
  async function postData(url, token, setter ,params) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }, params: params,
    };
    payload ={
      "blog_id": "5"
    },
    axios.post(url, config)
      .then((response) => { console.log(response); setter(response) })
      .catch((error) => { setter(error) })
  }





  
  useEffect(() => {
    if (AuthData.token) {
      // deleteData(deleteBlogUrl,AuthData.token.access,setdeleteBlog)
      // deleteData(deletePostUrl,AuthData.token.access,setdeletePost)
      // deleteData(deleteCommentUrl,AuthData.token.access,setdeleteComment)
      // deleteData(deleteFollowUrl,AuthData.token.access,setdeleteFollow)
      // deleteData(deleteLikeUrl,AuthData.token.access,setdeleteLike)
      postData(followBlogUrl,AuthData.token.access,setfollowBlog)
      // deleteData(deleteUserUrl,AuthData.token.access,setdeleteUser)
    }
  }, [])




  return (
    <>test</>
  )
};