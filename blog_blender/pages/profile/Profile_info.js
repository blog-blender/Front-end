import React from 'react';
import styles from './profile.module.css';
import { user_data } from "@/data_samples/user_data"
import { useState } from "react";
import Content from './Page_content'


function ProfileInfo() {
  let data = user_data[0]
  const [viewState, setViewState] = useState("recent posts");

  function changeViewState(event) {
    setViewState(event.target.value);
  }

  return (
//     <div className={styles.whole}>
//       <img className={styles.banner} src={data.banner} alt="User Banner" />
//       <div className={styles.user_info}>
//         <img className={styles.user_photo} src={data.user_photo} alt="User Photo" />
//         <ul className="flex-container nowrap">
//           <li className={styles.name}>{data.first_name + " " + data.last_name}</li>
//           <li className={styles.username}>@{data.user_name}</li>
//         </ul>
//         <ul className="flex-container wrap">
//           <li className={styles.setting_icon}>
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="30"
//               height="30"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               className={styles.setting_icon}
//             >
//               <circle cx="12" cy="12" r="3" />
//               <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
//             </svg>
//           </li>
//         </ul>
//       </div>
//       <span className={styles.post}>ffffffffffffffffffffffffffffffffffff</span>
    
//       <div className={styles.list}>
//   <div className={styles.list}>
//     List of my blogs
//   </div>

// </div>
      
 
//     </div>

<div className={styles.grid}>
  <header className={styles.header}>
    <div className={styles.content}>
    <img className={styles.banner} src={data.banner} alt="User Banner" />
      <div className={styles.user_info}>
        <img className={styles.user_photo} src={data.user_photo} alt="User Photo" />
        <ul className="flex-container nowrap">
          <li className={styles.name}>{data.first_name + " " + data.last_name}</li>
          <li className={styles.username}>@{data.user_name}</li>
        </ul>
        <ul className="flex-container wrap">
          <li className={styles.setting_icon}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={styles.setting_icon}
            >
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  </header>
  <aside className={styles.leftbar}>

  <div className={styles.content}>
    {/* here i mean  */}

    <div className = {styles.cards}>
    <div className = {styles.cardo}>
        <p className = {styles.tip}>Hover Me</p>
        <p className = {styles.text}>Lorem Ipsum</p>
    </div>
    <div className = {styles.cardo}>
        <p className = {styles.tip}>Hover Me</p>
        <p className = {styles.text}>Lorem Ipsum</p>
    </div>
    <div className = {styles.cardo}>
        <p className = {styles.tip}>Hover Me</p>
        <p className = {styles.text}>Lorem Ipsum</p>
    </div>
</div>



{/* to here */}
</div>

    
    
  </aside>
  

  <main className={styles.main}>
    <div className={styles.content}>
      <div className={styles.myposts}>
    <div className= {styles.picman}> </div>
    <div className= {styles.speechbubble }>
      <p className={styles.text1}>Your Posts . . .</p>
      </div>
    <div className= {styles.speechbubblet }> </div>
    <div>

    

    </div>
    </div>
    <Content/>
    </div>
  </main>
  <footer className={styles.footer}>
    <div className={styles.content}>
      <p>Footer</p>
    </div>
  </footer>
</div>


  );
}

export default ProfileInfo;