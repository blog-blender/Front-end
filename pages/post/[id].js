import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from '@/components/AuthContext';
import PostList from '@/components/post_list/post_list';
import axios from 'axios';


export default function PostDetailPage() {
  let AuthData = useContext(AuthContext);
  const router = useRouter();
  const queryId = router.query.id;
  const [fetchTrigger,setRefetchTrigger] = useState(false);
  
  const [postDatail, setPostDetail] = useState(null);
  const postDetailUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/posts/details/`;
  const postDetailParams = { post_id: queryId };

  const [userDatail, setUserDetail] = useState(null);
  const userDeatailUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/accounts/users`
  const userDeatailParams = { username: AuthData.user.username, }

  async function getData(url, token, setter, params) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: params,
    };
    axios.get(url, config)
      .then((response) => { console.log(response); setter(response.data) })
      .catch((error) => { setter(error) });
  }
  
  async function fetchData(){
    await AuthData.keepConnectionValid(AuthData.token.access, AuthData.token.refresh)
    getData(postDetailUrl, AuthData.token.access, setPostDetail, postDetailParams);
    getData(userDeatailUrl, AuthData.token.access, setUserDetail, userDeatailParams)
  }

  useEffect(() => {
    if (queryId) {
      fetchData()
    }
  }, [queryId])

  useEffect(() => {
    if (fetchTrigger) {
      fetchData()
    }
  },[fetchTrigger])

  if (!postDatail || !userDatail) {
    return <div>Post not found</div>;
  }
  // console.log(userDatail,postDatail);
  return (
    <>
     <PostList setRefetchTrigger={setRefetchTrigger} data={postDatail} userData={userDatail[0]} AuthData={AuthData} />
    </>
  )

}

