import React from "react";
import Card from "react-bootstrap/Card";
import {ImPointRight} from "react-icons/im";

function AboutCard() {
    return (
        <Card className="quote-card-view">
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p className={"about-paragraph"}>
                        Hello World!, I am <span className="purple">Amey Joshi </span>
                        from <a href={"https://goo.gl/maps/pjcVMRXYCcQoqhSd9"} target="_blank" rel={"noreferrer"}
                                className={"a-about"}>Pune, India.</a>
                        <br/>I am an engineering student at<a href={"https://www.unisa.it/"}
                                                                 target="_blank"
                                                                 rel={"noreferrer"} className={"a-about"}> Vishwakarma
                        Univerisity </a>who is currently working as a Full-Stack web developer. I have a strong passion for coding and problem solving, and I actively collaborate with my peers to make necessary modifications and advancements. I am seeking a development-driven environment where individuals are highly curious about the latest technologies.
                        <br/>
                        <br/>
                        Apart from coding, here are some activities that I like doing:
                    </p>
                    <ul>

                        <li className="about-activity">
                            <ImPointRight/> Travelling
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Cooking
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Playing Table Tennis.
                        </li>
                        <li className="about-activity">
                            <ImPointRight/> Thinking about new startups
                        </li>

                    </ul>

                    <p style={{marginBlockEnd: 0, color: "rgb(155 126 172)"}}>
                        "From bugs to features: Bringing ideas to life."{" "}
                    </p>

                </blockquote>
            </Card.Body>
        </Card>
    );
}

export default AboutCard;
