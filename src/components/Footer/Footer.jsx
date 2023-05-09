import React from "react";
import "./Footer.css";
import { BsFacebook, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="home__footer">
                <div className="home__footer--top">
                    <div className="home__footer--top--social">
                        <img
                            src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/04/logo-retina.png"
                            alt=""
                        />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim.
                        </p>
                        <div className="home__footer--top--social--icons">
                            <BsFacebook />
                            <BsTwitter />
                            <BsPinterest />
                            <BsYoutube />
                        </div>
                    </div>
                    <div className="home__footer--top--courses">
                        <h2>Popular Courses</h2>
                        <ul>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                            <li>Lorem Ipsum</li>
                        </ul>
                    </div>
                    <div className="home__footer--top--contact">
                        <h2>Contact Info</h2>
                        <div>
                            <b>Address</b>
                            <br />
                            123 Fifth Avenue, New York, NY 10160 <br />
                            <b>Phone</b>
                            <br />
                            929-242-6868 <br />
                            <b>Email</b>
                            <br />
                            contact@info.com
                        </div>
                    </div>
                </div>
                <div className="hr"></div>
                <div className="home__footer--bottom">
                    <div>
                        <p>Copyright © 2023 Online Courses</p>
                        <p>Powered by Online Courses</p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
