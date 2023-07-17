import React, { lazy, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";


import captcha_eval
    from "../../Assets/Projects/registration.jpg";
import anticheat
    from "../../Assets/Projects/weather_app.jpg";
import warehouse_project
    from "../../Assets/Projects/download_womensafety application.png";
import textUtilityc from "../../Assets/Projects/Text_utility.jpg";

import treedots from "../../Assets/Projects/tree-dots-min_1.webp";

const Particle = lazy(() => import("../Particle").then(({ default: Particle }) => ({ default: Particle })));


function Projects() {
    return (
        <Container fluid className="project-section">
            <Suspense fallback={<div>Loading particles...</div>}>
                <Particle />
            </Suspense>
            <Container>
                <h1 className="project-heading">
                    work('<strong className="purple">selected</strong>')
                </h1>
                <p style={{ color: "white" }}>
                    Here are a few projects I've worked on recently.
                </p>
                <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={warehouse_project}

                            showBtn={true}
                            title="SHE-ILD"
                            description="This is a woman safety application that is user friendly and is built in Android Studio.
 Live location and SOS messages are delivered to the registered contacts when the trigger is pulled.
 .Includes helpline numbers that can be accessed in dangerous situations."
 btn_text="View on Github"
                            link="https://github.com/dev-ameyjoshi/WomenSafteyApplication.git"
                        />
                    </Col>

                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={captcha_eval}
                            showBtn={true}
                            title="PRAKRUTI"
                            description="Developed using Node.js, Express, SQL, React, AWS & Javascript.The project is a simple and user-friendly web application developed to streamline the process of creating and managing
registration forms. It provides an efficient way to collect and store information from users, making it ideal for various
scenarios such as event registrations, surveys, and online applications.
Enhancements have been implemented to validate and enhance the integrity of the data stored in the backend.
 "
 btn_text="View on Github"
                            link="https://github.com/dev-ameyjoshi/Registration_Form"
                        />
                    </Col>

                    <Col md={4} className="project-card">

                        <ProjectCard
                            imgPath={anticheat}

                            showBtn={true}
                            title="Weather Forecast"
                            description="Designed and implemented a weather forecasting application based on live location.Time and date according to the 24hr clock with background image according to the current weather.
"
                            btn_text="View on Github"
                            link="https://github.com/dev-ameyjoshi/WeatherApp"
                        />
                    </Col>
                    <Col md={4} className="project-card">

                        <ProjectCard
                            imgPath={textUtilityc}

                            showBtn={true}
                            title="Text Utils"
                            description="Text Utility app in React that provides functions such as conversion to small case, upper case, removal of extra space and provides character and word count.
.
"
                            btn_text="View on Github"
                            link="https://github.com/dev-ameyjoshi/TextUtils"
                        />
                    </Col>
                    <Col md={4} className="project-card">
                        <ProjectCard
                            imgPath={treedots}
                            showBtn={true}
                            title="Want to see more?!"
                            description="Click the button below."
                            btn_text="Github"
                            link="https://github.com/dev-ameyjoshi"
                        />
                    </Col>


                </Row>
            </Container>
        </Container>
    );
}

export default Projects;
