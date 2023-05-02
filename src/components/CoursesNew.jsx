import React from "react";
import Header from "./Header/Header";
import "../css/CoursesNew.css";
// import Courses from "./Courses";
import CourseCard from "./Courses/CourseCard";
import Footer from "./Footer/Footer";

const CoursesNew = () => {
  return (
    <div className="courses-page">
      <Header>
        <div className="header__container">
          <h1 className="courses">All Courses</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
      </Header>
      <div className="courses__container">
        <div className="courses-popular">
          <div className="courses-container">
            <h4>Course Program</h4>
            <h1>Popular Courses</h1>
          </div>
          <div className="courses-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim.
            </p>
          </div>
        </div>

        <div className="courses__courses-category">
          <CourseCard
            courseName="IT Training"
            courseDesc="Lorem ipsum dolor sit amet consectetur."
          />
          <CourseCard
            courseName="Mock Interview"
            courseDesc="Lorem ipsum dolor sit amet consectetur."
          />
          <CourseCard
            courseName="Campus Training"
            courseDesc="Lorem ipsum dolor sit amet consectetur."
          />
        </div>

        <div className="thirdsection">
          <h1>Join Our Community</h1>
          <p>
            Enter your email address to register to our newsletter subscription
            delivered on regular basis!
          </p>
          <input type="text" placeholder="Enter your email address" /><br></br>
          <button>Subscribe</button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CoursesNew;
