import React, { useState } from 'react'
import './Register.css' 
import '../../App.css'
import { Link,useNavigate } from 'react-router-dom'
import Axios from 'axios'
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaUserShield } from 'react-icons/fa';


function Register() {
    //use state to hold our inputs
    const [email, setEmail] = useState('')
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    // On click let us get what the user has entered
    const createUser = (e) => {
        e.preventDefault()
        Axios.post('http://localhost:3002/register', {
            email: email,
            username: userName,
            password: password
        }).then(() => {
            NavigateTo('/')

            setEmail('')
            setUserName('')
            setPassword('')

        })
    }

    return (
        <div className='registerPage flex'>
            <div className="container flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>

                    <div className="textDiv">
                        <h2 className='title'>Create And Sell Extradinary Products</h2>
                        <p>Adopt the peace of nature!</p>
                    </div>
                    <div className="footerDiv flex">
                        <span className="text">Have an account?</span>
                        <Link to={'/'}>
                            <button className='btn'>Login</button>
                        </Link>
                    </div>
                </div>
                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="Logo Image" />
                        <h3>Let Us Know You</h3>
                    </div>
                    <form action="" className='form grid'>
                        {/* <span className='showMessage'>Register Status Will go here</span> */}
                        <div className="inputDiv">
                            <label htmlFor="email">Email</label>
                            <div className="input flex">
                                <MdMarkEmailRead className='icon' />
                                <input type="email" id='email' placeholder='Enter Email' onChange={event => {
                                    setEmail(event.target.value)
                                } } />

                            </div>

                        </div>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id='username' placeholder='Enter Username' onChange={event => {
                                    setUserName(event.target.value)
                                } } />

                            </div>

                        </div>
                        <div className="inputDiv">
                            <label htmlFor="paswword">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className='icon' />
                                <input type="password" id='password' placeholder='Enter Password' onChange={event => {
                                    setPassword(event.target.value)
                                } } />

                            </div>
                        </div>
                        <button type='submit' className='btn flex' onClick={createUser}>
                            <span>Register</span>
                            <AiOutlineSwapRight className='icon' />

                        </button>
                        <span className='forgotPassword'>
                            Forgot your password? <a href="">Click Here</a>

                        </span>
                    </form>
                </div>
            </div>


        </div>
    )
}

export default Register

