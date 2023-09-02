import { useState } from "react";
import { comment_data } from "@/data_samples/comment_list";
import Modal from "@/components/modal";
import BlogList from "@/components/blog_list/blog_list";
import CommentList from "@/components/comment_list/comment_list";


import styles from './post.module.css'
export default function Post(props) {

    let data = props.data
    let user = props.user
    const [liked, setLiked] = useState(data.likes.includes(user.id));
    const [commentsVisibility, setCommentsVisibility] = useState(false);
    const target = <CommentList />
    function likeOnClick(event) {
        setLiked(!liked)
    }

    function showComments(event) {
        document.body.style.overflow = "hidden"
        setCommentsVisibility(true)
    }
    return (

        <div>
            <div className={styles.card}>
                <div className={styles.user_infoPost}>
                    <img className={styles.user_photoPost} src={data.user_photo} alt="User Photo" />
                    <ul className="flex-container nowrap">
                        <li className={styles.namePost}>{data.first_name + " " + data.last_name}</li>
                        <li className={styles.usernamePost}>@{data.user_name}</li>
                    </ul>
                    <ul className="flex-container wrap">
                    </ul>
                </div>
                <p className={styles['card-title']}>Product Name</p>
                <p className={styles['small-desc']}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                    veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                    officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                    eum nihil itaque!,,,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                    veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                    officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                    eum nihil itaque!
                </p>
                <div className={styles['go-corner']}>
                    <div className={styles['go-arrow']}>→</div>
                </div>
                <div className={styles.photocontainer}>
                    <img className={styles.postbanner} src={data.banner} alt="User Banner1" />
                    <img className={styles.postbanner} src={data.banner} alt="User Banner" />
                    <img className={styles.postbanner} src={data.banner} alt="User Banner" />
                </div>


            <div className={styles.post_interactions}>
                <button className={styles.buttons} onClick={likeOnClick} >{liked?"like":"liked"} </button> 
               <button className={styles.buttons}  onClick={showComments}>Comment</button>
            <button className={styles.buttons}>Share</button>
            </div>
             <div>
            <Modal current_value={commentsVisibility} set_value={setCommentsVisibility} target={target}/> 
             </div>
             <div className={styles.post_summary}>
            <p>likes {data.likes.length}</p>
            <p>Comments {comment_data.length}</p>
            </div>
         </div>
            </div>

    )
}