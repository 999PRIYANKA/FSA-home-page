import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import all components here
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CoursesNew from "./components/CoursesNew";
import Courses from "./components/Courses";
import About from "./components/About";
import Contact from './components/Contact';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./App.css";

function App() {
  return (
    <>
      <Router>
        {/* <Navbar /> */}
        <div>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/courses" element={<CoursesNew />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
