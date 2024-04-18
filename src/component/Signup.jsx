import React, { useContext, useEffect, useState } from 'react';
import { Authcontext } from './Auth';




const Signup = () => {

let {user,createuser,google} =useContext(Authcontext);
let [accept,setAccept]=useState(false);

let terms=e=>{
  setAccept(e.target.checked);
}

    let signunlog=e=>{
        e.preventDefault();
let name =e.target.name.value;
        let email=e.target.email.value;
        let password=e.target.password.value;

createuser(email,password)
.then((userCredential) => {
  const logeduser = userCredential.user;
  console.log(logeduser);
})
.catch((error) => {
  const errorMessage = error.message;
})



        console.log(name,email,password);
e.target.reset();
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

}


    return (
        <div>
  <div className="hero min-h-full bg-base-200">
  <div className="hero-content flex-col ">
    <div className="text-center ">
      <h1 className="text-5xl font-bold">Register  now!</h1>
     
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

      <form onSubmit={signunlog} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name='name' placeholder="name" className="input input-bordered" required />
        </div>
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
            <a  onClick={Soacial} className="label-text-alt link link-hover">Social sign up</a>
          </label>
        </div>
        <div className="form-control">
  <label className="cursor-pointer label">
    <span className="label-text">Accept term and conditions</span>
    <input type="checkbox" name='accept' onClick={terms}  className="checkbox checkbox-warning" />
  </label>
</div>
        <div className="form-control mt-6">
          <button className="btn btn-primary" disabled={!accept} >Submit</button>
        </div>
      </form>


    </div>
  </div>
</div>        </div>
    );
};

export default Signup;