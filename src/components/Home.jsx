import React from "react";

// importing CSS
import "../App.css";
import "../css/Home.css";
import Header from "./Header/Header";

// importing icons
import { GoPlay } from "react-icons/go";
import {
    IoMdArrowDropright,
    IoLogoHtml5,
    IoLogoCss3,
    IoLogoJavascript,
    IoLogoPython,
    IoLogoAngular,
    IoLogoNodejs,
} from "react-icons/io";
import { FaReact, FaVuejs, FaCrown, FaCertificate } from "react-icons/fa";
import { AiFillClockCircle, AiFillStar } from "react-icons/ai";
import { BsFacebook, BsTwitter, BsYoutube, BsPinterest } from "react-icons/bs";
import Footer from "./Footer/Footer";

const Home = () => {
    return (
        <>
            <div className="home-page">
                <Header image="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/02/bg-01-free-img.jpg">
                    <div className="header__container">
                        <div className="home__widget">
                            {/* <a href="/"> */}
                            <GoPlay className="home__widget--icon" />
                            <span className="home__widget--span">
                                on-demand video training
                            </span>
                            {/* </a> */}
                        </div>
                        <h1 className="home__heading">
                            Education Opens up the Mind
                        </h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Ut elit tellus, luctus nec ullamcorper mattis,
                            pulvinar dapibus leo.
                        </p>
                        <div className="home__btns">
                            <a href="#" className="home__btn1">
                                Start Course
                            </a>
                            <a href="#" className="home__btn2">
                                <IoMdArrowDropright />
                                All Courses
                            </a>
                        </div>
                    </div>
                </Header>
                {/* Tech Section */}
                <section className="home__tech-section">
                    <div className="home__tech-section--left">
                        <h2>Technologies You Will Learn</h2>
                    </div>
                    <div className="home__tech-section--right">
                        <div className="home__tech-section--right--icons">
                            <IoLogoHtml5 />
                            <IoLogoCss3 />
                            <IoLogoJavascript />
                            <IoLogoNodejs />

                            <IoLogoPython />
                            <IoLogoAngular />
                            <FaReact />
                            <FaVuejs />
                        </div>
                    </div>
                </section>
                {/* Hero Section */}
                <section className="home__hero-section">
                    <div className="home__hero">
                        <div className="home__hero-section--left">
                            <div className="home__hero-section--left--box">
                                <h4>Experience</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Asperiores dolor
                                    repudiandae eligendi at veniam excepturi,
                                    consequatur consectetur quidem, mollitia
                                    recusand
                                </p>
                            </div>
                            <div className="home__hero-section--left--box">
                                <h4>Experience</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Asperiores dolor
                                    repudiandae eligendi at veniam excepturi,
                                    consequatur consectetur quidem, mollitia
                                    recusand
                                </p>
                            </div>
                            <div className="home__hero-section--left--box">
                                <h4>Experience</h4>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur,
                                    adipisicing elit. Asperiores dolor
                                    repudiandae eligendi at veniam excepturi,
                                    consequatur consectetur quidem, mollitia
                                    recusand
                                </p>
                            </div>
                        </div>
                        <div className="home__hero-section--right">
                            <h4>Study At Your Own Pace</h4>
                            <h6>
                                Boost Your Career by Learning Skills in High
                                Demand
                            </h6>
                            <a href="#" className="home__hero-section--btn2">
                                <IoMdArrowDropright />
                                get started
                            </a>
                        </div>
                    </div>
                </section>
                {/* Why us Section */}
                <section className="home__whyus-section">
                    <div className="home__whyus-section--left">
                        <h6>Features of Our Courses</h6>
                        <h2>Why Choose Us?</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsum sapiente fugiat recusandae, aperiam
                            plaquam laudantium necessitatibus perferendis
                        </p>
                    </div>
                    <div className="home__whyus-section--right">
                        {/* Box 1 */}
                        <div className="home__whyus-section--right--box">
                            <div className="home__whyus-section--right--box--icon">
                                <FaCrown />
                            </div>
                            <div className="home__whyus-section--right--box--content">
                                <h4>Best Industry Leaders </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut elit tellus, luctus nec
                                    ullamcorper.
                                </p>
                            </div>
                        </div>
                        {/* Box 2 */}
                        <div className="home__whyus-section--right--box">
                            <div className="home__whyus-section--right--box--icon">
                                <AiFillClockCircle />
                            </div>
                            <div className="home__whyus-section--right--box--content">
                                <h4>Learn Online at Your Own Pace </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut elit tellus, luctus nec
                                    ullamcorper.
                                </p>
                            </div>
                        </div>
                        {/* Box 3 */}
                        <div className="home__whyus-section--right--box">
                            <div className="home__whyus-section--right--box--icon">
                                <FaCertificate />
                            </div>
                            <div className="home__whyus-section--right--box--content">
                                <h4>Professional Certification </h4>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Ut elit tellus, luctus nec
                                    ullamcorper.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Testimonials */}
                <section className="home__testimonial-section">
                    <div>
                        <div className="home__testimonial-section--left">
                            <h6>Testimonials</h6>
                            <h2>Trusted by Thousand of Students and Tutors</h2>
                        </div>
                        <div className="home__testimonial-section--right">
                            <span>4.8</span>
                            <div>
                                <div className="home__testimonial-section--right--stars">
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                    <AiFillStar />
                                </div>
                                <p>2,934 Ratings</p>
                                <p>Google Reviews</p>
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="home__testimonial-cards">
                        <div className="home__testimonial-card">
                            <div className="home__testimonial-card--content">
                                <img
                                    src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-01.jpg"
                                    alt=""
                                />
                                <p>
                                    “Massa amet, at dolor tellus pellentesque
                                    aenean in eget massa tincidunt habitasse
                                    volutpat adipiscing sed id sit auctor eu
                                    vivamus nulla.”
                                </p>
                                <div className="home__testimonial-card--info">
                                    <h6>Harry Potter</h6>
                                    <div className="home__testimonial-section--right--stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home__testimonial-card">
                            <div className="home__testimonial-card--content">
                                <img
                                    src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-01.jpg"
                                    alt=""
                                />
                                <p>
                                    “Massa amet, at dolor tellus pellentesque
                                    aenean in eget massa tincidunt habitasse
                                    volutpat adipiscing sed id sit auctor eu
                                    vivamus nulla.”
                                </p>
                                <div className="home__testimonial-card--info">
                                    <h6>Harry Potter</h6>
                                    <div className="home__testimonial-section--right--stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home__testimonial-card">
                            <div className="home__testimonial-card--content">
                                <img
                                    src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-01.jpg"
                                    alt=""
                                />
                                <p>
                                    “Massa amet, at dolor tellus pellentesque
                                    aenean in eget massa tincidunt habitasse
                                    volutpat adipiscing sed id sit auctor eu
                                    vivamus nulla.”
                                </p>
                                <div className="home__testimonial-card--info">
                                    <h6>Harry Potter</h6>
                                    <div className="home__testimonial-section--right--stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="home__testimonial-card">
                            <div className="home__testimonial-card--content">
                                <img
                                    src="https://websitedemos.net/online-courses-02/wp-content/uploads/sites/542/2020/10/online-programming-course-review-01.jpg"
                                    alt=""
                                />
                                <p>
                                    “Massa amet, at dolor tellus pellentesque
                                    aenean in eget massa tincidunt habitasse
                                    volutpat adipiscing sed id sit auctor eu
                                    vivamus nulla.”
                                </p>
                                <div className="home__testimonial-card--info">
                                    <h6>Harry Potter</h6>
                                    <div className="home__testimonial-section--right--stars">
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Join our community Section */}
                <section className="home__join_comm-section">
                    <div>
                        <h2>Join our Community</h2>
                        <p>
                            Enter your email address to register to our
                            newsletter subscription delivered on regular basis!
                        </p>
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Enter your email"
                        />
                        <a href="#">Subscribe</a>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default Home;
