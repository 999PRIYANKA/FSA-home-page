import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

// importing CSS
import "../css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <Link>Logo</Link>
          <div className="nav-hr"></div>
          <ul className="nav-links">
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>About</Link>
            </li>
            <li>
              <Link>Our Courses</Link>
            </li>
            <li>
              <Link>Contact</Link>
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
