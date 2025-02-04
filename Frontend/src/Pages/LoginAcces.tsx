import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface IAccess{
    Dashboard: React.ComponentType;
}

const LoginAccess: React.FC<IAccess> = ({ Dashboard: DashboardComponent }) => {

    const navigate = useNavigate();
    useEffect(() =>{

        const verification = () =>{
            if(true){                
            } else{
                navigate('/')
            }
        }
        verification();
    },[])    

    return (
        <DashboardComponent/>
  );
}

export default LoginAccess;