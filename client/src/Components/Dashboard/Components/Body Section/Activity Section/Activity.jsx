import React from 'react';
import './activity.css'
import { BsArrowRightShort } from 'react-icons/bs';
import user from '../../../Assets/user2.jpg'
import user1 from '../../../Assets/user3.jpg'
import user2 from '../../../Assets/user4.jpg'
import user3 from '../../../Assets/user5.jpg'
import user4 from '../../../Assets/user6.jpg'

const Activity = () => {
  return (
    <div className='activitySection'>
      <div className="heading flex">
        <h1>recent Activity</h1>
        <button className='btn flex'>
          See All 
          <BsArrowRightShort className="icon"/>
        </button>
      </div>
      <div className="secContainer grid">
        <div className="singleCustomer flex">
          <img src={user} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Master Su</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={user1} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Kriti</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={user2} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">krish</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={user3} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Liki</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
        <div className="singleCustomer flex">
          <img src={user4} alt="Customer Image" />
          <div className="customerDetails">
            <span className="name">Vamsi</span>
            <small>Ordered a new plant</small>
          </div>
          <div className="duration">
            2 min ago
          </div>
        </div>
      </div>

    </div>
  )
};

export default Activity;