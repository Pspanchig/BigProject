import './css/RegisterForm.css';
import './css/checkbox.css';
import facebook from './img/Facebook.svg'
import instagram from './img/instagram.svg'
import gmail from './img/gmail.svg'
import { useNavigate } from 'react-router-dom';
import { forwardRef } from 'react';

const RegisterForm = forwardRef<HTMLDivElement, {}>((props, ref) => {

    const navigate = useNavigate();

  return (
    <section className='RegisterForm' ref={ref}>
         <h1>Create your account!</h1>
         <h3>Create an account using your social networks</h3>
         <div className='sociaMedia'>
          <img src={facebook} 
               alt="facebook" />
          <img src={gmail}
               alt="gmail" />
          <img src={instagram}
               alt="instagrma" />
        </div>        
        <div className='Horizontalline'>
          <div className='Line'></div>
          <p>or</p>
          <div className='Line'></div>
        </div>
        <form>
          <input type='text' placeholder='username' />
          <input type='text' placeholder='Email' />
          <input type='password' placeholder='Password' />
          <input type='password' placeholder='Password' />
          <div className='AdminInput'>
            <div className="checkbox-apple">
                <input className="yep" id="check-apple" type="checkbox" />
                <label htmlFor="check-apple" /> 
            </div>
            <input type="text" style={{height:'35%'}} placeholder='Are you an admin?'/>
          </div>
          <button type='submit'>Login!</button>          
          <p style={{cursor: 'pointer'}} onClick={() => navigate('/')}>Go back to menu</p>
        </form>
    </section>
    );
});

export default RegisterForm;