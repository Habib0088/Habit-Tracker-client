import React, { useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

import { auth } from '../Firebase/firebase.init';

const googleAuth=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const LogInWithGoogle=()=>{
        return signInWithPopup(auth,googleAuth)
    }

    const authInfo={
        LogInWithGoogle,
        user,
        setUser,
        loading,
        setLoading
    }



    return <AuthContext value={authInfo}>{children}</AuthContext>
       
};


export default AuthProvider;