import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'

export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser ] = useState('')
    const providerLogin = (provider) => {
        return signInWithPopup(auth, provider)
    }
    const logOut = () => {
        return signOut(auth)
    }
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) => {
        return  signInWithEmailAndPassword(auth, email, password)
    }
    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user', currentUser)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    },[])
    const AuthInfo = {user, providerLogin, logOut, createUser, signIn}
    return (
        <div>
            <AuthContext.Provider value={AuthInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;