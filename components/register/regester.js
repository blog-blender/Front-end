import { useState} from "react";
import React from 'react';
import axios from "axios";
import styles from './register.module.css';
import Swal from "sweetalert2";
const RejesterPage = (props) => {
  const [formData, setFormData] = useState({
      username: null,
      password: null,
      confirmPassword:null,
  });

  const textChangeHandler = (event) => {
    const newFormData = {...formData}
    newFormData[event.target.id] = event.target.value
    setFormData(newFormData)
  };

  const submitHandler = async (event)=>{
    event.preventDefault();
    const failCode = 400
    let url,payload,method
    
    method = "post"
    url = 'https://back-end-git-ibraheem-deploy-blog-blender.vercel.app/api/v1/accounts/register'
    payload = {
      username:formData.username,
      password:formData.password,
    }
    const config = {
      
    };

    let result = await axios[method](url, payload, config)
      .then(function (response) {
        console.log(response);
        props.setViewState("login")
      })
      .catch(function (error) {
        console.log(error,"error");
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: `${error.response.data.password?"password: "+ error.response.data.password:""}\n${error.response.data.username?"username: "+error.response.data.username:""}`
        })
      });

    // let data = await result.json()
    // if(result.response.status == failCode)
    // console.log(data);
      // alert(`User Name: ${result.response.data.username}\nPassword: ${result.response.data.password}`)
    // TODO add error message when user name is alrady taken or password and confirm are difirant
    
  };
    return (

      <div className={styles.container} >
      <div className={styles.top}></div>
      <div className={styles.bottom}></div>
      <div className={styles.center}>
        <section className={styles.section}>
          <div className={styles.div1}>
            <div className={styles.div2}>
              <h1 className={styles.h1}>Sign Up</h1>
              <form action="" className={styles.form}>
                <input className={styles.input1} type="username" id="username" name="username" onChange={textChangeHandler} placeholder="usernasme" />
                <input className={styles.input1} type="password" id="password" onChange={textChangeHandler} name="password" placeholder="Password" />
                <div class="relative">
                  <input className={styles.input1} type="password" id="confirmPassword" onChange={textChangeHandler} name="password" placeholder="Confirm Password" />
                </div>
                <div className="flex items-center">
  <input className={styles.input2} type="checkbox" />
  <div className="text-indigo-900 text-xs">Remember Me</div>
</div>
                <button
                  style={{ backgroundColor: '#687E8D' }}
                  className={styles.button1}
                  type="button"
                onClick={submitHandler}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>



      //   <section class="bg-gray-50 min-h-screen flex items-center justify-center">
      //   <div class="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
      //     <div class="md:w-1/2 px-8 md:px-16">
      //       <h2 class="font-bold text-2xl text-[#0D9488]">Sign Up</h2>
            
           
      //       <form action="" class="flex flex-col gap-4">
      //         <input class="p-2 mt-5 rounded-xl border" type="text" onChange={textChangeHandler} id="username" name="username" placeholder="username" />
      //           <input class="p-2 mt-3 rounded-xl border w-full" type="password" onChange={textChangeHandler} id="password" name="password" placeholder="Password" />

      //         <div class="relative">
      //           <input class="p-2 mt-3 rounded-xl border w-full" type="password" onChange={textChangeHandler} id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" />

      //         </div>

      //         <div className="mt-5 text-xs border-b border-[#0D9488] py-4 text-[#0D9488]">
      //             <input type="checkbox" />
      //             {/* <a href="#">Forgot your password?</a> */}
      //             <span className="remember ml-2 font-bold text-xl">Remember me</span>
      //           </div>

      //         <button
      //             style={{backgroundColor:'#0D9488'}}
      //             class="block text-white  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      //             type="button"
      //             onClick={submitHandler}
      //           >
      //             Sign Up
      //           </button>
      //       </form>
      //     </div>
      
      //     <div class="md:block hidden w-1/2">
      //       <img className="rounded-2xl" src="https://images.unsplash.com/photo-1603277578692-c699f37c67d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGlnaHQlMjBncmVlbnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80" />
      //     </div>
      //   </div>
      // </section>
    )
}

export default RejesterPage;