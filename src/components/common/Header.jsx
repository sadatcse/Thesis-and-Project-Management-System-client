import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a>Thesis</a></li>
            <li><a>Projects</a> </li>
            <li><a>About</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl z-5">
          <img className='h-24 w-24' src='https://southasiauni.ac.bd/frontend/images/logo-170x172.png' alt='University Logo' />
          <span className="ml-2">Thesis and Project Management System</span>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        <li><a>Thesis</a></li>
            <li><a>Projects</a> </li>
            <li><a>About</a></li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Log In</a>
      </div>
    </div>
  );
}

export default Navbar;
