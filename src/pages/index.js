import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";
// import SwiperCore, { Autoplay, Navigation, Pagination } from "swiper";

import {
  faCheckCircle,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);
// SwiperCore.use([Navigation]);
// SwiperCore.use([Pagination]);

const IndexPage = () => {
  return (
    <main>
      <Menu />
      <Container fluid>
        <Row>
          <Col md={12} className="px-0 d-flex justify-content-center">
            <StaticImage
              src="../images/banner/beyou-header.jpg"
              alt="Beyou logo"
              className="main-banner"
            />
          </Col>
        </Row>

        <Row>
          <Col md={12} className="mt-5 mb-3 mb-md-4 mt-md-5 pt-md-5">
            <h1 className="first-title">
              Developed for any period. <br />
              Experience <strong>the tingle!</strong>
            </h1>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="d-flex justify-content-center">
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
                      Hot Water <br />
                      Bottle
                    </h3>
                  </th>
                  <th>
                    <h3 className="header-table">
                      Heat <br />
                      Patches
                    </h3>
                  </th>
                  <th className="border-right-hidden">
                    <h3 className="header-table">
                      Ice <br />
                      Packs
                    </h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-left-hidden">
                  <td>
                    <h3 className="title-table">On-the-go Comfort</h3>
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
                    <h3 className="title-table">Discreet and Lightweight</h3>
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
                    <h3 className="title-table">Convenient to sleep with</h3>
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
                      Proven to release over 12 hours
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
                    <h3 className="title-table">
                      All Natural and Vegan-friendly
                    </h3>
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
                      Cruelty-free and Biodegradable
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
              Say goodbye to bulky heat pads and refilling hot water bottles,
              and hello to comfort on the go with the BeYou Monthly Patch!
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
                    Matrix Arrangement
                  </h2>
                  <p className="patch-text">
                    Our Monthly Patches encompass a proprietary matrix
                    arrangement of Menthol and Eucalyptus molecules.
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
                    0.3mm thick
                  </h2>
                  <p className="patch-text">
                    A thin, discreet adhesive strip that's perfectly convenient
                    at any time of the month. Use it during work, sleep,
                    exercise or travel!
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
                    Molecules Released
                  </h2>
                  <p className="patch-text">
                    Experience the fast-acting effect of the Monthly Patch over
                    a 12 hour release, complimenting your daily routine at any
                    time: all day or night!
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
            <h2 className="monthly-patches">BeYou Monthly Patches</h2>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <Swiper
              slidesPerView={2}
              spaceBetween={20}
              autoplay={true}
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
