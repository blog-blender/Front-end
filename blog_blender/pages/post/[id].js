import { useRouter } from 'next/router';
import { useContext, useState, useEffect } from "react";
import { AuthContext } from '@/components/AuthContext';
import PostList from '@/components/post_list/post_list';
import axios from 'axios';
import CommentList from '@/components/comment_list/comment_list';
const staticData = [
  [
    {
      "id": 1,
      "Auther_id": {
        "username": "Ayman",
        "profile_pic": "http://127.0.0.1:8000/media/profile_pics/TNGRRLUMA-U04PQLUTEN7-bd5eab115e80-24.jpg",
        "last_name": "malkawi",
        "first_name": "Ayman"
      },
      "title": "Exploring the Hidden Treasures of Kyoto",
      "content": "In this post, we take you on a virtual journey through the enchanting streets of Kyoto, Japan. Discover the serene temples, lush bamboo forests, and traditional tea houses that make this city a must-visit destination for any traveler",
      "blog_id": 1,
      "comments": [],
      "photo": [
        {
          "id": 3,
          "data": "http://127.0.0.1:8000/media/post_picture/1-1.jpg",
          "post_id": 1
        },
        {
          "id": 4,
          "data": "http://127.0.0.1:8000/media/post_picture/1-2.webp",
          "post_id": 1
        },
        {
          "id": 5,
          "data": "http://127.0.0.1:8000/media/post_picture/1-3.webp",
          "post_id": 1
        }
      ],
      "likes": [
        {
          "id": 1,
          "user_id": {
            "username": "Ayman",
            "profile_pic": "http://127.0.0.1:8000/media/profile_pics/TNGRRLUMA-U04PQLUTEN7-bd5eab115e80-24.jpg"
          },
          "post_id": 1
        },
        {
          "id": 37,
          "user_id": {
            "username": "Eman",
            "profile_pic": "http://127.0.0.1:8000/media/profile_pics/TNGRRLUMA-U04PQQ2MF8A-bff71d0b2092-24.png"
          },
          "post_id": 1
        },
        {
          "id": 38,
          "user_id": {
            "username": "Ayman",
            "profile_pic": "http://127.0.0.1:8000/media/profile_pics/TNGRRLUMA-U04PQLUTEN7-bd5eab115e80-24.jpg"
          },
          "post_id": 1
        }
      ]
    }
  ]
];

export default function PostDetailPage() {
  let AuthData = useContext(AuthContext);
  const router = useRouter();
  const queryId = router.query.id;
  const [postDatail, setPostDetail] = useState(null);
  const userDetailUrl = 'http://127.0.0.1:8000/api/v1/posts/details/';
  const userDetailParams = { post_id: queryId };

  async function getData(url, token, setter, params) {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      },
      params: params,
    };
    console.log(config,4444444444444444);
    axios.get(url, config)
      .then((response) => { console.log(response); setter(response.data) })
      .catch((error) => { setter(error) });
  }
  
  useEffect(() => {
    if (AuthData.token) {
      getData(userDetailUrl, AuthData.token.access, setPostDetail, userDetailParams);
    }
  }, [])

  if (!staticData) {
    return <div>Post not found</div>;
  }
  
  return (
    <>
     <PostList data={staticData[0]} userData={staticData[0]} AuthData={AuthData} /> ;
     <CommentList AuthData={AuthData} postId={staticData[0].id} blogId={staticData[0].blogId} userPic={staticData[0]["Auther_id"]}/>
    </>

   

  );

}

