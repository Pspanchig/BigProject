import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserInformaion } from '../Components/Login/RegisterForm';

interface IAccess{
    Dashboard: React.ComponentType;
}

const LoginAccess: React.FC<IAccess> = ({ Dashboard: DashboardComponent }) => {

    const [code, setCode] = useState<string>(localStorage.getItem('UserAC') ?? "")
    const [id, setID] = useState<string>(localStorage.getItem('UserId') ?? "")

    async function GetAccessCode(): Promise<boolean>{
        const response = await fetch(`https://localhost:7010/api/UserInformation/${localStorage.getItem('UserId')}`)
        const data = await response.json()

        console.log(code)
        console.log(id)
        return localStorage.getItem('UserAC') === data.securityCode && data.loggedIn === true;
    }

    const navigate = useNavigate();
    useEffect(() =>{

        const verification = async() =>{
            const access: boolean = await GetAccessCode();
            if(access){                
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