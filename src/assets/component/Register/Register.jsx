import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';

const Register = () => {
    const {LogInWithGoogle,setUser}=use(AuthContext)
    
     const handleLoginWithGoogle = () => {
    LogInWithGoogle()
      .then((res) => {
        console.log(res.user);
        setUser(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log("clicked");
  };
    return (
       <div className="hero  mt-3 lg:mt-7">
 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='text-center font-bold'>Register Your Self</h1>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input type="email" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Photo URL</label>
          <input type="email" className="input" placeholder="Photo URL" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
          <button className="btn btn-neutral mt-4">Register </button>
         
        </fieldset>
         <Link to='/login'><button className='btn'>LogIn</button></Link>
          <button className='btn ' onClick={handleLoginWithGoogle}>Google Login</button>
      </div>
    </div>
  </div>

    );
};

export default Register;