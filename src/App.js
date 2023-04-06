import React  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//import all components here
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import "./App.css";

function App() {
  return (
    <>
        <Router>
            <Navbar/>
            <div>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                    <Route exact path='/courses' element={<Courses/>}/>
                </Routes>
            </div>
        </Router>
    </>
  );
}

export default App;
