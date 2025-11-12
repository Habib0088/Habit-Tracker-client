import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../AuthContext/AuthContext';
import './nav.css'

const Nav = () => {
  const {user,logOutGoogle}=use(AuthContext)

  
  const handleLogOut=()=>{
logOutGoogle().then(res=>{
  console.log(res);
  
}).catch(err=>{
  console.log(err);
  
})
  }

  
  const links=
  <>

     <li className='hover:bg-amber-100'><NavLink to='/'>Home</NavLink></li>
   <li><NavLink to='browseAll'>Browse All</NavLink></li>
   {
    user && <>
    <li><NavLink to='/myHabit'>My Habit</NavLink></li>
   <li><NavLink to='/addHabit'>Add Habit</NavLink></li>
   
    </>
   }
 
  </>
  const userLinks=<>
   {user? <>
      <li><a>{user?.displayName
}</a></li>
      <li><a>{user?.email}</a></li>
      <li onClick={handleLogOut}><a>LogOut</a></li> </>
  
   :
    // <button>logout</button>
    null

   }
  </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {
          links
        }
      </ul>
    </div>
    <a className="btn btn-ghost text-sm lg:text-xl font-extrabold">Habit Tracker</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 mr-6">
     {links}
    </ul>
  </div>
  {/* Menu end */}
  <div className="navbar-end">
     <ul className="menu menu-horizontal px-1">
    
      <li>
        {
          user?null: <button><Link to='/login'>LogIn</Link></button>
        }
        <details>
          <summary>{
user?<button className=''><img className='w-12 h-12 rounded-full' src={user?.photoURL
} alt="Photo" /></button>: null
}</summary>
          <ul className="p-2 bg-cyan-300 font-semibold -m-36 mt-4 z-40">
            
           {userLinks}
          </ul>
        </details>
      </li>

    </ul>
    
  </div>
</div>
    );
};

export default Nav;