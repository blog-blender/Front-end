import { useEffect, useState } from "react";
import { useAuth,AuthContext } from "../AuthContext";
import { useContext } from "react";
import React from 'react';
import styles from './login.module.css';

const LoginPage = () => {
  let context = useContext(AuthContext)
  const [openModal, setOpenModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission, e.g., validate and send data to a server
        console.log(formData);
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
                <input className={styles.input1} type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                <div class="relative">
                    <input className={styles.input2} type="password" onChange={(e) => { setPassword(e.target.value) }} name="password" placeholder="Password" />

                </div>
                <button
                    style={{ backgroundColor: '#0D9488' }}
                    className={styles.button1}
                    type="button"
                    onClick={() => { setOpenModal(true); context.login("admin", "admin"); }}
                >
                    Login
                </button>
            </form>

            <div className={styles.div3}>
                <a href="#">Forgot your password?</a>
            </div>

            <div className={styles.div4}>
                <p>Don't have an account?</p>
                <button
                    style={{ backgroundColor: '#0D9488' }}
                    className={styles.button2}
                    type="button"
                >
                    Register
                </button>
            </div>
        </div>


    </div>
</section>

            </div>
        </div>
    );
}




export default LoginPage;














