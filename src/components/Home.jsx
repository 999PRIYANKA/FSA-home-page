import React from "react";
import Slider from "react-slick";

// importing CSS
import "../App.css";
import "../css/Home.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// importing icons
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const Home = () => {
  return (
    <div className="home">
      <div className="home-main">
        <Socialbar />
        <div className="home-main-section">
          <Slider {...settings}>
            <Slide
              title="Campus recruitment training"
              desc="It's 2023. Deliver the learning experience your team deserves. And
            have a good time doing it."
              img="./images/recruitment-training.png"
            />
            <Slide
              title="IT training"
              desc="It's 2023. Deliver the learning experience your team deserves. And
            have a good time doing it."
              img="./images/it-training.png"
            />
            <Slide
              title="Soft Skill Development Training"
              desc="It's 2023. Deliver the learning experience your team deserves. And
            have a good time doing it."
              img="./images/soft-skills.png"
            />
            <Slide
              title="IT Project"
              desc="It's 2023. Deliver the learning experience your team deserves. And
            have a good time doing it."
              img="./images/mock-interview.png"
            />
          </Slider>
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
      <div className="home-hr">
        <div className="home-hr-icon-container">
          <FaGraduationCap className="home-hr-icon" />
        </div>
      </div>
    </div>
  );
};

export default Home;

const Slide = ({ title, desc, img }) => {
  return (
    <div className="home-slide">
      <div className="home-slide-left">
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      <div className="home-slide-image-container">
        <img className="home-slide-image" src={img} alt="" />
      </div>
    </div>
  );
};

const Socialbar = () => {
  return (
    <div className="home-slide-social-bar">
      <div className="home-slide-social-icon">
        <ImFacebook className="home-slide-icon" />
      </div>
      <div className="home-slide-social-icon">
        <ImTwitter className="home-slide-icon" />
      </div>
      <div className="home-slide-social-icon">
        <BsInstagram className="home-slide-icon" />
      </div>
      <div className="home-slide-social-icon">
        <ImYoutube className="home-slide-icon" />
      </div>
      <div className="home-slide-social-icon">
        <FaLinkedinIn className="home-slide-icon" />
      </div>
    </div>
  );
};
