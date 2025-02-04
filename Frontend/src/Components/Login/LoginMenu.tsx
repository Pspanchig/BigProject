import React, { useRef, useState } from 'react';
import LoginForm from './LoginForm';
import SwitchRegister from './SwitchRegister';
import SwitchLogin from './SwitchLogin';
import RegisterForm from './RegisterForm';
import './css/LoginMenu.css';

const LoginMenu: React.FC = () => {
  const login = useRef<HTMLDivElement>(null);
  const register = useRef<HTMLDivElement>(null);
  const [showRegister, setShowRegister] = useState(false);
  const [createUserUrl] = useState<string>('https://localhost:7293/identity/register')

  return (
    <section className='LoginMenu'>
      {
        showRegister === false &&(
          <>
            <LoginForm ref={login}></LoginForm>
            <SwitchRegister LoginForm={login} Switch={setShowRegister}/>
          </>
        )
        }
      {
        showRegister === true &&(
          <>
            <RegisterForm ref={register} url={createUserUrl}/>
            <SwitchLogin LoginForm={register} Switch={setShowRegister}/>
          </>
        )
      }
      
    </section>
  );
}

export default LoginMenu;