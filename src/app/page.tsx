"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import profilepic from "../../public/assets/Profile Pic.png";
import Script from "next/script";
import { VantaBackground } from "@/components/UI/VantaBirdsComponent";
import { DownloadBtns } from "@/components/UI/downloadBtnComponent";
import { useState } from "react";

const Page: React.FC = () => {
  const [isShowing, setIsShowing] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"
        strategy="beforeInteractive"
      ></Script>
      <Script
        src="
      https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.birds.min.js
      "
        strategy="beforeInteractive"
      ></Script>
      <VantaBackground />
      <Navbar className="custom-navbar">
        <Container style={{ maxWidth: "1200px" }}>
          <Container className="fw-bold">
            <Navbar.Brand
              href="#home"
              style={{
                fontSize: "1.7rem",
                color: "black",
                fontWeight: "bold",
              }}
            >
              Perez
            </Navbar.Brand>
          </Container>
          <Container>
            <Nav className="me-auto justify-content-end p-2 gap-3">
              <Nav.Link href="#home" className="fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#experience">Experience</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Container>
        </Container>
      </Navbar>

      <Container id="home">
        <Row>
          <Col
            xs={12}
            md={6}
            className="justify-content-start align-items-center d-flex min-vh-100"
          >
            <Container className="text-left">
              <Image src={profilepic} alt="txt" className="w-75 h-auto" />
            </Container>
          </Col>
          {isShowing && <DownloadBtns onClose={() => setIsShowing(false)} />}
          <Col
            xs={12}
            md={6}
            className="justify-content-center align-items-center align-text-center flex-column text-md-center d-flex min-vh-100"
          >
            <Container>
              <h3
                style={{
                  fontSize: "2.5rem",
                  color: "black",
                  fontWeight: "bold",
                  margin: "40px auto",
                  textAlign: "center",
                }}
              >
                Erik Perez
              </h3>
              <Container
                className="rounded border-dark mb-5 w-75"
                style={{
                  height: "8px",
                  backgroundColor: "rgba(87, 179, 113, 1)",
                  boxShadow: "0px 4px 10px rgba(0,0,0,0.8)",
                }}
              ></Container>
            </Container>

            <Container
              className="d-flex flex-column gap-5 mb-3 fs-5"
              style={{ maxWidth: "175px" }}
            >
              <Button
                as="a"
                href="https://github.com/xerikperez"
                target="_blank"
                rel="noopener noreferrer"
                style={{}}
              >
                GitHub
              </Button>
              <Button
                as="a"
                href="https://www.linkedin.com/in/erik-p%C3%A9rez/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
              <Button
                onClick={() => {
                  setIsShowing(true);
                }}
                rel="noopener noreferrer"
              >
                Resume
              </Button>

              <Button as="a" href="#contact">
                Contact Me
              </Button>
            </Container>
          </Col>
        </Row>
      </Container>

      <Container id="about" className="py-5">
        <Row className="justify-content-center">
          <Col md={8}>
            <h2 className="text-center mb-4">About Me</h2>
            <p className="lead text-center">
              I&apos;m a software developer with a completed degree in Software
              Development from MOLK Education. I currently partner with
              UnitechUSA as a client, building data-driven tools and automating
              supply chain workflows across LATAM.
            </p>
          </Col>
        </Row>
      </Container>

      <Container id="skills" className="py-5 bg-light rounded">
        <Row>
          <Col>
            <h2 className="text-center mb-4">Skills</h2>
            <h5 className="text-center">Languages &amp; Frameworks</h5>
            <ul className="list-inline text-center">
              <li className="list-inline-item badge bg-success m-1">Java</li>
              <li className="list-inline-item badge bg-success m-1">Python</li>
              <li className="list-inline-item badge bg-success m-1">JavaScript</li>
              <li className="list-inline-item badge bg-success m-1">TypeScript</li>
              <li className="list-inline-item badge bg-success m-1">React</li>
              <li className="list-inline-item badge bg-success m-1">Next.js</li>
              <li className="list-inline-item badge bg-success m-1">Node.js</li>
              <li className="list-inline-item badge bg-success m-1">Express</li>
              <li className="list-inline-item badge bg-success m-1">SQL</li>
              <li className="list-inline-item badge bg-success m-1">C#</li>
            </ul>
            <h5 className="text-center mt-4">Workflow &amp; Tools</h5>
            <ul className="list-inline text-center">
              <li className="list-inline-item badge bg-success m-1">Workflow Pipeline Automation</li>
              <li className="list-inline-item badge bg-success m-1">CI/CD</li>
              <li className="list-inline-item badge bg-success m-1">Git &amp; GitHub</li>
              <li className="list-inline-item badge bg-success m-1">Agile Collaboration</li>
            </ul>
            <h5 className="text-center mt-4">Operational Skills</h5>
            <ul className="list-unstyled text-center">
              <li>Automate supply chain &amp; order tracking across LATAM vendors</li>
              <li>Cut repetitive work by up to 80% with ExcelScripts &amp; Python Playwright bots</li>
              <li>Clarify data with advanced Excel formulas and multilingual client emails</li>
            </ul>
          </Col>
        </Row>
        <Row id="experience" className="pt-5">
          <Col>
            <h2 className="text-center mb-4">Experience</h2>
          </Col>
          <Col md={8} className="mx-auto">
            <div className="mb-4">
              <h5 className="fw-bold">UnitechUSA (Client) – Operations Support Specialist</h5>
              <p className="mb-1 text-muted">Feb 2025 – Present | Remote</p>
              <p>
                Eliminated manual supply chain tracking by scripting vendor
                checks and Excel flags, saving 80% of repetitive work and
                keeping POs and SOs accurate across regions.
              </p>
            </div>
            <div className="mb-4">
              <h5 className="fw-bold">
                Cruitify – Software Development Engineering Intern
              </h5>
              <p className="mb-1 text-muted">Jan 2025 – May 2025 | Remote</p>
              <p>
                Solved clunky recruiter workflows by building responsive
                React/TypeScript components for a SaaS hiring platform and
                collaborating through Agile sprints.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container id="contact" className="py-5">
        <Row className="justify-content-center">
          <Col md={6} className="text-center">
            <h2 className="mb-4">Contact</h2>
            <p>
              Let&apos;s build something together! Reach me at
              <a href="mailto:xerikperez@gmail.com"> xerikperez@gmail.com</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
