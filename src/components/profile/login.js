import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

const Login = ({ isLoggenIn }) => {
    const navigate = useNavigate();
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const admin_username = 'Admin';
    const admin_password = '12345';
    
    const onLogin = (login, password) => {
        if(login === admin_username && password === admin_password) {
            localStorage.setItem('isLogged', true);
            navigate('/profile');
            window.location.reload();
        }else {
            console.log('Wrong!')
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return(
        <div>
        <div>Please login here:</div>
        <form onSubmit={handleSubmit}>
        <br /> 
        <input type="login" onChange={event => setLogin(event.target.value)} />
        <input type="password" onChange={event => setPassword(event.target.value)} />
        
        <button className="btn" onClick={onLogin(login ,password)}>Login</button>
        </form>
        </div>
    )
};

export default Login;
