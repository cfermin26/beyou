import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="mt-5">
      <Container>
        <Row className="green-border pt-4">
          <Col md={3} className="my-auto">
            <p className="text-footer">
              <FontAwesomeIcon icon={faMapMarkerAlt} /> 890 SOUTHDIXIE HIGHWAY,
              CORAL GABLES, FL 33146 US
            </p>
          </Col>
          <Col md={6} className="my-auto">
            <p className="text-footer">
              <FontAwesomeIcon icon={faPhone} /> +1 395 8978998
            </p>
          </Col>
          <Col md={3} className="my-auto">
            <p className="text-footer mb-1">
              <FontAwesomeIcon icon={faEnvelope} className="pe-1" />
              crm@beyou-online.com
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="pt-3 pt-md-0 my-auto">
            <p className="copyright">
              All rights reserved. © 2021 Beyu Ecuador
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
