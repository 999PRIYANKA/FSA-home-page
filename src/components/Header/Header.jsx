import React from 'react'
import Navbar from './Navbar'
import './Header.css'
import BgImage from "./bg.jpg";

const Header = (props) => {
  return (
    <div style={{backgoundImage: `url(${BgImage})`}} className={props.className + ' header'}>
        <Navbar />
        {props.children}
    </div>
  )
}

export default Header