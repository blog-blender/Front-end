import { useState } from "react";
import Modal from "@/components/modal";
import Photo from "@/components/image_slider/image";
import CommentList from "@/components/comment_list/comment_list";
import 'font-awesome/css/font-awesome.min.css';
import classNames from 'classnames';
import styles from './post.module.css';
import axios from "axios";
import Swal from "sweetalert2";

export default function Post(props) {
   
    const [postData, setPostData] = useState(props.data);
    // console.log(props,"POST PROPS");
    let AuthData = props.AuthData
    const [liked, setLiked] = useState((postData.likes)?postData.likes.includes(AuthData.user.id):false);
    const [commentsVisibility, setCommentsVisibility] = useState(false);
    const target = (postData.comments)?<CommentList userPic={props.userData.profile_pic} data={postData.comments} AuthData={props.AuthData} postId={postData.id} blogId={postData.blog_id}/>:<></>
    // KEEP
    async function likeOnClick(event) {
        event.preventDefault();
        let url,method,payload,params
    
        
        if(liked){
            let tagretId = postData.likes.filter((object)=>{return object.user_id == AuthData.user.id})
            tagretId = tagretId[0].id
            console.log(tagretId,"TRGGGGGGGGGGGG");
            method = "delete"
            url = `https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/like/delete/${tagretId}/`
            payload ={
                }
            params = {user_id:AuthData.user.id,post_id:postData.id}
        }
        else{
            method = "post"
            url = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/like/'
            payload ={
                }
            params = {user_id:AuthData.user.id,post_id:postData.id}
        }

        const config = {
          headers: {Authorization : `Bearer ${props.AuthData.token.access}`,},
          params: params,
        };

        axios[method](url, payload, config)
        .then(function (response) {
            console.log(response);
            if(liked){
                let temp = {...postData}
                temp.likes=postData.likes.filter((object)=>{return object.user_id != AuthData.user.id})
                setPostData(temp)
                // console.log(postData.likes.length,"likes");
            }
            else{
                let temp = {...postData}
                temp.likes.push(response.data)
                setPostData(temp)
                // console.log(postData.likes.length,"likes");
            }
            // console.log(liked);
            setLiked(!liked)
            // console.log(liked);
          })
          .catch(function (error) {
            console.log(error);
          });

          axios[method](url,config)
          .then(function (response) {
              console.log(response);
              if(liked){
                  let temp = {...postData}
                  temp.likes=postData.likes.filter((object)=>{return object.user_id != AuthData.user.id})
                  setPostData(temp)
                  // console.log(postData.likes.length,"likes");
              }
              else{
                  let temp = {...postData}
                  temp.likes.push(response.data)
                  setPostData(temp)
                  // console.log(postData.likes.length,"likes");
              }
              // console.log(liked);
              setLiked(!liked)
              // console.log(liked);
            })
            .catch(function (error) {
              console.log(error);
            });
    }

    function showComments(event) {
        document.body.style.overflow = "hidden"
        setCommentsVisibility(true)
    }

    const deletePost = (event) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            const url = `https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/posts/delete/${postData.id}/`
            const params = {user_id:AuthData.user.id,post_id:postData.id}
            const config = {
              headers: {Authorization : `Bearer ${props.AuthData.token.access}`,},};
            console.log("DELETE POST",url,config);
            axios.delete(url,config)
            .then(function (response) {
                console.log(response); 
                props.setRefetchTrigger(true)
                console.log(props.setRefetchTrigger,"FETCH STATUS");
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
              })
              .catch(function (error) {
                console.log(error);
              });
              
            }
          })
        
    };
    
    const copyLink = (event) => {
        event.preventDefault()
        const baseUrl = 'http://localhost:3000/'
        const pageUrl = 'post/'
        let url = `${baseUrl}${pageUrl}${postData.id}`
        navigator.clipboard.writeText(url).then(
            () => {
                Swal.fire({
                    position: 'top-end',
                    title: 'Copied!!',
                    showConfirmButton: false,
                    timer: 800
                  })
            },
            () => {
              alert("somthing went wrong")
            },
          );
    };

    console.log("AuthData.user.id == postData.Auther_id",AuthData.user.username , postData);
    return (<>

        <div className={styles.card}>
            <div className={styles.leftButtonsContainer}>
                <div className="imgName">
                <div className={styles.user_infoPost}>
                    <img className={styles.user_photoPost} src={`http://res.cloudinary.com/dhaem8m4p/${postData.Auther_id.profile_pic}`} alt="User Photo" />
                    <ul className="flex-container nowrap">
                        <li className={styles.namePost}>{postData.Auther_id.first_name + " " + postData.Auther_id.last_name}</li>
                        <li className={styles.usernamePost}>@{postData.Auther_id.username}</li>
                    </ul>
                    
                    {AuthData.user.username == postData.Auther_id.username?<div className={styles.icondiv} >
                        <button onClick={()=>{props.setViewPostForm(postData)}}>
                            <i className="fa fa-pencil" aria-hidden="true" />
                        </button>
                        <button onClick={deletePost}>
                            <i className="fa fa-trash-o" aria-hidden="true" />
                        </button>
                    </div>:<></>}
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