import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Tilt from "react-parallax-tilt";

import myImg4 from "../../Assets/profilenew4.jpg"
import {
    AiFillGithub,
    AiOutlineTwitter,
  
} from "react-icons/ai";
import {FaLinkedinIn} from "react-icons/fa";

function Home2() {
    return (
        <Container fluid className="home-about-section" id="about">
            <Container>
                <Row>
                    <Col md={8} className="home-about-description" style={{marginTop: "2em"}}>
                        <h1 style={{fontSize: "2.6em"}}>
                            LET ME <span className="purple"> INTRODUCE </span> MYSELF
                        </h1>
                        <p className="home-about-body">
                            I started my coding journey with a bootcamp called neogcamp and since then I have been keen on building new Web Apps with different industrial applications.
                            <br/>
                            <br/>I am fluent in classics like
                            <i>
                                <b className="purple">  Java and Javascript. </b>
                            </i>
                            <br/>
                            <br/>
                            My field of interest is related to building new {" "}
                            <i>
                                <b className="purple">Products </b>

                            </i>
                            in areas concerning {" "}
                            <b className="purple">
                                <br/>MERN Stack Technologies.
                            </b>
                            <br/>
                            <br/>
                            Thanks for checking my website!
                            <br/>
                            <b className="purple"> {"//"} It's a work in progress so check back often!</b>
                        </p>
                    </Col>
                    <Col md={4} className="myAvtar">
                        <Tilt>

                            <img src={myImg4} className="img-fluid2" alt="avatar" height="500" width="200"/>
                        </Tilt>
                    </Col>
                </Row>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>YOU CAN <b className="purple"> FIND </b>ME ON</h1>
                        <p>
                            multiple <span className="purple">platforms </span>as
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/dev-ameyjoshi"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://twitter.com/AmeyRJoshi"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiOutlineTwitter/>
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/amey-joshi-a72bb6136/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"

                                >
                                    <FaLinkedinIn/>
                                </a>
                            </li>
                            {/* <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/boxxo__/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram/>
                                </a>
                            </li> */}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Home2;
