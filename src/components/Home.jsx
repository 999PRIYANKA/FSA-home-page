import React from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { Container, Row, Tabs, Tab } from "react-bootstrap";



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
import { AiFillClockCircle } from "react-icons/ai";

const Home = () => {
    return (
        <>
            <div className="home-page">
                <Header>
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
                <footer>ayaansh</footer>
            </div>
        </>
    );
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Courses.css";
import "bootstrap/dist/css/bootstrap.min.css";

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
    <>
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
    

    {/* ---------------------------------------PAGE 2 OUR COURSES----------------------------------------- */}
    <div className="page2">

<div className="container course">
      <h1 className="OC">
        <span>Our</span> Courses
      </h1>
      <Container clasName="py-4">
        <Row className="justify-content-center">
          <Tabs
            justify
            variant="pills"
            defaultActiveKey="tab-1"
            className="mb-1 p-0 tabs"
          >
            <Tab eventKey="tab-1" clasName="tabs" title="IT Training">
              <div className="container">
                <div className="row">
                  <div className="col">
                    <div className="card" style={{ width: "18rem" }}>
                      <img src="images/java.png" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java <NavLink to ="https://www.firststepahead.in/courses/core-java.pdf" attributes-list download > Download </NavLink>  <br></br>
                          Data structure with java <NavLink to ="https://www.firststepahead.in/courses/advance-java.pdf" attributes-list download > Download </NavLink> <br></br>
                          adavanced Java <NavLink to ="https://www.firststepahead.in/courses/data-structure-with-java.pdf" attributes-list download > Download </NavLink> <br></br>
                          java develop <NavLink to ="https://www.firststepahead.in/courses/java-development.pdf" attributes-list download > Download </NavLink> <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="images/dsa.png" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h4>Data Structures and Algorithms with Python</h4>
                        <p class="card-text">
                         Data Structures with Python <NavLink to ="https://www.firststepahead.in/courses/data-structure-with-python.pdf" attributes-list download > Download </NavLink>  
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="images/cpp.png" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h3>C,C++ Programming</h3>
                        <p class="card-text">
                         <br></br> C,C++Programming <NavLink to ="https://www.firststepahead.in/courses/c-cpp-course.pdf" attributes-list download > Download </NavLink>  <br></br>
                          Data Structures with C <NavLink to ="https://www.firststepahead.in/courses/data-structure-with-c.pdf" attributes-list download > Download </NavLink>  <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-3">
                <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="images/fullstack.png" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h4>Full Stack Course</h4>
                        <p class="card-text">
                          Java Full Stack Course <br></br><NavLink to ="firststepahead.in/courses/java-full-stack-development.pdf" attributes-list download > Download </NavLink>  <br></br>
                        Full Stack development Django <NavLink to ="https://www.firststepahead.in/courses/full-stack-development-django.pdf" attributes-list download > Download </NavLink> <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="images/emergingTch.png" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h4>Emerging Technology</h4>
                        <p class="card-text">
                          Machine learning with Python <NavLink to ="https://www.firststepahead.in/courses/machine-learning-with-python.pdf" attributes-list download > Download </NavLink>  <br></br>
                          Data Science with Python <NavLink to ="Document URL" attributes-list download > Download </NavLink>  <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="images\campusRecruitment.png" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Campus Recruitment</h2>
                        <p class="card-text">
                        <br></br><NavLink to ="https://www.firststepahead.in/courses/campus-training.pdf" attributes-list download > Download Syllabus </NavLink>  
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="tab-2" clasName="tabs" title="Campus Placement">
            <div className="container ">
                <div className="row">
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Full Stack Course</h2>
                        <p class="card-text">
                          Java Full Stack Course<br></br> <NavLink to ="Document URL" attributes-list download > Download </NavLink>  <br></br>
                        Full Stack development Django <NavLink to ="Document URL" attributes-list download > Download </NavLink> <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java<br></br>
                          Data structure with java<br></br>
                          adavanced Java<br></br>
                          java develop<br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java<br></br>
                          Data structure with java<br></br>
                          adavanced Java<br></br>
                          java develop<br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-3">
                <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java<br></br>
                          Data structure with java<br></br>
                          adavanced Java<br></br>
                          java develop<br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java<br></br>
                          Data structure with java<br></br>
                          adavanced Java<br></br>
                          java develop<br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java<br></br>
                          Data structure with java<br></br>
                          adavanced Java<br></br>
                          java develop<br></br>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Tab>
            <Tab eventKey="tab-3" clasName="tabs" title="Mock Interview">
            <div className="container">
                <div className="row">
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java <NavLink to ="Document URL" attributes-list download > Download </NavLink>  <br></br>
                          Data structure with java <NavLink to ="Document URL" attributes-list download > Download </NavLink> <br></br>
                          adavanced Java <NavLink to ="Document URL" attributes-list download > Download </NavLink> <br></br>
                          java develop <NavLink to ="Document URL" attributes-list download > Download </NavLink> <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java<br></br>
                          Data structure with java<br></br>
                          adavanced Java<br></br>
                          java develop<br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java<br></br>
                          Data structure with java<br></br>
                          adavanced Java<br></br>
                          java develop<br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row my-3">
                <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java<br></br>
                          Data structure with java<br></br>
                          adavanced Java<br></br>
                          java develop<br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java<br></br>
                          Data structure with java<br></br>
                          adavanced Java<br></br>
                          java develop<br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java<br></br>
                          Data structure with java<br></br>
                          adavanced Java<br></br>
                          java develop<br></br>
                        </p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </Tab>
          </Tabs>
        </Row>
      </Container>
      </div>
    </div>
    </>
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

export default Home;
