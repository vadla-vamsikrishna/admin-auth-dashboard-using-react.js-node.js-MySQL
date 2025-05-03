import React,{useEffect, useState} from 'react'
import './Login.css' 
import '../../App.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios  from 'axios'
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";

const Login = () => {
    //UseState hook to store inputs
    const [loginuserName, setloginUserName] = useState('')
    const [loginpassword, setloginPassword] = useState('')
    const navigateTo = useNavigate()
    const [loginStatus, setLoginStatus]= useState('')
    const [statusHolder, setStatusHolder]= useState('message')
    // On click let us get what the user has entered
     const loginUser = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:3002/login', {
            loginusername: loginuserName,
            loginpassword: loginpassword
        }).then((response) => {
            console.log()

            if(response.data.message || loginuserName =='' ||loginpassword==''){
                navigateTo('/')
                setLoginStatus(`Credentials Don,t Exist`)
            }
            else{
               navigateTo('/dashboard') 
            }
        })
    }

    useEffect(()=>{
        if(loginStatus !== ''){
            setStatusHolder('showMessage') //shows message
            setTimeout(()=>{
                setStatusHolder('message') //hides it after 4 sec
            },4000);
        }
    },[loginStatus])

//lets clear the form submit
   const onSubmit =()=>{
    setloginUserName('')
    setloginPassword
   }

  return (
    <div className='loginPage flex'>
        <div className="container flex">
            <div className="videoDiv">
                <video src={video} autoPlay muted loop></video>

            <div className="textDiv">
                <h2 className='title'>Create And Sell Extradinary Products</h2>
                <p>Adopt the peace of nature!</p>
            </div>
            <div className="footerDiv flex">
                <span className="text">Don't have an account?</span>
                <Link to={'/register'}>
                <button className='btn'>Sign Up</button>
                </Link>
            </div>
            </div>
            <div className="formDiv flex">
                <div className="headerDiv">
                    <img src={logo} alt="Logo Image" />
                    <h3>welcome Back!</h3>
                </div>
                <form action="" className='form grid' onSubmit={onSubmit}>
                    <span className={statusHolder}>{loginStatus}</span>
                    <div className="inputDiv">
                        <label htmlFor="username">Username</label>
                        <div className="input flex">
                        <FaUserShield className='icon' />
                        <input type="text" id='username' placeholder='Enter Username' onChange={event => {
                                    setloginUserName(event.target.value)
                                } } />

                        </div>
                        
                    </div>
                    <div className="inputDiv">
                        <label htmlFor="paswword">Password</label>
                        <div className="input flex">
                        <BsFillShieldLockFill  className='icon' />
                        <input type="password" id='password' placeholder='Enter Password' onChange={event => {
                                    setloginPassword(event.target.value)
                                } } />

                        </div>
                        </div>
                        <button type='submit' className='btn flex' onClick={loginUser}>
                            <span>Login</span>
                            <AiOutlineSwapRight className='icon'/>
                        
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

export default Login
