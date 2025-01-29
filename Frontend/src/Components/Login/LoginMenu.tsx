import React from 'react';
import LoginForm from './LoginForm';
import SwitchRegister from './SwitchRegister';
import './css/LoginMenu.css';

const LoginMenu: React.FC = () => {
  return (
    <section className='LoginMenu'>
         <LoginForm/>
         <SwitchRegister/>
    </section>
  );
}

export default LoginMenu;