import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  A11y,
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Element } from 'react-scroll';


// swiper bundle styles
import "swiper/swiper-bundle.min.css";
// swiper core styles
import "swiper/swiper.min.css";
import useMode from "../../../Hooks/useMode";
import ProjectModal from "../ProjectModal/ProjectModal";
import Lang from "./Lang";
import "./Projects.css";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [show, setShow] = useState(false);
  const { theme } = useMode();
  const [projectData, setProjectData] = useState();

  useEffect(() => {
    fetch("/fackDb.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);

  //modal

  const handleClose = () => setShow(false);
  const handleShow = (data) => {
    setProjectData(data);
    setShow(true);
  };

  return (
<Element name="projects-section">

<div
      className={`${
        theme === "light" ? "slider-container-light" : "slider-container-dark"
      } slider-container`}
    >
      <div data-aos="fade-up" className="text-center mb-5">
        <p className="txt">VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</p>
        <h3
          className={`${
            theme === "light" ? "text-dark" : "text-light"
          } text fw-bold`}
        >
          My Portfolio
        </h3>
      </div>
      <Container>
        <Row data-aos="zoom-in" className="">
          <Col xs={12} md={12}>
            <Swiper
              modules={[
                Navigation,
                Pagination,
                Scrollbar,
                A11y,
                Autoplay,
                EffectCoverflow,
              ]}
              autoplay={{ delay: 4000 }}
              effect={"coverflow"}
              slidesPerView={1}
              breakpoints={{
                688: {
                  slidesPerView: 3,
                },
              }}
              spaceBetween={15}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
            >
              {projects.map((project) => (
                <SwiperSlide key={project.id}>
                  <div
                    className={`${
                      theme === "light"
                        ? "project-card-light"
                        : "project-card-dark"
                    } project-card text-start`}
                  >
                    <div className="overflow-hidden">
                      <img src={project.img} alt="" />
                    </div>
                    <div className="text-start">
                      <Lang project={project} />
                    </div>
                    <div className="mt-3">
                      <p className="fs-5 my-0">{project.name}</p>
                      <div>
                        <p className="lh-1">
                          <button
                            style={{ marginLeft: "-9px" }}
                            className="btn btn-sm text-primary"
                            onClick={() => handleShow(project)}
                          >
                            ...See More
                          </button>
                        </p>
                      </div>
                    </div>
                    <div>
                      <a
                        rel="noreferrer"
                        href={`${project.live}`}
                        target="_blank"
                        className={`${
                          theme === "light" ? "text-dark" : "text-light"
                        } view-btn border me-2 mt-2`}
                      >
                        <i className="fa-solid fa-eye"></i> Drive Link
                      </a>

                     

                      {project.server && (
                        <a
                          rel="noreferrer"
                          href={`${project.server}`}
                          target="_blank"
                          className={`${
                            theme === "light" ? "text-dark" : "text-light"
                          } view-btn border me-2 mt-2`}
                        >
                          <i className="fa-solid fa-arrow-trend-up"></i> Server
                          Link
                        </a>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </Col>
        </Row>
      </Container>
      <ProjectModal
        show={show}
        handleClose={handleClose}
        projectData={projectData}
      />
    </div>
</Element>
  );
};

export default Projects;
