import React, { use } from 'react';
import { useNavigate } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const PrivateRoute = ({children}) => {
    const {user}=use(AuthContext)
    const navigator=useNavigate()

    if(!user){
        navigator('/')
    }
    return (
       children
    );
};

export default PrivateRoute;