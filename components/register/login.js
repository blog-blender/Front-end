import { useState,useContext } from "react";
import { AuthContext } from "../AuthContext";
import React from 'react';
import styles from './login.module.css';
import Link from "next/link";

const LoginPage = (props) => {
    const [formData, setFormData] = useState({
        username: null,
        password: null,
    });

    const textChangeHandler = (event) => {
        const newFormData = {...formData}
        newFormData[event.target.id] = event.target.value
        setFormData(newFormData)
        console.log(formData);
      };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(formData,"submitted");
        props.AuthData.login(formData.username, formData.password)
    };


    return (
        <div className={styles.container} onclick="onclick">
            <div className={styles.top}></div>
            <div className={styles.bottom}></div>
            <div className={styles.center}>





                <section className={styles.section}>
                    <div className={styles.div1}>
                        <div className={styles.div2}>
                            <h1 className={styles.h1}>Login</h1>


                            <form action="" className={styles.form}>
                                <input className={styles.input1} type="text" id="username" name="username" onChange={textChangeHandler} placeholder="username"/>
                                <div class="relative">
                                    <input className={styles.input2}type="password" onChange={textChangeHandler} id="password" name="password" placeholder="Password"/>

                                </div>
                                <div className={styles.div3}>
                                    <a href="#">Forgot your password?</a>
                                </div>
                                <button
                                    style={{ backgroundColor: '#687E8D' }}
                                    className={styles.button1}
                                    type="button"
                                    // onClick={() => { props.AuthData.login("admin", "admin"); }}
                                    onClick={submitHandler}
                                >
                                    Login
                                </button>
                            </form>



                            <div className={styles.div4}>
                                <span onClick={()=>{props.setViewState("register")}}>Don`&apos;`t have an account?</span>
                            </div>
                        </div>


                    </div>
                </section>

            </div>
        </div>
    );
}




export default LoginPage;














