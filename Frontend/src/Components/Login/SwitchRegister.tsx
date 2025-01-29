import React from 'react';
import './css/SwitchRegister.css';
const SwitchRegister: React.FC = () => {
    
  return (
    <section className='SwitchRegister'>
        <h1>New here?</h1>
        <h4 style={{width: '80%', textAlign: 'center'}}>Create a new account and check all the functionalities this website can offer you!</h4>
        <button>Sign up</button>
    </section>
  );
}

export default SwitchRegister;