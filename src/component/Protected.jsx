import React, { useContext } from 'react';
import { Authcontext } from './Auth';
import { Navigate, useLocation } from 'react-router-dom';

const Protected = ({children}) => {
let {user,loader}=useContext(Authcontext);
let location=useLocation();
if (loader) {
    return <progress className="progress w-56"></progress>;
}

if (user) {
    return children;
}

return <Navigate to='/login' state={{from:location}}  replace></Navigate>
    
};

export default Protected;