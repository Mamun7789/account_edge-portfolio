
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import useMode from "../../../Hooks/useMode";
import "./Service.css";
import { Element } from 'react-scroll';

const services = [
  {
    id: 1,
    icon: "https://i.ibb.co.com/9TvZ0w5/ms-excel-icon.png",
    serviceName: "Excel",
    details:
      "As an experienced professional with over 5 years of expertise, I help businesses set up, streamline, and manage their Excel spreadsheets. From financial reporting to expense tracking and data analysis, I provide customized solutions to ensure your records are accurate, efficient, and ready for growth.",
  },
  {
    id: 2,
    icon: "https://i.ibb.co.com/mNDFVb6/tableau-22449ad9-3617-4f3b-bda2-8a26c3208822-1024x1024-2x.webp",
    serviceName: "Tableau",
    details:
      " With 5+ years of experience, I help businesses optimize and manage Tableau dashboards, perform data analysis, and create insightful reports. My solutions ensure accurate, actionable data to support growth and drive informed decisions.",
  },
  {
    id: 3,
    icon: "https://i.ibb.co/YkTqcwM/New-Power-BI-Logo.png",
    serviceName: "Power BI",
    details:
      "I specialize in creating interactive dashboards, custom visualizations, and data models tailored to your business needs. Transform raw data into actionable insights to drive smarter decisions and achieve your goals.",
  },
];

const Service = () => {
  const { theme } = useMode();

  return (
  <Element name="services-section">
      <div
      className={`${
        theme === "light" ? "service-container-light" : "service-container-dark"
      } service-container text-light`}
    >
      <div data-aos="fade-up" className="text-center mb-5">
        <p className={
          `${
            theme === "light" ? "text-dark" : "text-light"
          }`
        }>SERVICES</p>
        <h3
          className={`${
            theme === "light" ? "text-dark" : "text-light"
          } text fw-bold`}
        >
          What I Do
        </h3>
      </div>
      <Container>
        <Row className="g-4 text-center">
          {services.map((service, index) => (
            <Col sm={12} md={4} key={service.id}>
              <div
                className={`custom-card card-${index + 1}`} // Dynamic class for hover effect
              >
                <h2 className="service-icon">
                  <img
                    src={service.icon}
                    alt={service.serviceName}
                    className="img-fluid"
                  />
                </h2>
                <h4>{service.serviceName}</h4>
                <p>{service.details}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  </Element>
  );
};

export default Service;






