import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import useMode from "../../../Hooks/useMode";
// import profile from "../../../images/f2 png.png";
import israfil from "../../../images/pritam (1).png";
import "./Banner.css";

const Banner = () => {
  const { theme } = useMode();
  const [show, setShow] = useState(false);

  const handleVideoOpen = () => {
    setShow(true);
  };
  const handleVideoClose = () => {
    setShow(false);
  };

  return (
    <div
      className={`${
        theme === "light" ? "banner-container-light" : "banner-container-dark"
      } banner-container`}
    >
      <Container>
        <Row className="text-center text-md-start">
          <Col
            data-aos="fade-up"
            xs={12}
            md={7}
            className="pt-4 order-2 order-md-1 "
          >
            <p className=" mb-2">WELCOME TO MY SPACE</p>
            <h1 style={{ fontSize: "48px", fontWeight: "bold" }}>
              👋Hey there,
              <br /> It’s <span style={{ color: "#f9004d" }}>Pritam</span>
              <br />
              <span
    style={{
      fontSize: "50px",
      fontWeight: "500",
      textTransform: "uppercase",
    }}
  >
    <Typewriter
      typeSpeed={70}
      deleteSpeed={50}
      delaySpeed={1000}
      loop
      cursor
      cursorStyle="|"
      cursorBlinking={true}
      words={["Power Bi Expert", "Dashboard Designer", "Artificaial Intelligence expert", "SQL Server expert", "Data"]}
    />
  </span>
            </h1>
            <p className="mt-3">
            Welcome! I’m a skilled professional with extensive experience in Tableau, Excel, and Power BI. I
            specialize in delivering accurate bookkeeping, insightful financial analysis, data visualization, and
            custom reports that help businesses make informed decisions.

            </p>
          
          </Col>
          <Col
            data-aos="fade-down"
            xs={12}
            md={5}
            className=" order-1 order-md-2"
          >
            <div className="img-container">
              <img src={israfil} alt="" />

              <div className="btn-media" onClick={handleVideoOpen}>
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      {/* {show && (
        <div className="video-container">
          <video controls autoPlay loop src={vd}></video>
          <i
            onClick={handleVideoClose}
            className={`${
              theme === "light" ? "close-btn-dark" : "close-btn-light"
            } fa-solid fa-xmark close-btn`}
          ></i>
        </div>
      )} */}
    </div>
  );
};

export default Banner;
