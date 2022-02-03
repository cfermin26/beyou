import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";
// import { StaticImage } from "gatsby-plugin-image";

const Footer = () => {
  return (
    <footer>
      <Container className="py-5">
        <Row className="mb-4 pb-2 d-flex justify-content-center">
          <Col md={8}>
            <Form
              className="contacto-form"
              id="contacto"
              // onSubmit={handleSubmit}
            >
              <Row className="mb-3">
                <Col md={6}>
                  <FloatingLabel label="Nombres Completos">
                    <Form.Control
                      type="text"
                      placeholder="Nombres Completos"
                      required
                      // onChange={(e) => setNombres(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel label="Email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      // onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col md={6}>
                  <FloatingLabel label="Teléfono">
                    <Form.Control
                      type="text"
                      placeholder="Teléfono"
                      required
                      // onChange={(e) => setTelefono(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={6}>
                  <FloatingLabel label="Direccion">
                    <Form.Control
                      type="text"
                      placeholder="Direccion"
                      required
                      // onChange={(e) => setPais(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={12}>
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
                    Enviar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>

        <Row className="green-border pt-4">
          <Col md={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Col>
          <Col md={6}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error
            excepturi culpa esse maiores dolorem, architecto reiciendis illum
            hic rem officia laboriosam.
          </Col>
          <Col md={3}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
