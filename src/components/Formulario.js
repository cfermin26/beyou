import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  return (
    <>
      <Container>
        <Row className="mb-4 pb-2" id="formulario">
          <Col md={6} className="bg-purple p-5 order-2 order-md-1">
            <Row>
              <Col md={12}>
                <h2 className="contact-title text-center mb-3">
                  Realiza tu pedido
                </h2>
              </Col>
            </Row>
            <Form
              className="contacto-form"
              id="contacto"
              // onSubmit={handleSubmit}
            >
              <Row>
                <Col md={12} className="mt-3">
                  <FloatingLabel label="Nombre completo">
                    <Form.Control
                      type="text"
                      placeholder="Nombre completo"
                      required
                      // onChange={(e) => setNombres(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={12} className="mt-3">
                  <FloatingLabel label="Número de celular">
                    <Form.Control
                      type="text"
                      placeholder="Número de celular"
                      required
                      // onChange={(e) => setTelefono(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12} className="mt-3">
                  <FloatingLabel label="Cantidad de producto a comprar">
                    <Form.Control
                      type="number"
                      placeholder="Candidad de producto a comprar"
                      required
                      // onChange={(e) => setTelefono(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={12} className="mt-3">
                  <FloatingLabel label="Email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      // onChange={(e) => setPais(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12} className="mt-3">
                  <FloatingLabel label="Ciudad">
                    <Form.Control
                      type="text"
                      placeholder="Ciudad"
                      required
                      // onChange={(e) => setCiudad(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12} className="mt-3">
                  <FloatingLabel label="Dirección">
                    <Form.Control
                      type="text"
                      placeholder="Dirección"
                      required
                      // onChange={(e) => setPais(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12} className="mt-3">
                  <FloatingLabel label="Forma de pago">
                    <Form.Select required>
                      <option value="">- Seleccione -</option>
                      <option value="Efectivo">Efectivo</option>
                      <option value="Transferencia">Transferencia</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>

                <Col md={12} controlId="formGridPassword mx-auto">
                  <p className="legal mt-2">
                    El precio no incluye precio de envío
                  </p>
                  <h2 className="precio">
                    Precio: <span>$0.00</span>
                  </h2>
                  <Button
                    variant="light"
                    type="submit"
                    className="btn-enviar rounded-0 px-4 mt-4 w-100"
                  >
                    Comprar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>

          <Col
            md={6}
            className="text-center pb-3 pb-md-0 my-auto order-1 order-md-2"
          >
            <StaticImage
              src="../images/form/producto.png"
              alt="Beyou producto"
              className="product-image"
            />
            <h2 className="order-product">Producto a ordenar</h2>
            <h3 className="name-product">Nombre del producto</h3>
            <h4 className="price-product">$0.00</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Formulario;
