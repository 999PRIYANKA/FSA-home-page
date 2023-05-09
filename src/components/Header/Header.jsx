import React from "react";
import Navbar from "./Navbar";
import "./Header.css";

const Header = (props) => {
    return (
        <div
            style={{backgroundImage: `linear-gradient(to right, #007991e9, #007991e9), url(${props.image})`}}
            className={props.className + " header"}
        >
            <Navbar />
            {props.children}
        </div>
    );
};

export default Header;
