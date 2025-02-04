import React from 'react';
import './css/MainDashboard.css'

const MainDashboard: React.FC = () => {
  return (
    <section className='MainDashboard'>
        <div className='DashboardContainer'>
          <div className='HeaderName'>Username</div>
          <div className='SectionsDashboard'> 
            <div className='NewsInformation'>

            </div>
            <div className='TasksInformation'>

            </div>
          </div>
        </div>
    </section>
  );
}

export default MainDashboard;