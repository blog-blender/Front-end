import { useState } from "react";
import Post from "./post/post"
import Modal from "../modal";
import PostForm from "../create_post/create_post";
// KEEP
export default function PostList(props) {
  const { style } = props;
  console.log("post list",props,"post list");
  const [viewPostForm, setViewPostForm] = useState(null);
    return(
    <div className={props.className}>
      <Modal current_value={viewPostForm} set_value={setViewPostForm} target={<PostForm setViewPostForm={setViewPostForm} setRefetchTrigger={props.setRefetchTrigger} initialData={viewPostForm == true?undefined:viewPostForm} ownedBlogs={props.ownedBlogs} AuthData={props.AuthData} setRefetchTrigger={props.setRefetchTrigger}/>}/>
      {props.data.map(post => { return <Post setRefetchTrigger={props.setRefetchTrigger} className="" data={post} AuthData={props.AuthData} userData={props.userData} setViewPostForm={setViewPostForm}/>})}
    </div>
    )
}