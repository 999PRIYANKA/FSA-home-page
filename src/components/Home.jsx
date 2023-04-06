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
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  return (
    <div className="home">
        <Slide
          title="Online Campus preparation portal with practice sheets"
          desc="It's 2023. Deliver the learning experience your team deserves. And
            have a good time doing it."
          img="https://as2.ftcdn.net/v2/jpg/04/41/98/07/1000_F_441980769_s5CbR4NGlv9aT9MbacDGvlpLAFbynfya.jpg"
        />
        {/* <Slide
          title="Online Campus preparation portal with practice sheets"
          desc="It's 2023. Deliver the learning experience your team deserves. And
            have a good time doing it."
          img="https://as2.ftcdn.net/v2/jpg/04/41/98/07/1000_F_441980769_s5CbR4NGlv9aT9MbacDGvlpLAFbynfya.jpg"
        />
        <Slide
          title="Online Campus preparation portal with practice sheets"
          desc="It's 2023. Deliver the learning experience your team deserves. And
            have a good time doing it."
          img="https://as2.ftcdn.net/v2/jpg/04/41/98/07/1000_F_441980769_s5CbR4NGlv9aT9MbacDGvlpLAFbynfya.jpg"
        /> */}
      <div className="home-hr">
        <div className="home-hr-icon">
          <FaGraduationCap size={60} fill="rgb(95, 209, 222)" />
        </div>
      </div>
    </div>
  );
};

export default Home;

const Slide = ({ title, desc, img }) => {
  return (
    <div className="home-slider">
      <div className="home-slider-left">
        <div className="home-slider-social-bar">
          <div className="home-slider-social-icon">
            <ImFacebook size={18} fill="#040146" />
          </div>
          <div className="home-slider-social-icon">
            <ImTwitter size={18} fill="#040146" />
          </div>
          <div className="home-slider-social-icon">
            <BsInstagram size={18} fill="#040146" />
          </div>
          <div className="home-slider-social-icon">
            <ImYoutube size={18} fill="#040146" />
          </div>
          <div className="home-slider-social-icon">
            <FaLinkedinIn size={18} fill="#040146" />
          </div>
        </div>
        <div className="home-slider-left-details">
          <h1>{title}</h1>
          <p>{desc}</p>
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
      <img className="home-slider-image" src={img} alt="" />
    </div>
  );
};
