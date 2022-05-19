import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import axios from "axios";
import Swal from "sweetalert2";
import Spinner from "../components/spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Button from "react-bootstrap/Button";

const Formulario = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: "top-end",
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener("mouseenter", Swal.stopTimer);
      toast.addEventListener("mouseleave", Swal.resumeTimer);
    },
  });

  const [activeSpinner, setActiveSpinner] = useState(false);
  const [nombreCompleto, setNombreCompleto] = useState("");
  const [numeroCelular, setNumeroCelular] = useState("");
  const [cantidad, setCantidad] = useState(0);
  const [email, setEmail] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [formaPago, setFormaPago] = useState("");
  // eslint-disable-next-line
  const [precio, setPrecio] = useState(10);

  var precio_final = cantidad * precio;

  const handleChange = (event) => {
    setFormaPago(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setActiveSpinner(true);
    // let cid = cuid();
    const dataForm = new FormData();
    dataForm.append("nombre_completo", nombreCompleto);
    dataForm.append("numero_celular", numeroCelular);
    dataForm.append("cantidad", cantidad);
    dataForm.append("email", email);
    dataForm.append("ciudad", ciudad);
    dataForm.append("direccion", direccion);
    dataForm.append("forma_pago", formaPago);
    const respuesta = await axios.post(
      "https://kernel.inkside.studio/api/pedido",
      dataForm
    );
    if (respuesta.status === 200) {
      if (respuesta.data.status === "Ok") {
        setNombreCompleto("");
        setNumeroCelular("");
        setCantidad(0);
        setEmail("");
        setCiudad("");
        setDireccion("");
        // setFormaPago("");
        e.target.reset();
        setActiveSpinner(false);
        // handleClose();
        Toast.fire({
          icon: "success",
          title: "Su pedido ha sido realizado exitosamente",
        });
        /* Swal.fire({
          title: "¡Gracias por confiar en nosotros!",
          text: "Pronto nos pondremos en contacto con usted.",
          showCloseButton: true,
          icon: "success",
        }); */
      } else {
        setActiveSpinner(false);
        Toast.fire({
          icon: "error",
          title: "Error al enviar la información",
        });
        /* Swal.fire({
          title: "Error al enviar la información",
          text: "Intente en unos minutos...",
          showCloseButton: true,
          icon: "error",
        }); */
      }
    } else {
      setActiveSpinner(false);
      Toast.fire({
        icon: "error",
        title: "Error al enviar la información",
      });
      /* Swal.fire({
        title: "Error al enviar informacion",
        text: "Intente en unos minutos...",
        showCloseButton: true,
        icon: "error",
      }); */
    }
  };

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
              onSubmit={handleSubmit}
            >
              <Row>
                <Col md={12} className="mt-3">
                  <FloatingLabel label="Nombre completo">
                    <Form.Control
                      type="text"
                      placeholder="Nombre completo"
                      required
                      onChange={(e) => setNombreCompleto(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={12} className="mt-3">
                  <FloatingLabel label="Número de celular">
                    <Form.Control
                      type="text"
                      placeholder="Número de celular"
                      required
                      onChange={(e) => setNumeroCelular(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12} className="mt-3">
                  <FloatingLabel label="Cantidad de producto a comprar">
                    <Form.Control
                      type="number"
                      placeholder="Candidad de producto a comprar"
                      required
                      onChange={(e) => setCantidad(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>
                <Col md={12} className="mt-3">
                  <FloatingLabel label="Email">
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12} className="mt-3">
                  <FloatingLabel label="Ciudad">
                    <Form.Control
                      type="text"
                      placeholder="Ciudad"
                      required
                      onChange={(e) => setCiudad(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12} className="mt-3">
                  <FloatingLabel label="Dirección">
                    <Form.Control
                      type="text"
                      placeholder="Dirección"
                      required
                      onChange={(e) => setDireccion(e.target.value)}
                    />
                  </FloatingLabel>
                </Col>

                <Col md={12} className="mt-3">
                  <FloatingLabel label="Forma de pago">
                    <Form.Select
                      required
                      id="forma-pago"
                      value={formaPago}
                      onChange={handleChange}
                    >
                      <option value="">- Seleccione -</option>
                      <option value="Efectivo">Efectivo</option>
                      <option value="Transferencia">Transferencia</option>
                    </Form.Select>
                  </FloatingLabel>
                </Col>

                <Col md={12}>
                  <p className="legal mt-2">
                    El precio no incluye precio de envío
                  </p>
                  <h2 className="precio">
                    Precio: <span>${precio_final}</span>
                  </h2>
                  {/* <Button
                    variant="light"
                    type="submit"
                    className="btn-enviar rounded-0 px-4 mt-4 w-100"
                  >
                    Comprar
                  </Button> */}

                  {activeSpinner ? (
                    <Spinner className="mt-4" />
                  ) : (
                    <Button
                      type="submit"
                      variant="light"
                      className="btn-enviar rounded-0 px-4 mt-4 w-100"
                    >
                      Enviar
                    </Button>
                  )}
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
            <h3 className="name-product">Parches mensuales</h3>
            <h4 className="price-product">$10</h4>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Formulario;
