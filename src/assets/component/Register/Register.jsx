import React, { use, useState } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../Firebase/firebase.init';
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";







const Register = () => {
  const [show,setShow]=useState(true)
    const {LogInWithGoogle,setUser,registerWithEmail}=use(AuthContext)
    // Google Login
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
  // Email registration

  const handleEmailRegistration=(e)=>{
    e.preventDefault()
    const email=e.target.email.value
    const password=e.target.password.value
    console.log(email, password);

 const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  if (!passwordRegex.test(password)) {
    alert("Password must have 6+ chars, uppercase, lowercase, number, and symbol.");
    return;
  }

    registerWithEmail(email,password).then(res=>{
      console.log(res.user);
      
    }).catch(err=>{
      console.log(err);
      
    })
    
  }
 
    return (
       <div className="hero  mt-3 lg:mt-7">
 
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className='text-center font-bold'>Register Your Self</h1>
       <form onSubmit={handleEmailRegistration}>
         <fieldset className="fieldset">
          <label className="label">Name</label>
          <input name='name' type="text" className="input" placeholder="Name" />
          <label className="label">Email</label>
          <input name='email' type="email" className="input" placeholder="Email" />
          <label className="label">Photo URL</label>
          <input name='photo' type="text" className="input" placeholder="Photo URL" />
          <div className='relative'>
            <label className="label">Password</label>
          <input name='password' type={show?"password"

 : "text"

} className="input" placeholder="Password" />
          <p onClick={()=>setShow(!show)} className='absolute top-8 right-6'>{show?<FaEyeSlash />

 : <FaEye />

}</p>
          </div>
          <button  className="btn btn-neutral mt-4">Register </button>
         
        </fieldset>
       </form>
         <Link to='/login'><button className='btn'>LogIn</button></Link>
          <button className='btn ' onClick={handleLoginWithGoogle}>Google Login</button>
      </div>
    </div>
  </div>

    );
};

export default Register;