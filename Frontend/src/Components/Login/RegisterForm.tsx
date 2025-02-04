import './css/RegisterForm.css';
import './css/checkbox.css';
import facebook from './img/Facebook.svg'
import instagram from './img/instagram.svg'
import gmail from './img/gmail.svg'
import { useNavigate } from 'react-router-dom';
import { forwardRef, useState } from 'react';

export interface User{
  username: string;
  email: string;
  password: string
}
export interface Url{
  url: string;
}
const RegisterForm = forwardRef<HTMLDivElement, Url>((props, ref) => {

  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [r_password, setR_password] = useState<string>('')

  async function SendUserDB(): Promise<void>{
    try{
      const response = await fetch(props.url,{
        method: 'Post',
        headers: {
          'Content-Type': 'application/json',
        }, 
        body: JSON.stringify(CreateUser())
      });
  
      if(response.ok) console.log('Evertying worked OK')
      if(!response.ok) console.log('Evertying Failed')
    } catch(e){
      alert(e + "server error");
    }
  }

  
  function CreateUser(): User{
    return {
      username: username,
      email: email,
      password: password
    }
  }

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
        <article className='RForm'>
          <input type='text' placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}/>
          <input type='text' placeholder='Email'value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='password' placeholder='Password' value={password} onChange={(e) =>setPassword(e.target.value)}/>
          <input type='password' placeholder='Password' value={r_password} onChange={(e) => setR_password(e.target.value)}/>
          <div className='AdminInput'>
            <div className="checkbox-apple">
                <input className="yep" id="check-apple" type="checkbox" />
                <label htmlFor="check-apple" /> 
            </div>
            <input type="text" style={{height:'35%'}} placeholder='Are you an admin?'/>
          </div>
          <button style={{cursor: 'pointer'}} onClick={SendUserDB} type='submit'>Login!</button>          
          <p style={{cursor: 'pointer'}} onClick={() => navigate('/')}>Go back to menu</p>
        </article>        
    </section>
    );
});

export default RegisterForm;