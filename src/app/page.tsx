"use client";
// Import React and useEffect hook
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Row, Col, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import profilepic from "../../public/assets/Profile Pic.png";
import Script from "next/script";


declare global {
  interface Window {
    VANTA?: {
      BIRDS: (options: object) => { destroy: () => void };
    };
  }
}


const VantaBackground: React.FC = () => {
  const backgroundRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined" && backgroundRef.current) {
      // Poll until the script has attached VANTA to window
      const interval = setInterval(() => {
        if (window.VANTA?.BIRDS) {
          vantaEffect.current = window.VANTA.BIRDS({
            el: backgroundRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: "rgb(50, 72, 87)",
            backgroundAlpha: 1,
            color1: "rgb(41, 77, 51)",
            color2: "rgb(49, 105, 65)",
            colorMode: "varianceGradient",
            quantity: 6,
            birdSize: 2,
            wingSpan: 30,
            speedLimit: 7,
            separation: 20,
            alignment: 20,
            cohesion: 20,
          });
          clearInterval(interval);
        }
      }, 100);
    }
    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      style={{
        position: "fixed",
        width: "100%",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

const Page: React.FC = () => {
  return (
    <div
      style={{ position: "relative", minHeight: "100vh", maxHeight: "100vh" }}
    >
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js" strategy="beforeInteractive"></Script>
      <Script
        src="
      https://cdn.jsdelivr.net/npm/vanta@0.5.24/dist/vanta.birds.min.js
      " strategy="beforeInteractive"
      ></Script>
      <VantaBackground />
      <Navbar className="custom-navbar">
        <Container style={{ maxWidth: "1200px" }}>
          <Container className="fw-bold">
            <Navbar.Brand href="#home" style={{
              fontSize: "1.7rem",
              color: "black",
              fontWeight: "bold",
            }}>Perez</Navbar.Brand>
          </Container>
          <Container>
            <Nav className="me-auto justify-content-end p-2 gap-3">
              <Nav.Link href="#home" className="fw-bold">
                Home
              </Nav.Link>
              <Nav.Link href="#features">About Me</Nav.Link>
              <Nav.Link href="#pricing">Skills</Nav.Link>
              <Nav.Link href="#pricing">Portfolio</Nav.Link>
              <Nav.Link href="#pricing">Contact</Nav.Link>
            </Nav>
          </Container>
        </Container>
      </Navbar>

      <Container >
        <Row>
          <Col
            xs={12}
            md={6}
            className="justify-content-start align-items-center d-flex min-vh-100"
          >
            <Container className="text-left">
              <Image
                src={profilepic}
                alt="txt"
                className="img-fluid"
                width={500}
                height={500}
              />
            </Container>
          </Col>

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
                  textAlign: "center"
                }}
              >
                Erik Perez
              </h3>
              <Container className="rounded border-dark mb-5 w-75" style={{ height: "8px", backgroundColor: "rgba(87, 179, 113, 1)", boxShadow: "0px 4px 10px rgba(0,0,0,0.8)" }}>

              </Container>
            </Container>

            <Container className="d-flex flex-column gap-5 mb-3 fs-5" style={{ maxWidth: "175px" }}>
              <Button as="a" href="https://github.com/xerikperez" target="_blank" rel="noopener noreferrer" style={{  }}>
                GitHub
              </Button>
              <Button as="a" href="https://www.linkedin.com/in/erik-p%C3%A9rez/" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </Button>
              <Button as="a" href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                Resume
              </Button>
              <Button as="a" href="#contact">
                Contact Me
              </Button>
            </Container>


          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
