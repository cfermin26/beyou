import React from "react";
// import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Image from "react-bootstrap/Image";
import { StaticImage } from "gatsby-plugin-image";

const Menu = () => {
  return (
    <Navbar>
      <Container className="d-flex justify-content-center">
        <Navbar.Brand href="/" className="text-center my-md-1">
          <StaticImage src="../images/beyou-logo.svg" alt="Beyou logo" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">ITEM1</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
};

export default Menu;
