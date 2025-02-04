import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard';

const RouterApplication: React.FC = () => {
  return (
    <Routes>
        <Route path='/' element={<Dashboard/>}/>
    </Routes>
  );
}

export default RouterApplication;