import React from 'react';
import styles from './profile.module.css';
import { user_data } from "@/data_samples/user_data"
import { useState } from "react";










function Content() {
  let data = user_data[0]
  const [viewState, setViewState] = useState("recent posts");

  function changeViewState(event) {
    setViewState(event.target.value);
  }

  return (
    <>
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
    eum nihil itaque!    ,,,        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
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
</div>

</div>






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
        eum nihil itaque!    ,,,        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat
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
    </div>
 
    </div>


    </>


  );
}

export default Content;