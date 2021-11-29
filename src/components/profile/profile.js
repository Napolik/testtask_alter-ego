import React from "react";
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLogged');
    console.log('Proofile:' + isLoggedIn);

    if(isLoggedIn === true) {
        return(
            <div>
                {isLoggedIn}
                <h2>You Log in to you secrets page</h2>
            </div>
        )
    }else{
        navigate('/');
    }

    return(
        <div>       
            <h2>Go away</h2>
        </div>
    )
};

export default Profile;