import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navigation-bar">
        <img
          className="w-12 h-10"
          src="./images/FSA_Logo.png"
          alt="navbar-logo"
        />

        <ul className="navbar-navigation">
          <li className="">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link-active navbar-link" : "navbar-link"
              }
              to={"/"}
            >
              Home
            </NavLink>
          </li>
          <li className="w-32">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link-active navbar-link" : "navbar-link"
              }
              to={"/about"}
            >
              About
            </NavLink>
          </li>
          <li className="w-32">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link-active navbar-link" : "navbar-link"
              }
              to={"/courses"}
            >
              Our Courses
            </NavLink>
          </li>
          <li className="w-32">
            <NavLink
              className={({ isActive }) =>
                isActive ? "navbar-link-active navbar-link" : "navbar-link"
              }
              to={"/contact"}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <a href="https://www.firststepahead.in/login.html" className="btn-login">Login</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
