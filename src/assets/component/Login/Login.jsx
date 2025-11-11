import React, { use, useState } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Link, useNavigate } from "react-router";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Login = () => {
    const [show,setShow]=useState(true)
  const { LogInWithGoogle, setUser, loginWithemail,loading,setLoading } = use(AuthContext);
  const navigator=useNavigate()
  const handleLoginWithGoogle = () => {
    LogInWithGoogle()
      .then((res) => {
        console.log(res.user);
        if(res.user){
          navigator('/')
        }
        setUser(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
    console.log("clicked");
  };

  const handleLoginWithEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    loginWithemail(email, password)
    setLoading(true)
      .then((res) => {
        console.log(res);
        setLoading(false)

      })
      .catch((err) => {
        console.log(err);
        setLoading(false)
      });
  };
  // if(loading){
  //   return <h1 className="text-2xl font-bold text-center"> Loading ........</h1>
  // }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-center font-bold text-2xl">LogIn</h1>
          <form onSubmit={handleLoginWithEmail}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input name="email" type="email" className="input" placeholder="Email" />
              {/* <label className="label">Password</label>
              <input name="password" type="password" className="input" placeholder="Password" /> */}
              <div>
                 <div className='relative'>
                            <label className="label">Password</label>
                          <input name='password' type={show?"password"
                
                 : "text"
                
                } className="input" placeholder="Password" />
                          <p onClick={()=>setShow(!show)} className='absolute top-8 right-6'>{show?<FaEyeSlash />
                
                 : <FaEye />
                
                }</p>
                          </div>
              </div>
              <button className="btn btn-neutral mt-4">{loading? "Logging in..." : "Login"}</button>
            </fieldset>
          </form>
          <button
            onClick={handleLoginWithGoogle}
            className="btn btn-neutral mt-4"
          >
            LogIn With Google
          </button>
          <button className="btn btn-neutral mt-4">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
