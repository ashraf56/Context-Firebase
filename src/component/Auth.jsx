import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../../firebase.config';

export let Authcontext=createContext(null);
  const auth = getAuth(app);
   const provider = new GoogleAuthProvider();

const Auth = ({children}) => {
 
    let [user,setUser]=useState(null);
    let [loader,setLoader]=useState(true);
let createuser=(email,password)=>{
   return createUserWithEmailAndPassword(auth,email,password);
}
let update=()=>{
    return updateProfile(auth.currentUser)
}

let signIN=(email,password)=>{
    setLoader(true)
    return signInWithEmailAndPassword(auth, email, password);
}

let google=()=>{
    setLoader(true)
    return signInWithPopup(auth, provider)
}

useEffect(()=>{
let unsubscribe=onAuthStateChanged(auth,cuser=>{
    setUser(cuser);
    setLoader(false);
    
})
return()=>{
    unsubscribe();
}
},[])


let logout=()=>{
    return signOut(auth);
}


let Authceter={
    user, loader,
    createuser,
    signIN, logout,
    google,update

}

    return (
       <Authcontext.Provider value={Authceter}>
{children}
       </Authcontext.Provider>
    );
};

export default Auth;