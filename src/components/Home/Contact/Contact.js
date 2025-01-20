import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import useMode from "../../../Hooks/useMode";
import { Copy, Map } from "../../../svg/svg";
import "./Contact.css";
import { Element } from 'react-scroll';

const Contact = () => {
  const { theme } = useMode();
 
  const [copyEmail, setCopyEmail] = useState(false);

  return (
    <Element name="contact-section">
      <div
        id="contact"
        className={`${
          theme === "light" ? "form-container-light" : "form-container-dark"
        } form-container`}
      >
        <div data-aos="fade-up" className="text-center mb-5">
          <p
            className={`${
              theme === "light" ? "text-dark text-uppercase " : "text-light"
            }`}
          >
            Let’s Discuss Your Project
          </p>
          <h3
            className={`${
              theme === "light" ? "text-dark" : "text-light"
            } text fw-bold`}
          >
            Contact Me
          </h3>
        </div>
        <Container>
          <Row>
            <Col sm={12} md={3}>
              <div
                data-aos="fade-up"
                className={`${
                  theme === "light" ? "contact-card-light" : "contact-card-dark"
                } contact-card`}
              >
                <h2>
                  <i className="fas fa-envelope icon"></i>
                </h2>
                <div className="copy-container">
                  <h6>helloedge31@gmail.com</h6>
                  <CopyToClipboard
                    text={"helloedge31@gmail.com"}
                    onCopy={() => {
                      setCopyEmail(true);
                      toast.success("Email copied!");
                    }}
                  >
                    <h6
                      className={`${
                        theme === "light" ? "text-black" : "text-light"
                      } copy-btn`}
                    >
                      {copyEmail ? (
                        <span className="copied-text">Copied</span>
                      ) : (
                        <Copy />
                      )}
                    </h6>
                  </CopyToClipboard>
                </div>
              </div>

              <div
                data-aos="fade-down"
                className={`${
                  theme === "light" ? "contact-card-light" : "contact-card-dark"
                } contact-card`}
              >
                <h2>
                  <i className="fas fa-map-marked-alt icon"></i>
                </h2>
                <div className="copy-container">
                  <h6>Dhaka, Bangladesh</h6>
                  <h6 className="copy-btn">
                    <a
                      rel="noreferrer"
                      className={`${
                        theme === "light" ? "text-black" : "text-light"
                      }`}
                      href="https://goo.gl/maps/mw4ysjM8NcGiHHxJA"
                      target="_blank"
                    >
                      <Map />
                    </a>
                  </h6>
                </div>
              </div>
            </Col>

            <Col sm={12} md={9}>
              <div
                className={`${
                  theme === "light" ? "form-side-light" : "form-side-dark"
                } form-side`}
              >
                <form>
                  <Row>
                    <Col sm={12} md={6}>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Name"
                        className={`${
                          theme === "light"
                            ? "contact-input-light"
                            : "contact-input-dark"
                        } form-control contact-input`}
                        required
                      />
                    </Col>
                    <Col sm={12} md={6}>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Email"
                        className={`${
                          theme === "light"
                            ? "contact-input-light"
                            : "contact-input-dark"
                        } form-control contact-input`}
                        required
                      />
                    </Col>
                  </Row>
                  <div className="my-2">
                    <textarea
                      name="message"
                      placeholder="Write Message Here"
                      rows="6"
                      className={`${
                        theme === "light"
                          ? "contact-input-light"
                          : "contact-input-dark"
                      } form-control contact-input`}
                    ></textarea>
                    <br />
                  </div>

                  <button
                    className={`${
                      theme === "light" ? "contactBtn-light" : "contactBtn-dark"
                    } contactBtn`}
                    type="button"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
        <ToastContainer autoClose={2000} draggable pauseOnHover theme="colored" />
      </div>
    </Element>
  );
};

export default Contact;
