import { useState } from "react";
import Post from "./post/post"
import Modal from "../modal";
import PostForm from "../create_post/create_post";
export default function PostList(props) {
  console.log("post list",props,"post list");
  const [viewPostForm, setViewPostForm] = useState(null);
    return(
    <div className={props.className}>
      <Modal current_value={viewPostForm} set_value={setViewPostForm} target={<PostForm initialData={viewPostForm == true?undefined:viewPostForm}/>} AuthData={props.AuthData} />
      {props.data.map(post => { return <Post className="" data={post} AuthData={props.AuthData} userData={props.userData} setViewPostForm={setViewPostForm}/>})}
    </div>
    )
}