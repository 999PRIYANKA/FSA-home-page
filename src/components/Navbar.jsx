import React, { useState } from "react";
import "../App.css";
import { Link } from "react-router-dom";

import { RxHamburgerMenu } from "react-icons/rx";

// importing CSS
import "../css/Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <Link>
            <img
              className="nav-logo"
              src="https://media-private.canva.com/SlyZo/MAFdpHSlyZo/1/t.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230406%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230406T091944Z&X-Amz-Expires=35613&X-Amz-Signature=d830ba4dd019ef1b572163a9eab8dbf6a7adb58ffb3a90bea76753955da1c707&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2006%20Apr%202023%2019%3A13%3A17%20GMT"
              alt=""
            />
          </Link>
          <div className="nav-hr"></div>
          <ul className={showMenu ? `nav-links nav-links-mobile` : `nav-links`}>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/courses"}>Our Courses</Link>
            </li>
            <li>
              <Link to={'/contact'}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={showMenu ? `nav-right nav-right-mobile` : `nav-right`}>
          <button className="nav-button nav-log-in-button">Log In</button>
          <button className="nav-button nav-sign-in-button">Sign Up</button>
        </div>
        <div
          className="nav-hamburger-menu"
          onClick={() => setShowMenu(!showMenu)}
        >
          <RxHamburgerMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
