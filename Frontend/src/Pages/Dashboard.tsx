import React from 'react';
import './Css/Dashboard.css'
import NavBar from '../Shared/NavBar';
import MainDashboard from '../Components/Dashboard/MainDashboard';


const Dashboard: React.FC = () => {
  return (
    <main className='Dashboard'>    
        <NavBar/>     
        <MainDashboard/>
    </main>
  );
}

export default Dashboard;