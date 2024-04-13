import React from 'react';
import "./Login.css";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

const Register = () => {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Register</h1>
                <div className='input-box'>
                    <input type="text" placeholder='Name' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Bio' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="text" placeholder='Username' required />
                    <FaUser className='icon' />
                </div>
                <div className='input-box'>
                    <input type="password" placeholder='Password' required />
                    <FaLock className='icon' />
                </div>

                <div className="remember-forgot">
                    <a href="/">Forgot password?</a>
                </div>

                <button type='submit'>Login</button>

                <div className="register-link">
                    <p>Already have a account? <a href="/">Login</a></p>
                </div>
            </form>
        </div>
    )
}

export default Register