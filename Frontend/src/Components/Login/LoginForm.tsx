import { useNavigate } from 'react-router-dom';
import './css/LoginForm.css';
import { forwardRef, useState } from 'react';
import { Url, UserInformaion } from './RegisterForm';

const LoginForm = forwardRef<HTMLDivElement, Url>((props, ref) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>()
  const [password, setPassword] = useState<string>();

  async function Login(): Promise<void>{
    try{
      const response = await fetch(props.url)
      const data: UserInformaion[] = await response.json();   

      const user = data.find(user   => user.username === username && user.password === password)
      console.log(user, " Information");
      
      localStorage.setItem('UserAC', user?.securityCode ?? "")
      localStorage.setItem('UserId', user?.id ?? "")
    } catch(e){
      alert(e)
    }
  }


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
        <article className='LForm'>          
          <input type='text' placeholder='Email' value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button style={{cursor: 'pointer'}} onClick={() => { Login(); navigate('/application')}} type='submit'>Login!</button>          
          <p style={{cursor: 'pointer'}} onClick={() => navigate('/')}>Go back to menu</p>
        </article>
        
        
    </section>
    );
  });

export default LoginForm;