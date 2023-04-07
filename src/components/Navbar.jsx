import React from "react";
import "../App.css";
import { NavLink } from "react-router-dom";

// importing CSS
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <NavLink>
            <img className="nav-logo"
              src="https://media-private.canva.com/SlyZo/MAFdpHSlyZo/1/t.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230406%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230406T091944Z&X-Amz-Expires=35613&X-Amz-Signature=d830ba4dd019ef1b572163a9eab8dbf6a7adb58ffb3a90bea76753955da1c707&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2006%20Apr%202023%2019%3A13%3A17%20GMT"
              alt=""
            />
          </NavLink>
          <div className="nav-hr"></div>
          <ul className="nav-links">
            <li>
              <NavLink to={'/'}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'/about'}>About</NavLink>
            </li>
            <li>
              <NavLink to={'/courses'}>Our Courses</NavLink>
            </li>
            <li>
              <NavLink to={'/contact'}>Contact</NavLink>
            </li>
          </ul>
        </div>
        <div className="nav-right">
          <button className="nav-button nav-log-in-button">Log In</button>
          <button className="nav-button nav-sign-in-button">Sign Up</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
