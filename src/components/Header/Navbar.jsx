import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navigation-bar">
        <img
          className="w-12 h-10"
          src="https://media-private.canva.com/SlyZo/MAFdpHSlyZo/1/t.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230406%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230406T091944Z&X-Amz-Expires=35613&X-Amz-Signature=d830ba4dd019ef1b572163a9eab8dbf6a7adb58ffb3a90bea76753955da1c707&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2006%20Apr%202023%2019%3A13%3A17%20GMT"
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
            <button className="button">Start Learning</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
