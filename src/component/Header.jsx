import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Authcontext } from './Auth';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
  let {user,logout}=useContext(Authcontext);

  let signoUt=()=>{
    logout().then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
    return (
        <div>
       <div className="navbar bg-base-200 container mx-auto">
  <div className="flex-1">
    <a className=" text-4xl font-semibold	font-sans uppercase">OurUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/signup'>Register</Link></li>
      <li> <Link to='/profile'>Profile</Link></li>
    
      <li>
        {user?  <>
        
        <span className='font-bold'>{user.displayName? user.displayName:<FaUserCircle className='text-2xl text-amber-500'/>}</span> 
            <button onClick={signoUt}>sign out</button>

        </> : <Link to='/login'>  Log in  </Link> }
        
      </li>
   
    </ul>
  </div>
</div>

        </div>
    );
};

export default Header;