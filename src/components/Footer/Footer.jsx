import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <img
            src="https://media-private.canva.com/SlyZo/MAFdpHSlyZo/1/t.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJWF6QO3UH4PAAJ6Q%2F20230406%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230406T091944Z&X-Amz-Expires=35613&X-Amz-Signature=d830ba4dd019ef1b572163a9eab8dbf6a7adb58ffb3a90bea76753955da1c707&X-Amz-SignedHeaders=host&response-expires=Thu%2C%2006%20Apr%202023%2019%3A13%3A17%20GMT"
            alt=""
            className="footer-logo"
          />
          <p className="footer-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="footer-social-bar"></div>
        </div>

        <div className="footer-middle">
          <h3>Popular Courses</h3>
          <ul className="footer-list">
            <li className="footer-list-item">Web Development</li>
            <li className="footer-list-item">App Development</li>
            <li className="footer-list-item">Data Science</li>
            <li className="footer-list-item">Machine Learning</li>
            <li className="footer-list-item">Artificial Intelligence</li>
          </ul>
        </div>

        <div className="footer-right">
          <h3>Contact Info</h3>
          <div className="footer-contact">
            <h5>Address</h5>
            <p>LNCT Group of Colleges, Raisen Road</p>
          </div>
          <div className="footer-contact">
            <h5>Phone</h5>
            <p>+91 1234567890</p>
          </div>
          <div className="footer-contact">
            <h5>Email</h5>
            <p>abc@gmail.com</p>
          </div>
        </div>
      </footer>
      <p className="copyright-section">Copyright © 2023 Online Courses</p>
    </>
  );
};

export default Footer;
