import React, { useContext, useState } from 'react';
import { Authcontext } from './Auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useTitle from './Home/useTitle';

const Login = () => {
  useTitle('login')
  let {user,signIN,google} =useContext(Authcontext);
  let [error,seterror]=useState('');
  let location=useLocation();
  let navigate=useNavigate();
  let from=location.state?.from?.pathname || '/';

    let signinlog=e=>{
        e.preventDefault();
        let email=e.target.email.value;
        let password=e.target.password.value;
        signIN(email,password)
        .then((userCredential) => {
          const loguser = userCredential.user;
          seterror('');
        }
          
          )
        .catch((error) => {
      
          const errorMessage = error.message;
          seterror(errorMessage)
        });
        navigate(from , {replace:true});
       
    }


    let Soacial=()=>{
      google()
      .then((result) => {
        const guser = result.user;
        console.log(guser);
      }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
      navigate(from , {replace:true});
    }

    return (
        <div>
    <div className="hero min-h-full bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center">
      <h1 className="text-5xl font-bold">Login now!</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={signinlog} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            <Link to='/signup' className="label-text-alt link link-hover">Registar now</Link>
          </label>

        </div>
        <div className="form-control mt-5">
          <button className="btn btn-primary">Login</button>
          <a   onClick={Soacial} className="label-text-alt link link-hover">Social Log in </a>
               </div>
      </form>


    </div>
  </div>
</div>
        </div>
    );
};

export default Login;