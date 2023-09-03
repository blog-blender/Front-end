import React from 'react';
import styles from './profile.module.css';
import { user_data } from "@/data_samples/user_data"
import { useState } from "react";










function Post(props) {
  let data = user_data[0]
  const [viewState, setViewState] = useState("recent posts");

  function changeViewState(event) {
    setViewState(event.target.value);
  };
  let post_data = props.data

  return (
    <>

{post_data.map((post, index) => (
  <div key={index}>






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
  <p className={styles['card-title']}>{post.title}</p>
  <p className={styles['small-desc']}>
{post.content}
  </p>
  <div className={styles['go-corner']}>
    <div className={styles['go-arrow']}>→</div>
  </div>
  
  <div className={styles.photocontainer}>
  {post.post_photos.map((photo, index) => (
    <img
      key={index}
      className={styles.postbanner}
      src={photo}
      alt={`Post Photo ${index + 1}`}
    />
  ))}
</div>
</div>

</div>





  </div>
))}



    </>


  );
}

export default Post;