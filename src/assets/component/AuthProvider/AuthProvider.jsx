import React, { useEffect, useState } from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

import { auth } from '../Firebase/firebase.init';

const googleAuth=new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null);
    const [loading,setLoading]=useState(true)

    const LogInWithGoogle=()=>{
        return signInWithPopup(auth,googleAuth)
    }
    // LogOut
    const logOutGoogle=()=>{
        return signOut(auth)
    }
    // Email Register

    const registerWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

// Email login

const loginWithemail=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password)
}

    useEffect(()=>{
        const unsubscriber=onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            unsubscriber()
        }
    },[])
    const authInfo={
        LogInWithGoogle,
        user,
        setUser,
        logOutGoogle,
        registerWithEmail,
        loginWithemail,
        loading,
        setLoading
    }



    return <AuthContext value={authInfo}>{children}</AuthContext>
       
};


export default AuthProvider;