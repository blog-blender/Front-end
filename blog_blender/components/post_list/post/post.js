import { useState } from "react";
import Modal from "@/components/modal";
import Photo from "@/components/image_slider/image";
import CommentList from "@/components/comment_list/comment_list";


import styles from './post.module.css'
export default function Post(props){
    
    let data = props.data
    let user = props.AuthData.user
    const [liked, setLiked] = useState((data.likes)?data.likes.includes(user.id):false);
    const [commentsVisibility, setCommentsVisibility] = useState(false);
    const target = (data.comments)?<CommentList data={data.comments} AuthData={props.AuthData} postId={data.id} blogId={data.blog_id}/>:<></>
    function likeOnClick(event) {
    setLiked(!liked)
    }
    
    function showComments(event) {
        document.body.style.overflow = "hidden"
        setCommentsVisibility(true)
    }
    return(
    <div className={styles.post}>
        <div className={styles.user_section}>
            <img className={styles.user_photo} src={data.user_photo}/>
            <h1 className={styles.user_name}>{data.user_name}</h1>
        </div>

        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.content}>{data.content}</p>

        <div className={styles.post_photos}>
            {(data.photo)?<Photo photos={data.photo}/>:<p>no photos</p>}
        </div>
        
        <div className={styles.post_summary}>
            <p>likes {(data.likes)?data.likes.length:69}</p>
            <p>Comments {(data.likes)?data.comments.length:69}</p>
        </div>

        <div className={styles.post_interactions}>
            <button onClick={likeOnClick}>{liked?"like":"liked"}</button>
            <button onClick={showComments}>Comment</button>
            <button>Share</button>
        </div>
        <div>
           <Modal current_value={commentsVisibility} set_value={setCommentsVisibility} target={target}/> 
        </div>
    </div>
    )
}