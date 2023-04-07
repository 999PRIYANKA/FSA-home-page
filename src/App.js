import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import all components here
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Courses from './components/Courses';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import '../src/css/Navbar.css'

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/courses' element={<Courses/>}/>
                    <Route exact path='/about' element={<About/>}/>
                    {/* <Route exact path='/contact' element={<Contact/>}/> */}
                </Routes>
                <Courses/>
            </div>
        </Router>
    </>
  );
}

export default App;
