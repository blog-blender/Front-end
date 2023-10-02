import { useState } from "react";
import React from 'react';
import axios from "axios";
import styles from './register.module.css';
import Swal from "sweetalert2";
const RejesterPage = (props) => {
  const [formData, setFormData] = useState({
    username: null,
    password: null,
    confirmPassword: null,
  });

  const textChangeHandler = (event) => {
    const newFormData = { ...formData }
    newFormData[event.target.id] = event.target.value
    setFormData(newFormData)
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (formData.password != formData.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong!',
        text: `passwords don't match!`
      })
      return
    }
    const failCode = 400
    let url, payload, method
    method = "post"
    url = `${process.env.NEXT_PUBLIC_BACKEND_URL}api/v1/accounts/register`
    payload = {
      username: formData.username,
      password: formData.password,
    }
    const config = {

    };

    let result = await axios[method](url, payload, config)
      .then(function (response) {
        console.log(response);
        props.setViewState("login")
      })
      .catch(function (error) {
        console.log(error, "error");
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: `${error.response.data.password ? "password: " + error.response.data.password : ""}\n${error.response.data.username ? "username: " + error.response.data.username : ""}`
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
  )
}

export default RejesterPage;