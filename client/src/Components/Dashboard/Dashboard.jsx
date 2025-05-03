import React from 'react';
import Body  from '../Dashboard/Components/Body Section/Body'
import Sidebar from '../Dashboard/Components/SideBar Section/Sidebar';
const Dashboard = () => {
  return (
    <div className='dashboard flex'>
      <div className="dashboardContainer flex">
        <Sidebar/>
        <Body/>

      </div>
    </div>
  );
};

export default Dashboard;
