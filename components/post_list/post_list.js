import { useState } from "react";
import Post from "./post/post"
import Modal from "../modal";
import PostForm from "../create_post/create_post";

export default function PostList(props) {
  console.log(props.data,"POST LIST")
  const [viewPostForm, setViewPostForm] = useState(null);
  const [commentsVisibility, setCommentsVisibility] = useState(null);
  const [commentsTarget, setCommentsTarget] = useState(<></>);
    return(
    <div className={props.className}>
      <Modal current_value={commentsVisibility} set_value={setCommentsVisibility} target={commentsTarget} className="w-[90%] py-6"/>
      <Modal current_value={viewPostForm} set_value={setViewPostForm} target={<PostForm setViewPostForm={setViewPostForm} setRefetchTrigger={props.setRefetchTrigger} initialData={viewPostForm == true?undefined:viewPostForm} ownedBlogs={props.ownedBlogs} AuthData={props.AuthData} />}/>
      {(typeof(props.data)!= "string")?props.data.map((post,index) => { return <Post key ={index}  setCommentsVisibility={setCommentsVisibility} setCommentsTarget={setCommentsTarget} setRefetchTrigger={props.setRefetchTrigger} className="" data={post} AuthData={props.AuthData} userData={props.userData} setViewPostForm={setViewPostForm}/>}):<p>please follow some blogs to see there posts</p>}
    </div>
    )
}