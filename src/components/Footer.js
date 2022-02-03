import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faPhone,
  faEnvelope,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
// import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer>
      <Container className="py-4 py-md-5">
        <Row>
          <Col md={12}>
            <h2 className="contact-title mb-1 mt-3 mt-md-0">Contáctanos</h2>
          </Col>
        </Row>
        <Row
          className="mb-4 pb-2 d-flex justify-content-center"
          id="formulario"
        >
          <Col md={8}>
            <Form
              className="contacto-form"
              id="contacto"
              // onSubmit={handleSubmit}
            >
              <Row>
                <Col md={6} className="mt-3">
                  <FloatingLabel label="Nombres Completos">
                    <Form.Control
                      type="text"
                      placeholder="Nombres Completos"
                      required
                      // onChange={(e) => setNombres(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6} className="mt-3">
                  <FloatingLabel label="Ciudad">
                    <Form.Control
                      type="ciudad"
                      placeholder="Ciudad"
                      required
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row>
                <Col md={6} className="mt-3">
                  <FloatingLabel label="Fecha de nacimiento">
                    <Form.Control
                      type="date"
                      placeholder="Fecha de nacimiento"
                      required
                      // onChange={(e) => setTelefono(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6} className="mt-3">
                  <FloatingLabel label="Dirección">
                    <Form.Control
                      type="text"
                      placeholder="Dirección"
                      required
                      // onChange={(e) => setPais(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col md={6} className="mt-3">
                  <FloatingLabel label="Celular">
                    <Form.Control
                      type="date"
                      placeholder="Celular"
                      required
                      // onChange={(e) => setTelefono(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6} className="mt-3">
                  <FloatingLabel label="Email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      // onChange={(e) => setPais(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={12} className="mt-3">
                  <FloatingLabel label="Mensaje">
                    <Form.Control
                      as="textarea"
                      placeholder="Mensaje"
                      style={{ height: "100px" }}
                      required
                      // onChange={(e) => setMensaje(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="text-center">
                <Col md={12} controlId="formGridPassword mx-auto">
                  <Button
                    variant="light"
                    type="submit"
                    className="btn-enviar rounded-0 px-4"
                  >
                    <FontAwesomeIcon icon={faPaperPlane} /> ENVIAR
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

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
