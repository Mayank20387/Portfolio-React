import { React, useEffect, useRef } from "react";
import { init } from "ityped";
import { Container, Row, Col } from "react-grid-system";
import "./Skills1.css";

const Skills = () => {
  return (
    <>
      <div className="aac">
        <div className="about" id="about-me">
          <div className="about-text">
            <div className="content">
              <div className="text_shadows">
                <h1>
                  SKILLS<br></br>
                </h1>
              </div>
            </div>

            <p>
              <br></br>
              Come take a look at my skills !<br></br>
              <br></br>
            </p>
            <br></br>
            <Container fluid>
              <Row
                align="center"
                justify="center"
                direction="row"
                style={{ height: "300px" }}
              >
                <Col xs={5}>
                  HTML
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-indicator"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  CSS
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-indicator"
                      style={{ width: "70%" }}
                    ></div>
                  </div>
                  Javascript
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-indicator"
                      style={{ width: "64%" }}
                    ></div>
                  </div>
                  React
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-indicator"
                      style={{ width: "64%" }}
                    ></div>
                  </div>
                </Col>
                <Col xs={1}></Col>
                <Col xs={5}>
                  Java
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-indicator"
                      style={{ width: "80%" }}
                    ></div>
                  </div>
                  C/C++
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-indicator"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                  Python
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-indicator"
                      style={{ width: "90%" }}
                    ></div>
                  </div>
                  Node
                  <div className="progress-bar-container">
                    <div
                      className="progress-bar-indicator"
                      style={{ width: "40%" }}
                    ></div>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
