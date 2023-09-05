import { useState } from "react";
import Modal from "@/components/modal";
import Photo from "@/components/image_slider/image";
import CommentList from "@/components/comment_list/comment_list";
import 'font-awesome/css/font-awesome.min.css';
import classNames from 'classnames';
import styles from './post.module.css';
import axios from "axios";
export default function Post(props) {
    // {
    //     "id": 22,
    //     "Auther_id": {
    //         "username": "Ibraheem",
    //         "profile_pic": "http://127.0.0.1:8000/media/profile_pics/TNGRRLUMA-U04PA8EC6ET-3c0112671aa0-512.jpg"
    //     },
    //     "title": "The Power of Literature: How Reading Enhances Empathy",
    //     "content": "Explore the link between reading and empathy. This post discusses how books can broaden our perspective, increase our understanding of others, and ultimately make us more compassionate individuals.",
    //     "blog_id": 8,
    //     "comments": [],
    //     "photo": [
    //         {
    //             "id": 66,
    //             "data": "http://127.0.0.1:8000/media/post_picture/22-1.jfif",
    //             "post_id": 22
    //         },
    //         {
    //             "id": 67,
    //             "data": "http://127.0.0.1:8000/media/post_picture/22-2.jfif",
    //             "post_id": 22
    //         },
    //         {
    //             "id": 68,
    //             "data": "http://127.0.0.1:8000/media/post_picture/22-3.webp",
    //             "post_id": 22
    //         }
    //     ],
    //     "likes": []
    // },
    const [postData, setPostData] = useState(props.data);
    console.log(postData,"post");
    let AuthData = props.AuthData
    const [liked, setLiked] = useState((postData.likes)?postData.likes.includes(AuthData.user.id):false);
    const [commentsVisibility, setCommentsVisibility] = useState(false);
    const target = (postData.comments)?<CommentList postData={postData.comments} AuthData={props.AuthData} postId={postData.id} blogId={postData.blog_id}/>:<></>
    
    async function likeOnClick(event) {
        event.preventDefault();
        let url,method,payload,params
    
        
        if(liked){
            let tagretId = postData.likes.filter((object)=>{return object.user_id == AuthData.user.id})
            tagretId = tagretId[0].id
            console.log(tagretId,"TRGGGGGGGGGGGG");
            method = "delete"
            url = `http://127.0.0.1:8000/api/v1/posts/like/delete/${tagretId}/`
            payload ={
                }
            params = {user_id:AuthData.user.id,post_id:postData.id}
        }
        else{
            method = "post"
            url = 'http://127.0.0.1:8000/api/v1/posts/like/'
            payload ={
                }
            params = {user_id:AuthData.user.id,post_id:postData.id}
        }

        const config = {
          headers: {Authorization : `Bearer ${props.AuthData.token.access}`,},
          params: params,
        };
        
        axios[method](url,payload,config)
        .then(function (response) {
            console.log(response);
            if(liked){
                let temp = {...postData}
                temp.likes=postData.likes.filter((object)=>{return object.user_id != AuthData.user.id})
                setPostData(temp)
                console.log(postData.likes.length,"likes");
            }
            else{
                let temp = {...postData}
                temp.likes.push(response.data)
                setPostData(temp)
                console.log(postData.likes.length,"likes");
            }
            console.log(liked);
            setLiked(!liked)
            console.log(liked);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    function showComments(event) {
        document.body.style.overflow = "hidden"
        setCommentsVisibility(true)
    }

    const editPost = (event) => {
        // Add your code to handle editing the post
    };

    const deletePost = (event) => {
        // Add your code to handle deleting the post
        if (window.confirm('Are you sure you want to delete this post?')) {
            alert('Deleting the post');
        }
        
    };
    
    const copyLink = (event) => {
        event.preventDefault()
        const baseUrl = 'http://localhost:3000/'
        const pageUrl = 'render_blog_detalis/'
        let url = `${baseUrl}${pageUrl}${postData.id}`
        navigator.clipboard.writeText(url).then(
            () => {
              alert("copied!")
            },
            () => {
              alert("somthing went wrong")
            },
          );
          // TODO add toast
    };

    
    return (<>

        <div className={styles.card}>

            <div className={styles.leftButtonsContainer}>
                <div className="imgName">
                <div className={styles.user_infoPost}>
                    <img className={styles.user_photoPost} src={postData.Auther_id.profile_pic} alt="User Photo" />
                    <ul className="flex-container nowrap">
                        <li className={styles.namePost}>{postData.Auther_id.first_name + " " + postData.Auther_id.last_name}</li>
                        <li className={styles.usernamePost}>@{postData.Auther_id.username}</li>
                    </ul>
                    
                    <div className={styles.icondiv} >
                        <button onClick={editPost}>
                            <i className="fa fa-pencil" aria-hidden="true" />
                        </button>
                        <button onClick={deletePost}>
                            <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                
                </div>



            </div>

            <p className={styles['card-title']}>{postData.title}</p>
            <p className={styles['small-desc']}>{postData.content}</p>

            <Photo photos={postData.photo ? postData.photo : postData.post_photos} />
            <div className={styles['go-corner']}>
                <div className={styles['go-arrow']}>→</div>
            </div>

            <div className={styles.numbers}>

                <p><i
                    className={classNames('fa',
                        'fa-thumbs-up',
                        'fa-thumbs-o-up',)
                    }
                    aria-hidden="true"
                /> <span style={{ marginRight: '1em' }}>{postData.likes.length}</span>
                </p>
                <p><i className="fa fa-comment-o" aria-hidden="true" style={{ marginRight: '3px' }} />{(postData.likes) ? postData.comments.length : -1}</p>
            </div>
            <div className={styles.post_interactions}>

                <button className={styles.buttons} onClick={likeOnClick} >
                    <i
                        className={classNames('fa', {
                            'fa-thumbs-up': !liked,
                            'fa-thumbs-o-up': liked,
                        })}
                        aria-hidden="true"
                        style={{ fontSize: '25px', marginRight: '8px' }}
                    />
                </button>

                <button className={styles.buttons} onClick={showComments}><i className="fa fa-comment-o" aria-hidden="true" style={{ fontSize: '25px' }} /></button>
                <button className={styles.buttons} onClick={copyLink}><i className="fa fa-share" aria-hidden="true" style={{ fontSize: '25px' }} /></button>
            </div>
            <div>
                <Modal current_value={commentsVisibility} set_value={setCommentsVisibility} target={target} />
            </div>
            <div className={styles.post_summary}>

            </div>
        </div>
    </>
)
}