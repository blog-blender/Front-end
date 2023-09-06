// import Post from "@/components/post_list/home_post/homePost"

// export default function PostList(props) {
//   console.log("post list",props.posts,"post list");
//     return(
//     <div className={props.className}>
//     {props.posts.map(post => { return <Post className="" data={post} AuthData={props.AuthData}/>
//   })}
//     </div>
//     )}



// DELETE
import { useState } from "react";
import Post from "../post/post";
import Modal from "@/components/modal";
import PostForm from "@/components/create_post/create_post";
export default function PostList(props) {
  console.log("post list",props,"post list");
  const [viewPostForm, setViewPostForm] = useState(null);
    return(
    <div className={props.className}>
      <Modal current_value={viewPostForm} set_value={setViewPostForm} target={<PostForm initialData={viewPostForm == true?undefined:viewPostForm} ownedBlogs={props.ownedBlogs}/>} AuthData={props.AuthData} />
      {props.data.map(post => { return <Post className="" data={post} AuthData={props.AuthData} userData={props.userData} setViewPostForm={setViewPostForm}/>})}
    </div>
    )
}