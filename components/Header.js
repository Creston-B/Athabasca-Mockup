import React, { Component } from "react";
import { Container, Row, Col, Navbar, Nav } from "react-bootstrap";
import styles from "../styles/Home.module.scss";
import Image from "next/dist/client/image";

export default class HeaderComponent extends Component {
  render() {
    return (
      <header className={styles.header}>
        <NavComponent />
      </header>
    );
  }
}

class NavComponent extends Component {
  render() {
    return (
      <Navbar variant="dark" expand="lg" className="navbar navbar-dark">
        <Container className="container">
          <Row className="d-flex flex-grow-1 flex-nowrap">
            <Col className="flex-grow-1">
              <Navbar.Brand href="/" className="navbar-brand">
                <Image
                  src="/Athabasca_University_Logo_2017.svg"
                  alt="Athabasca Logo"
                  width='100%'
                  height='100%'
                  layout="intrinsic"
                  objectFit="contain"
                  priority
                />
              </Navbar.Brand>
            </Col>
            <Col className="mt-4 mr-2 justify-self-end flex-grow-0 justify-content-end">
            <Navbar.Toggle
                className="navbar-toggle"
                aria-controls="responsive-navbar-nav"
              ></Navbar.Toggle>
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link className="nav-button text-end" href="#About">
                    <strong>About</strong>
                  </Nav.Link>
                </Nav>
                <Nav className="me-auto">
                  <Nav.Link className="nav-button text-end" href="#Team">
                    <strong>Team</strong>
                  </Nav.Link>
                </Nav>
                <Nav className="me-auto">
                  <Nav.Link className="nav-button text-end" href="#Schedule">
                    <strong>Schedule</strong>
                  </Nav.Link>
                </Nav>
                <Nav className="me-auto">
                  <Nav.Link className="nav-button text-end" href="#Present">
                    <strong>Present</strong>
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
    );
  }
}