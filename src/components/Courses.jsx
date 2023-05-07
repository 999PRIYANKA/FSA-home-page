import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Courses.css";

const Courses = () => {
  return (
    <>
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
                        <img
                          src="images/java.png"
                          class="card-img-top"
                          alt=""
                        />
                        <div class="card-body">
                          <h2>Java</h2>
                          <p class="card-text">
                            Core Java{" "}
                            <NavLink
                              to="https://www.firststepahead.in/courses/core-java.pdf"
                              attributes-list
                              download
                            >
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                            Data structure with java{" "}
                            <NavLink
                              to="https://www.firststepahead.in/courses/advance-java.pdf"
                              attributes-list
                              download
                            >
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                            adavanced Java{" "}
                            <NavLink
                              to="https://www.firststepahead.in/courses/data-structure-with-java.pdf"
                              attributes-list
                              download
                            >
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                            java develop{" "}
                            <NavLink
                              to="https://www.firststepahead.in/courses/java-development.pdf"
                              attributes-list
                              download
                            >
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
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
                            Data Structures with Python{" "}
                            <NavLink
                              to="https://www.firststepahead.in/courses/data-structure-with-python.pdf"
                              attributes-list
                              download
                            >
                              {" "}
                              Download{" "}
                            </NavLink>
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
                            <br></br> C,C++Programming{" "}
                            <NavLink
                              to="https://www.firststepahead.in/courses/c-cpp-course.pdf"
                              attributes-list
                              download
                            >
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                            Data Structures with C{" "}
                            <NavLink
                              to="https://www.firststepahead.in/courses/data-structure-with-c.pdf"
                              attributes-list
                              download
                            >
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                          </p>
                        </div>

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


                   <div className="row my-3">
                    <div className="col">
                      <div class="card" style={{ width: "18rem" }}>
                        <img
                          src="images/fullstack.png"
                          class="card-img-top"
                          alt=""
                        />
                        <div class="card-body">
                          <h4>Full Stack Course</h4>
                          <p class="card-text">
                            Java Full Stack Course <br></br>
                            <NavLink
                              to="firststepahead.in/courses/java-full-stack-development.pdf"
                              attributes-list
                              download
                            >
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                            Full Stack development Django{" "}
                            <NavLink
                              to="https://www.firststepahead.in/courses/full-stack-development-django.pdf"
                              attributes-list
                              download
                            >
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div class="card" style={{ width: "18rem" }}>
                        <img
                          src="images/emergingTch.png"
                          class="card-img-top"
                          alt=""
                        />
                        <div class="card-body">
                          <h4>Emerging Technology</h4>
                          <p class="card-text">
                            Machine learning with Python{" "}
                            <NavLink
                              to="https://www.firststepahead.in/courses/machine-learning-with-python.pdf"
                              attributes-list
                              download
                            >
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                            Data Science with Python{" "}
                            <NavLink to="Document URL" attributes-list download>
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col">
                      <div class="card" style={{ width: "18rem" }}>
                        <img
                          src="images\campusRecruitment.png"
                          class="card-img-top"
                          alt=""
                        />
                        <div class="card-body">
                          <h2>Campus Recruitment</h2>
                          <p class="card-text">
                            <br></br>
                            <NavLink
                              to="https://www.firststepahead.in/courses/campus-training.pdf"
                              attributes-list
                              download
                            >
                              {" "}
                              Download Syllabus{" "}
                            </NavLink>
                          </p>
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
                            Java Full Stack Course<br></br>{" "}
                            <NavLink to="Document URL" attributes-list download>
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                            Full Stack development Django{" "}
                            <NavLink to="Document URL" attributes-list download>
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                          </p>
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
                            Core Java{" "}
                            <NavLink to="Document URL" attributes-list download>
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                            Data structure with java{" "}
                            <NavLink to="Document URL" attributes-list download>
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                            adavanced Java{" "}
                            <NavLink to="Document URL" attributes-list download>
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                            java develop{" "}
                            <NavLink to="Document URL" attributes-list download>
                              {" "}
                              Download{" "}
                            </NavLink>{" "}
                            <br></br>
                          </p>
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
    </>
  );
};


export default Courses;