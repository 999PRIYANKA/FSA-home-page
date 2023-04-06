import React from "react";

// importing CSS
import "../App.css";
import "../css/Home.css";

// importing icons
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="home-slider">
        <div className="home-slider-left">
          <div className="home-slider-social-bar">
            <div className="home-slider-social-icon">
              <ImFacebook size={18} />
            </div>
            <div className="home-slider-social-icon">
              <ImTwitter size={18} />
            </div>
            <div className="home-slider-social-icon">
              <BsInstagram size={18} />
            </div>
            <div className="home-slider-social-icon">
              <ImYoutube size={18} />
            </div>
            <div className="home-slider-social-icon">
              <FaLinkedinIn size={18} />
            </div>
          </div>
          <div className="home-slider-left-details">
            <h1>Online Campus preparation portal with practice sheets</h1>
            <p>
              It's 2023. Deliver the learning experience your team deserves. And
              have a good time doing it.
            </p>
            <div className="home-buttons">
              <button className="home-button home-getstarted-button">
                Get Started
              </button>
              <button className="home-button home-knowmore-button">
                Know More
              </button>
            </div>
          </div>
        </div>
        <img
          className="home-slider-image"
          src="https://as2.ftcdn.net/v2/jpg/04/41/98/07/1000_F_441980769_s5CbR4NGlv9aT9MbacDGvlpLAFbynfya.jpg"
          alt=""
        />
      </div>
      <div className="home-hr">
        <div className="home-hr-icon">
          <FaGraduationCap size={60} fill="rgb(95, 209, 222)" />
        </div>
      </div>
    </div>
  );
};

export default Home;
