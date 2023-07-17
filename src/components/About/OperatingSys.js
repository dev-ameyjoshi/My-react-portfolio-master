import React from "react";
import {Col, Row} from "react-bootstrap";
import {

    SiLinux,
} from "react-icons/si";
import {CgWindows} from "react-icons/cg";
import {GrUbuntu} from "react-icons/gr";



function OperatingSys() {
    return (
        <Row style={{justifyContent: "center", paddingBottom: "50px"}}>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <CgWindows/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <GrUbuntu/>
            </Col>
            {/* <Col xs={4} md={2} className="tech-icons">
                <FaFreebsd/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <FaFedora/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <GrArchlinux/>
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiDebian/>
            </Col> */}


        </Row>
    );
}

export default OperatingSys;
