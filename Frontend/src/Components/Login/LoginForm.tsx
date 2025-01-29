import React from 'react';
import { useNavigate } from 'react-router-dom';
import './css/LoginForm.css';

const LoginForm: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className='LoginForm'>
        <h1>Login with your account!</h1>
        <h3>Login using your social networks</h3>
        <div className='social-media'>
          <button className='facebook'>Facebook</button>
          <button className='google'>Google</button>
          <button className='google'>Google</button>
        </div>
        <p>or</p>
        <form>
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Login</button>          
          <p style={{cursor: 'pointer'}} onClick={() => navigate('/')}>Go back to menu</p>
        </form>
    </section>
  );
}

export default LoginForm;