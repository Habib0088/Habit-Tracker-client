import React from 'react';
import { Link } from 'react-router';

const Nav = () => {
  const links=
  <>
   <li><a>Home</a></li>
   <li><a>Browse All</a></li>
  </>
  const userLinks=<>
   <li><a>Name</a></li>
            <li><a>Email</a></li>
            <li><a>LogOut</a></li>
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
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  {/* Menu end */}
  <div className="navbar-end">
     <ul className="menu menu-horizontal px-1">
    
      <li>
        <details>
          <summary><Link to='/login'>LogIn</Link></summary>
          <ul className="p-2">
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