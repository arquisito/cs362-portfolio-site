import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/home-main.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";


const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p className="home-about-body">
                 Hi, my name is <span className="yellow">Alyssa Quisito </span>
                 and I'm from <span className="yellow"> Flourtown, PA.</span>
                <br />
                <br />
                I'm a senior Computer Science major at Arcadia University.
                <br />
                <br />
                  I'm minoring in Studio Art as well as Japanese.
                  <br />
                  <br />I like all things related to video games, art, or the Japanese language.
                  <br />
                  <br />
                  I also have a great liking for Godzilla. We share a birthday!
                  <br />
                  <br />
                  I hope you enjoy my website!
                  <br />
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://github.com/arquisito"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="github"
                    >
                      <AiFillGithub />
                    </a>
                    </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About