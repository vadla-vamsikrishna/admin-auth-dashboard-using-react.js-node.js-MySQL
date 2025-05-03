import React from 'react';
import './sidebar.css'

import logo from '../../Assets/logo.png'
import { useNavigate } from 'react-router-dom';
import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";




const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add any logout logic here if needed
    // e.g., clear localStorage tokens, session data, etc.
    // localStorage.removeItem('userToken');
    
    // Navigate to the login page - using the root path as in your Login component
    navigate('/', { replace: true });
  };

  return (
    <div className='sideBar grid'>
      <div className="logoDiv">
        <img src={logo} alt="logo"/>
        <h2>Planti</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">

          <li className="listItems">
            <a href="/dashboard" className='menuLink flex' >
              <IoMdSpeedometer className="icon"/>
              <span className="smallText">
                Dash board
              </span>
            </a>
          </li>

          <li className="listItems">
            <a href="/dashboard" className='menuLink flex' >
              <MdDeliveryDining  className="icon"/>
              <span className="smallText">
                My Orders
              </span>
            </a>
          </li>

          <li className="listItems">
            <a href="/dashboard" className='menuLink flex' >
              <MdOutlineExplore className="icon"/>
              <span className="smallText">
                Explore
              </span>
            </a>
          </li>

          <li className="listItems">
            <a href="/dashboard" className='menuLink flex' >
              <BsTrophy className="icon"/>
              <span className="smallText">
                Products
              </span>
            </a>
          </li>

        </ul>
      </div>

      <div className="settingsDiv">
        <h3 className="divTitle">
          SETTINGS
        </h3>
        <ul className="menuLists grid">

          <li className="listItems">
            <a href="/dashboard" className='menuLink flex' >
              <AiOutlinePieChart  className="icon"/>
              <span className="smallText">
                Charts
              </span>
            </a>
          </li>

          <li className="listItems">
            <a href="/dashboard" className='menuLink flex' >
              <BiTrendingUp  className="icon"/>
              <span className="smallText">
                Trends
              </span>
            </a>
          </li>

          <li className="listItems">
            <a href="/dashboard" className='menuLink flex' >
              <MdOutlinePermContactCalendar  className="icon"/>
              <span className="smallText">
                Contact 
              </span>
            </a>
          </li>

          <li className="listItems">
            <a href="/dashboard" className='menuLink flex' >
              <BsCreditCard2Front className="icon"/>
              <span className="smallText">
                Billing
              </span>
            </a>
          </li>

        </ul>
      </div>

      {/* Logout Button */}
      <div className="logoutDiv">
        <button className='logoutButton flex' onClick={handleLogout}>
          <FiLogOut className="icon"/>
          <span className="smallText">
            Logout
          </span>
        </button>
      </div>

      <div className="sideBarCard">
        <BsQuestionCircle className='icon'/>
        <div className="cardContent">
          <div className="circle1"></div>
          <div className="circle2"></div>
            
          <h3>Help Center</h3>
          <p>Need help? We're here to help.</p>
          <button className='btn'>Go to Help Center</button>
        </div>
      </div>

    </div>
  )
};

export default Sidebar;