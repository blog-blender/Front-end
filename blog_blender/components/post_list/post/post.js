import { useState } from "react";
import Modal from "@/components/modal";
import Photo from "@/components/image_slider/image";
import CommentList from "@/components/comment_list/comment_list";
import 'font-awesome/css/font-awesome.min.css';
import classNames from 'classnames';
import styles from './post.module.css';
import axios from "axios";
export default function Post(props) {

    const [postData, setPostData] = useState(props.post);
    let AuthData = props.AuthData
    const [liked, setLiked] = useState((postData.likes)?postData.likes.includes(AuthData.user.id):false);
    const [commentsVisibility, setCommentsVisibility] = useState(false);
    const target = (postData.comments)?<CommentList postData={postData.comments} AuthData={props.AuthData} postId={postData.id} blogId={postData.blog_id}/>:<></>
    async function likeOnClick(event) {
        event.preventDefault();
        let url,method,payload,params
    
        
        if(props.initialData){
            method = "delete"
          url = `http://127.0.0.1:8000/api/v1/blogs/update/`
          payload ={
              title: blogDatail.title,
            description: blogDatail.description,
            banner: blogImages.upload.banner,
            blogPic: blogImages.upload.blogPic,
            }
            config.params = {blog_id:props.initialData.id}
            console.log(payload.banner,"uploaded",payload.blogPic);
        }
        else{
          method = "post"
          url = 'http://127.0.0.1:8000/api/v1/blogs/createblog/'
          payload ={
            title: blogDatail.title,
            description: blogDatail.description,
            banner: blogImages.upload.banner,
            blogPic: blogImages.upload.blogPic,
            }
        }

        const config = {
          headers: {Authorization : `Bearer ${props.AuthData.token.access}`,},
          params: params,
        };
        
        axios[method](url, formData, config)
        .then(function (response) {
            console.log(response);
            if(liked){
                setPostData(postData.likes.filter((object)=>{return object.user_id.id != AuthData}))
            }
            else{
                let temp = [...postData]
                temp.push(response)
                setPostData(temp)
            }
            setLiked(!liked)
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



        // <div className={styles.post_photos}>
        //     {(postData.photo)?<Photo photos={postData.photo}/>:<p>no photos</p>}
        // </div>
        
        // <div className={styles.post_summary}>
        //     <p>likes {(postData.likes)?postData.likes.length:69}</p>
        //     <p>Comments {(postData.likes)?postData.comments.length:69}</p>
        // </div>


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
    return (

        <>

            <div className={styles.card}>

                <div className={styles.leftButtonsContainer}>
                    <div className="imgName">
                        <img className={styles.user_photoPost} src={postData.user_photo} alt="User Photo" />
                        <ul className="flex-container nowrap">
                            <li className={styles.namePost}>{postData.first_name + " " + postData.last_name}</li>
                            {/* <li className={styles.usernamePost}>eman {postData.user_name}</li> */}
                        </ul>
                        <ul className="flex-container wrap">
                        </ul>
                    </div>
                    <div className={styles.icondiv}>
                        <button onClick={editPost}>
                            <i className="fa fa-pencil" aria-hidden="true" />
                        </button>
                        <button onClick={deletePost}>
                            <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                    </div>


                </div>


                <div className={styles.user_infoPost}>
                    <img className={styles.user_photoPost} src={postData.user_photo} alt="User Photo" />
                    <ul className="flex-container nowrap">
                        <li className={styles.namePost}>{postData.first_name + " " + postData.last_name}</li>
                        <li className={styles.usernamePost}>@{postData.user_name}</li>
                    </ul>
                    <ul className="flex-container wrap">
                    </ul>
                </div>
                <p className={styles['card-title']}>{postData.content}</p>
                <p className={styles['small-desc']}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                    veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                    officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                    eum nihil itaque!,,,Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
                    veritatis nobis saepe itaque rerum nostrum aliquid obcaecati odio
                    officia deleniti. Expedita iste et illum, quaerat pariatur consequatur
                    eum nihil itaque!
                </p>
                    <Photo photos={postData.photo?postData.photo:postData.post_photos}/>
                <div className={styles['go-corner']}>
                    <div className={styles['go-arrow']}>→</div>
                </div>
                {/* <div className={styles.photocontainer}>
                    <img className={styles.postbanner} src={postData.banner} alt="User Banner1" />
                    <img className={styles.postbanner} src={postData.banner} alt="User Banner" />
                    <img className={styles.postbanner} src={postData.banner} alt="User Banner" />
                </div> */}

                <div className={styles.numbers}>

                    <p><i
                        className={classNames('fa', {
                            'fa-thumbs-up': !liked,
                            'fa-thumbs-o-up': liked,
                        })}
                        aria-hidden="true"
                    /> <span style={{ marginRight: '1em' }}>{postData.likes.length}</span> 
                    </p>
                    <p><i className="fa fa-comment-o" aria-hidden="true" />{(postData.likes)?postData.comments.length:-1}</p>
                        {/* style={{ marginLeft: '0.1em' ,marginRight:'0.1em'}} */}
                        
                    
                    
                    <p><i className="fa fa-comment-o" aria-hidden="true" />{(postData.comments) ? postData.comments.length : -1}</p>

                </div>



                <div className={styles.post_interactions}>

                    <button className={styles.buttons} onClick={likeOnClick} >
                        <i
                            className={classNames('fa', {
                                'fa-thumbs-up': !liked,
                                'fa-thumbs-o-up': liked,
                            })}
                            aria-hidden="true"
                            style={{ fontSize: '25px' ,marginRight: '8px' }}
                        />
                    </button>

                    <button className={styles.buttons} onClick={showComments}><i className="fa fa-comment-o" aria-hidden="true" style={{ fontSize: '25px' }}/></button>
                    <button className={styles.buttons}><i className="fa fa-share" aria-hidden="true" style={{ fontSize: '25px' }}/></button>
                </div>
                <div>
                    <Modal current_value={commentsVisibility} set_value={setCommentsVisibility} target={target} className="z-40"/>
                </div>
                <div className={styles.post_summary}>

                </div>
            </div>
        </>

    )
}