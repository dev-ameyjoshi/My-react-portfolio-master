import React, {useState, useEffect, lazy, Suspense} from "react";
import {Container, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import pdf from "../../Assets/Resume_Amey_Joshi.pdf";
import {AiOutlineDownload} from "react-icons/ai";
import {pdfjs} from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import '../styles/resume.css';

import { Card, CardMedia } from "@mui/material";


pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
//   ).toString();
const Particle = lazy(() => import("../Particle").then(({default: Particle}) => ({default: Particle})));
// const resumeLink =
//     "https://docs.google.com/document/d/18QfLKB0Ue9-mtBTVu879-DxcIXiZMs8JGQS-kUy2mpU/edit?usp=sharing";

function Resume() {
    const [width, setWidth] = useState(1200);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <Container fluid className="resume-section">
                <Suspense fallback={<div>Loading particles...</div>}>
                    <Particle/>
                </Suspense>

                <Row className="resume">
					<Card sx={{ maxWidth: 850 }}>
						<CardMedia
							className="cardmedia"
							component="iframe"
							Height="1056px"
							src="https://drive.google.com/file/d/1h1yTFPSBR1yr_4eiLnNv2KCwkyingNgg/preview"
						/>
					</Card>
				</Row>

                {/* <Row className="resume">
                    <Document file={resumeLink} className="d-flex justify-content-center">
                        <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6}/>

                    </Document>
                </Row> */}

                {/* <div>
                <iframe
                    title="Resume"
                    src={`https://docs.google.com/viewer?url=${encodeURIComponent(
                    resumeLink
                    )}&embedded=true`}
                    style={{ width: "100%", height: "800px" }}
                />
                </div> */}
                <Row style={{justifyContent: "center", position: "relative"}}>
                    <Button
                        variant="primary"
                        href={pdf}
                        target="_blank"
                        style={{maxWidth: "250px"}}
                    >
                        <AiOutlineDownload/>
                        &nbsp;Download CV
                    </Button>
                </Row>
            </Container>
        </div>
    );
}

export default Resume;

