import React from "react";
import {Col, Row} from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiGit, DiJava, DiCss3,
    DiMongodb,
    DiBootstrap,
} from "react-icons/di";



import {AiFillHtml5} from "react-icons/ai";
import {SiExpress,SiPostman,SiTypescript,SiRedux,SiSequelize,SiFigma} from "react-icons/si";

function Techstack() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiCsharp/>
            </Col> */}
            <Col xs={4} md={2} className="tech-icons">
                <DiJava/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiTypescript/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFigma/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiBootstrap/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiCss3/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <AiFillHtml5/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiRedux/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiMongodb/>
            </Col>

            {/* <Col xs={4} md={2} className="tech-icons">
                <DiPython/>
            </Col> */}
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiC/>
            </Col> */}
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiTensorflow/>
            </Col> */}
            {/* <Col xs={4} md={2} className="tech-icons">
                <SiPytorch/>
            </Col> */}

            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiExpress/>
            </Col>

            <Col xs={4} md={2} className="tech-icons">
                <SiPostman/>
            </Col>
            
            
            <Col xs={4} md={2} className="tech-icons">
                <SiSequelize/>
            </Col>
            
            
            

        </Row>
    );
}

export default Techstack;
