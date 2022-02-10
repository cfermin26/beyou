import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
// import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import {
  faCheckCircle,
  faTimesCircle,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
SwiperCore.use([Pagination]);

const IndexPage = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <main>
      <Menu />
      <Container fluid className="main-banner bg-yellow">
        <Row>
          <Col
            md={4}
            className="px-0 d-flex justify-content-center my-auto order-2 order-md-1"
          >
            <div className="text-container">
              <h1 className="banner-title mb-1 mt-3 mt-md-0">
                BeYou, parches mensuales
              </h1>
              <h4 className="banner-subtitle">Para períodos molestos</h4>
              <div className="btn-banner mt-4">
                <AnchorLink to="/#formulario">
                  <Button variant="info" className="btn-buy me-3">
                    PEDIR AHORA
                  </Button>
                </AnchorLink>
                <Button variant="light btn-play" onClick={handleShow}>
                  <FontAwesomeIcon icon={faPlay} className="me-2" />
                  REPRODUCIR VIDEO
                </Button>
              </div>
            </div>
          </Col>
          <Col
            md={8}
            className="px-0 d-flex justify-content-center order-1 order-md-2"
          >
            <StaticImage
              src="../images/banner/beyou-header.jpg"
              alt="Beyou logo"
            />
          </Col>
        </Row>
      </Container>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="p-0">
          <div
            className="video"
            style={{
              position: "relative",
              paddingBottom: "56.25%",
              paddingTop: 25,
              height: 0,
            }}
          >
            <iframe
              title="beyu video"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src={`https://www.youtube.com/embed/D_zS5dsCD6U`}
              frameBorder="0"
            />
          </div>
        </Modal.Body>
      </Modal>

      <Container fluid>
        <Row>
          <Col md={12} className="mt-4 mb-3 mb-md-4 mt-md-5 pt-md-5">
            <h1 className="first-title">
              Desarrollado para cualquier periodo. <br />
              Experimenta <strong>el hormigueo</strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-center px-5 px-md-0">
            <div className="girls-border d-flex justify-content-center">
              <StaticImage
                src="../images/beyou-patch-on-girls.jpg"
                alt="Beyou logo"
                className="girls-image"
              />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-center mt-5 mt-md-5">
            <Table bordered className="feature-table">
              <thead>
                <tr className="non-border-top">
                  <th className="non-border">&nbsp;</th>
                  <th>
                    <StaticImage
                      src="../images/beyou-logo-table.webp"
                      alt="Beyou logo"
                      className="girls-image"
                    />
                  </th>
                  <th>
                    <h3 className="header-table">
                      Fundas de <br /> Agua Caliente
                    </h3>
                  </th>
                  <th>
                    <h3 className="header-table">
                      Parches <br /> de calor
                    </h3>
                  </th>
                  <th className="border-right-hidden">
                    <h3 className="header-table">
                      Bolsas <br />
                      de hielo
                    </h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-left-hidden">
                  <td>
                    <h3 className="title-table">Comfort en cada uno</h3>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </td>
                  <td className="border-right-hidden">
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                </tr>
                <tr className="border-left-hidden">
                  <td>
                    <h3 className="title-table">Discreto y liviano</h3>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                  <td className="border-right-hidden">
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                </tr>
                <tr className="border-left-hidden">
                  <td>
                    <h3 className="title-table">
                      Conveniente para dormir con el
                    </h3>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </td>
                  <td className="border-right-hidden">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </td>
                </tr>
                <tr className="border-left-hidden">
                  <td>
                    <h3 className="title-table">
                      Liberación después de las 12 horas
                    </h3>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                  <td className="border-right-hidden">
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                </tr>
                <tr className="border-left-hidden">
                  <td>
                    <h3 className="title-table">Naturales y veganos</h3>
                  </td>
                  <td>
                    <FontAwesomeIcon
                      icon={faCheckCircle}
                      className="text-center"
                    />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </td>
                  <td className="border-right-hidden">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </td>
                </tr>
                <tr className="border-left-hidden">
                  <td>
                    <h3 className="title-table">
                      Libres de crueldad animal y biodegradables
                    </h3>
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                  <td>
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                  <td className="border-right-hidden">
                    <FontAwesomeIcon icon={faTimesCircle} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="d-flex justify-content-center mt-1 mt-md-4">
            <h4 className="subtitle-table">
              Di adiós a las almohadillas térmicas voluminosas y rellenado de
              botellas de agua caliente y hola al comfort de los parches
              mensuales BeYou
            </h4>
          </Col>
        </Row>
      </Container>

      <div className="patch-info">
        <Container className="patch-container">
          <Row className="px-4">
            <Col md={12} className="patch-card patch-shadow-purple">
              <Row>
                <Col md={7} className="my-auto order-2 order-md-1">
                  <StaticImage
                    src="../images/patch/natural-period-cramp-relief.webp"
                    alt="Beyou logo"
                    className="girls-image"
                  />
                </Col>
                <Col md={5} className="my-auto px-4 px-md-4 order-1 order-md-1">
                  <h2 className="patch-title patch-title-purple">
                    <div className="patch-num-outer patch-num-purple me-2">
                      <div className="patch-num-inner">1</div>
                    </div>
                    Composición{" "}
                  </h2>
                  <p className="patch-text">
                    Nuestros parches mensuales están constituidos de una matriz
                    de moléculas de mentol y eucalipto.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-4 pt-1 px-4">
            <Col md={12} className="patch-card patch-shadow-green">
              <Row>
                <Col md={7} className="my-auto order-2 order-md-1">
                  <StaticImage
                    src="../images/patch/patch-thickness.webp"
                    alt="Beyou logo"
                    className="girls-image"
                  />
                </Col>
                <Col md={5} className="my-auto px-4 px-md-4 order-1 order-md-1">
                  <h2 className="patch-title patch-title-green">
                    <div className="patch-num-outer patch-num-green me-2">
                      <div className="patch-num-inner">2</div>
                    </div>
                    0.3 mm de ancho
                  </h2>
                  <p className="patch-text">
                    Un delgado y discreto adhesivo que es perfecto para
                    cualquier etapa del mes y puedes usarlo durante el trabajo
                    ejercicio sueño y viajes.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>

          <Row className="mt-4 pt-1 px-4">
            <Col md={12} className="patch-card patch-shadow-purple">
              <Row>
                <Col md={7} className="my-auto order-2 order-md-1">
                  <StaticImage
                    src="../images/patch/patch-release.webp"
                    alt="Beyou logo"
                    className="girls-image"
                  />
                </Col>
                <Col md={5} className="my-auto px-4 px-md-4 order-1 order-md-1">
                  <h2 className="patch-title patch-title-purple">
                    <div className="patch-num-outer patch-num-purple me-2">
                      <div className="patch-num-inner">3</div>
                    </div>
                    Liberación de las moléculas
                  </h2>
                  <p className="patch-text">
                    Experimenta la rápida acción de parche mensual por más de 12
                    horas, complementando tu rutina en cualquier momento:
                    durante el día y la noche.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row className="mt-4 mb-4 mb-md-5 mt-md-5">
          <Col md={12}>
            <h2 className="monthly-patches">BeYou, parches mensuales</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Swiper
              className="py-3"
              slidesPerView={2}
              spaceBetween={20}
              autoplay={true}
              pagination={{ clickable: true }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              <SwiperSlide>
                <StaticImage
                  src="../images/monthly/monthly-patch-1.webp"
                  alt="Beyou"
                  className="w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../images/monthly/monthly-patch-2.webp"
                  alt="Beyou"
                  className="w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../images/monthly/monthly-patch-3.webp"
                  alt="Beyou"
                  className="w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../images/monthly/monthly-patch-4.webp"
                  alt="Beyou"
                  className="w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../images/monthly/monthly-patch-5.webp"
                  alt="Beyou"
                  className="w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../images/monthly/monthly-patch-6.webp"
                  alt="Beyou"
                  className="w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../images/monthly/monthly-patch-7.webp"
                  alt="Beyou"
                  className="w-100"
                />
              </SwiperSlide>
              <SwiperSlide>
                <StaticImage
                  src="../images/monthly/monthly-patch-8.webp"
                  alt="Beyou"
                  className="w-100"
                />
              </SwiperSlide>
            </Swiper>
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />

      {/* <FontAwesomeIcon icon={faCheckCircle} />
      <FontAwesomeIcon icon={faTimesCircle} /> */}
      <Footer />
    </main>
  );
};

export default IndexPage;
