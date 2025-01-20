import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Typewriter } from "react-simple-typewriter";
import useMode from "../../../Hooks/useMode";
import "./About.css";
import { Element } from 'react-scroll';

const About = () => {
  const { theme } = useMode();
  return (
 <Element name="about-me-section">
     <div
      className={`${
        theme === "light" ? "about-container-light" : "about-container-dark"
      } about-container`}
      id="about"
    >
      <div data-aos="fade-up" className="text-center mb-5">
        <p className="txt text-uppercase">Know Me More</p>
        <h3
          className={`${
            theme === "light" ? "text-dark" : "text-light"
          } text fw-bold`}
        >
          About Me
        </h3>
      </div>
      <Container>
        <Row className="px-1">
          {/* About Me Section */}
          <Col data-aos="zoom-in-left" md={6}>
            <div
              className={`${
                theme === "light" ? "content-light" : "content-dark"
              } about`}
            >
              <h5>I AM AVAILABLE FOR</h5>
              <p className="icon" style={{ fontSize: "25px" }}>
                <Typewriter
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                  loop
                  cursor
                  cursorStyle="_"
                  cursorBlinking={true}
                  words={[
                    "Excel Related All Works",
                    "Tableau Related All Works",
                    "Power Bi Related All Works",
                  ]}
                />
              </p>
              {/* <h5>Projects</h5> */}
              <h5 className="mt-5">
                Why Choose <span style={{ color: "#f9004d" }}>Me </span>
              </h5>
              <div className="learning-container">
                <div>
                  <h6 style={{ color: "#f9004d" }}>01</h6>
                  <p>
                  <span className="span-text">Expertise in Excel:</span> Skilled in setting up, managing, and optimizing Excel spreadsheets for accurate bookkeeping, financial analysis, and seamless data management. Proficient in creating automated templates, pivot tables, and formulas to improve efficiency and accuracy.
                  </p>
                </div>
                <div>
                  <h6 style={{ color: "#f9004d" }}>02</h6>
                  <p>
                  <span className="span-text">Expertise in Tableau:</span> I am proficient in setting up, managing, and optimizing Tableau dashboards for data visualization and insightful analytics. Skilled in creating interactive dashboards, integrating data from multiple sources, and designing clear, actionable visual reports to support strategic decision-making.
                  </p>
                </div>
                <div>
                  <h6 style={{ color: "#f9004d" }}>03</h6>
                  <p>
                  <span className="span-text">Expertise in Power BI:</span> I am skilled in setting up, managing, and optimizing Power BI reports and dashboards for effective data visualization and analysis. Proficient in integrating various data sources, designing interactive visualizations, and creating dynamic reports that provide actionable insights to support business strategies.
                  </p>
                </div>
              </div>
              <p>
               If you choose me, I will provide accurate and reliable services in Excel, Tableau, and Power BI. I am dedicated to delivering high-quality results tailored to your needs.
              </p>
            </div>
          </Col>
          {/* Skills Section */}
          <Col data-aos="zoom-in-right" md={6}>
  <div
    className={`${
      theme === "light" ? "content-light" : "content-dark"
    } skills`}
  >
    <h5>Skills</h5>
    <div className="skills-card-container">
      {[
        "Data Analyst",
        "Dashboard Designer",
        "Power BI Expert",
        "Microsoft Power BI Expert",
        "Data Manager",
        "Excel Expert",
        "Excel Spreadsheet Expert",
        "Data Miner",
        "Power Query Expert",
        "SQL Server Expert",
        "Excel VBA Expert",
        "Excel Macros Expert",
        "Artificial Intelligence Expert",
        "Excel Automation Expert",
        "Excel Reporting Expert",
        "Excel Formatting Expert",
        "Microsoft Excel Expert",
        "Customer Service Representative",
      ].map((skill, index) => (
        <div key={index} className="skill-card">
          <p>{skill}</p>
        </div>
      ))}
    </div>
  </div>
</Col>

        </Row>
      </Container>
    </div>

 </Element>
  );
};

export default About;
