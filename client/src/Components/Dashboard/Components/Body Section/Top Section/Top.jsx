import React from 'react';
import './top.css'

import { BiSearchAlt } from "react-icons/bi";
import { LuMessageCircleMore } from "react-icons/lu";
import { MdOutlineNotificationsNone } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";

import img from '../../../Assets/user1.png'
import img2 from '../../../Assets/img3.png'
import video from '../../../Assets/video.mp4'

const Top = () => {
  return (
    <div className='topSection'>
      <div className="headerSection flex">
        <div className="title">
          <h1>Welcome</h1>
          <p>Hello , Welcome Back</p>
        </div>

        <div className="searchBar flex">
          <input type="text" placeholder="Search" />
          <BiSearchAlt className='icon' />          
        </div>

        <div className="adminDiv flex">
          <LuMessageCircleMore className='icon' />
          <MdOutlineNotificationsNone className='icon' />

          <div className="adminImage">
            <img src={img} alt='adminImage' />
          </div>
        </div>

      </div>

      <div className="cardSection flex">
        
        <div className="rightCard flex">
          <h1>Create and Sell Products</h1>
          <p>Bringing nature closer, one plant at a time.</p>

          <div className="buttons flex">
            <button className="btn">Explore More</button>
            <button className="btn transparent">Top Sellers</button>
          </div>

          <div className="videoDiv">
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className="leftCard flex">
          <div className="main flex">
            <div className="textDiv">
              <h1>My Stat</h1>

              <div className="flex">
                
                <span>
                  Today <br/> <small>4 Orders</small> 
                </span>

                <span>
                  This Month <br/> <small>121 Orders</small> 
                </span>

              </div>

              <span className="flex link">
                Go to my Orders
                <BsArrowRightShort className='icon'/>
              </span>


            </div>

            <div className="imgDiv">
              <img src={img2} alt="ImageName" />
            </div>

             <div className="sideBarCard">
                    <BsQuestionCircle className='icon'/>
                    <div className="cardContent">
                      <div className="circle1"></div>
                      <div className="circle2"></div>
                        
                      <h3>Help Center</h3>
                      <p>Need help? We’re here to help.</p>
                      <button className='btn'>Go to Help Center</button>
                    </div>
             </div>

          </div>
        </div>

      </div>
    </div>
  )
};

export default Top;