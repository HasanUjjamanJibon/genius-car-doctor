import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "/logo.svg";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const {user}=useContext(AuthContext)
  // NavItems here
  const navItems = (
    <>
      <li>
        <Link to="/" className="capitalize font-semibold text-sm">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="capitalize font-semibold text-sm">
          about
        </Link>
      </li>
      <li>
        <Link to="/services" className="capitalize font-semibold text-sm">
          services
        </Link>
      </li>
      <li>
        <Link to="/blog" className="capitalize font-semibold text-sm">
          blog
        </Link>
      </li>
      <li>
        <Link to="/contact" className="capitalize font-semibold text-sm">
          contact
        </Link>
      </li>
    </>
  );

  return (
    <div className="h-fit">
      <div className="navbar ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navItems}
            </ul>
          </div>
          <a >
            <img src={logo} className="h-full" alt="logo" />
          </a>
        </div>
        <div className="navbar-center hidden  lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>
        <div className="navbar-end">
          {/* cart button */}
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </button>
          {/* search button */}
          <button className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
          {/* appointment button */}
          <Link
            to="/login_signup/login"
            className="btn capitalize btn-outline btn-error "
          >
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
