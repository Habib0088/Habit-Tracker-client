import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";

const Login = () => {
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
    

    <div className="hero bg-base-200 min-h-screen">
    
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-center font-bold text-2xl">LogIn</h1>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div></div>
              <button  className="btn btn-neutral mt-4">Login</button>
              <button
                onClick={handleLoginWithGoogle}
                className="btn btn-neutral mt-4"
              >
                LogIn With Google
              </button>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </div>

    </div>
  );
};

export default Login;
