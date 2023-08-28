import { useState } from "react";
import { comment_data } from "@/data_samples/comment_list";


import styles from './post.module.css'
export default function Post(props) {

    let data = props.data
    let user = props.user
    const [liked, setLiked] = useState(data.likes.includes(user.id));

    function likeOnClick(event) {
    setLiked(!liked)
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
            <button>Comment</button>
            <button>Share</button>
        </div>

    </div>
    )
}