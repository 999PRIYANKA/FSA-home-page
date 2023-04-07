import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Row, Tabs, Tab } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const Courses = () => {
  return (
    <>
    <div className="container my-5">
      <h1>
        <span>Our</span> Courses
      </h1>
      <Container clasName="py-4">
        <Row className="justify-content-center">
          <Tabs
            justify
            variant="pills"
            defaultActiveKey="tab-1"
            className="mb-1 p-0"
          >
            <Tab eventKey="tab-1" title="IT Training">
              <div className="container">
                <div className="row my-1">
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java <a href ="Document URL" attributes-list download > Download </a>  <br></br>
                          Data structure with java <a href ="Document URL" attributes-list download > Download </a> <br></br>
                          adavanced Java <a href ="Document URL" attributes-list download > Download </a> <br></br>
                          java develop <a href ="Document URL" attributes-list download > Download </a> <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Data Structures and Algorithms with Python</h2>
                        <p class="card-text">
                         Data Structures with Python <a href ="Document URL" attributes-list download > Download </a>  
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>C,C++ Programming</h2>
                        <p class="card-text">
                          C,C++Programming <a href ="Document URL" attributes-list download > Download </a>  <br></br>
                          Data Structures with C <a href ="Document URL" attributes-list download > Download </a>  <br></br>
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
                        <h2>Full Stack Course</h2>
                        <p class="card-text">
                          Java Full Stack Course <a href ="Document URL" attributes-list download > Download </a>  <br></br>
                        Full Stack development Django <a href ="Document URL" attributes-list download > Download </a> <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Emerging Technology</h2>
                        <p class="card-text">
                          Machine learning with Python <a href ="Document URL" attributes-list download > Download </a>  <br></br>
                          Data Science with Python <a href ="Document URL" attributes-list download > Download </a>  <br></br>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Campus Recruitment</h2>
                        <p class="card-text">
                        <a href ="Document URL" attributes-list download > Download Syllabus </a>  
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Tab>
            <Tab eventKey="tab-2" title="Campus Placement">
            <div className="container">
                <div className="row">
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Full Stack Course</h2>
                        <p class="card-text">
                          Java Full Stack Course <a href ="Document URL" attributes-list download > Download </a>  <br></br>
                        Full Stack development Django <a href ="Document URL" attributes-list download > Download </a> <br></br>
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
            <Tab eventKey="tab-3" title="Mock Interview">
            <div className="container">
                <div className="row">
                  <div className="col">
                    <div class="card" style={{ width: "18rem" }}>
                      <img src="" class="card-img-top" alt="" />
                      <div class="card-body">
                        <h2>Java</h2>
                        <p class="card-text">
                          Core Java <a href ="Document URL" attributes-list download > Download </a>  <br></br>
                          Data structure with java <a href ="Document URL" attributes-list download > Download </a> <br></br>
                          adavanced Java <a href ="Document URL" attributes-list download > Download </a> <br></br>
                          java develop <a href ="Document URL" attributes-list download > Download </a> <br></br>
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
    </>
  );
};

export default Courses;
