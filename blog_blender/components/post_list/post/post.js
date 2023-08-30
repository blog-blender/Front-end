import { useState } from "react";
import { comment_data } from "@/data_samples/comment_list";
import Modal from "@/components/modal";
import BlogList from "@/components/blog_list/blog_list";


import styles from './post.module.css'
export default function Post(props) {

    let data = props.data
    let user = props.user
    const [liked, setLiked] = useState(data.likes.includes(user.id));
    const [commentsVisibility, setCommentsVisibility] = useState(false);
    const target = <BlogList/>
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
            {data.post_photos.map(image => { return <div className={styles.photo_frame}><img className={styles.post_photo} src={image}></img></div>})}
        </div>
        
        <div className={styles.post_summary}>
            <p>likes {data.likes.length}</p>
            <p>Comments {comment_data.length}</p>
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