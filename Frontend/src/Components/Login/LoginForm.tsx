import { useNavigate } from 'react-router-dom';
import './css/LoginForm.css';
import { forwardRef } from 'react';

const LoginForm = forwardRef<HTMLDivElement, {}>((props, ref) => {
  const navigate = useNavigate();
  return (
    <section ref={ref} className='LoginForm'>
        <h1>Login with your account!</h1>
        <h3>Login using your social networks</h3>
        <div className='sociaMedia'>
          <img src="https://www.svgrepo.com/show/494273/facebook-round.svg" 
               alt="facebook" />
          <img src="https://www.svgrepo.com/show/146973/gmail.svg"
               alt="gmail" />
          <img src="https://www.svgrepo.com/show/494277/instagram-round.svg"
               alt="instagrma" />
        </div>
        <div className='Horizontalline'>
          <div className='Line'></div>
          <p>or</p>
          <div className='Line'></div>
        </div>
        <form>
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <button type='submit'>Login!</button>          
          <p style={{cursor: 'pointer'}} onClick={() => navigate('/')}>Go back to menu</p>
        </form>
    </section>
    );
  });

export default LoginForm;