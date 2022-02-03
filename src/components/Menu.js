import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
// import Image from "react-bootstrap/Image";

const Menu = () => {
  return (
    <Navbar>
      <Container fluid className="content-menu">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-between align-items-center w-100">
            <Nav.Link href="#home" className="first-menu">
              ITEM1
            </Nav.Link>
            <Navbar.Brand to="/" className="text-center my-md-1">
              <StaticImage
                src="../images/beyou-logo.svg"
                alt="Beyou logo"
                className="beyou-logo"
              />
            </Navbar.Brand>
            <AnchorLink
              to="/#formulario"
              className="d-flex align-items-center comprar-link"
            >
              Comprar Ahora
              <StaticImage
                src="../images/handbag.svg"
                alt="Handbag logo"
                className="handbag-logo ms-2"
              />
            </AnchorLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    // <Navbar>
    //   <Container className="d-flex justify-content-center">
    //     <Navbar.Brand href="/" className="text-center my-md-1">
    //       <StaticImage
    //         src="../images/beyou-logo.svg"
    //         alt="Beyou logo"
    //         className="beyou-logo"
    //       />
    //     </Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav">
    //       <Nav className="me-auto">
    //         <Nav.Link href="#home">ITEM1</Nav.Link>
    //         <Nav.Link href="#link">Link</Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Menu;
