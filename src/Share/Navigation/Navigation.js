import { useEffect } from "react";
import { Link } from "react-router-dom";
import useMode from "../../Hooks/useMode";
import logo from "../../images/Black & Blue Minimalist Modern Initial Font Logo.png";
import { Moon, Sun } from "../../svg/svg";
import "./Navigation.css";
import { Link as ScrollLink, } from 'react-scroll';




const Navigation = () => {
  const { theme, handleDark, handleLight } = useMode();

  useEffect(() => {
    const scrollProgress = document.querySelector(".scroll-progress");
    let navbar = document.querySelector(".navbar-container");
    const navbar_btn = document.querySelector(".mobile-navbar-btn");
    let lastScrollTop = 0;

    navbar_btn.addEventListener("click", () => {
      navbar.classList.toggle("actived");
    });

    //scroll
    document.addEventListener("scroll", () => {
      const totalWebpageHeight = document.body.scrollHeight;
      const currentDistanceHeight = document.documentElement.scrollTop;
      const webpageHeight = document.documentElement.clientHeight;

      const parcentageScroll =
        (currentDistanceHeight / (totalWebpageHeight - webpageHeight)) * 100;

      scrollProgress.style.width = Math.round(parcentageScroll) + "%";

      //navbar
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop > lastScrollTop) {
        navbar.style.top = "-65px";
      } else {
        navbar.style.top = "0px";
      }
      lastScrollTop = scrollTop;
    });
  }, []);

  return (
    <>
      <div
        className={`${
          theme === "light" ? "navbar-container-light" : "navbar-container-dark"
        } navbar-container`}
      >
        <Link className="logo" to="/">
          <img src={logo} alt="logo" />
        </Link>

        <nav
          className={`${
            theme === "light" ? "navbar-menu-light" : "navbar-menu-dark"
          } navbar-menu`}
        >
          <ul className="navbar-menu-list">
          <ScrollLink
           to="services-section"  // This should match the 'name' prop from the Element
          smooth={true}  // This enables smooth scrolling
          duration={500}  // Time taken for scroll (in ms)
          className={`${
         theme === "light" ? "text-dark" : "text-light"
        } navbar-link px-4`}
        >
      Services
     </ScrollLink>

            <ScrollLink
           to="projects-section"  // This should match the 'name' prop from the Element
          smooth={true}  // This enables smooth scrolling
          duration={500}  // Time taken for scroll (in ms)
          className={`${
         theme === "light" ? "text-dark" : "text-light"
        } navbar-link px-4`}
        >
      Project
     </ScrollLink>

     <ScrollLink
           to="about-me-section"  // This should match the 'name' prop from the Element
          smooth={true}  // This enables smooth scrolling
          duration={500}  // Time taken for scroll (in ms)
          className={`${
         theme === "light" ? "text-dark" : "text-light"
        } navbar-link px-4`}
        >
      About me
     </ScrollLink>
     <ScrollLink
           to="contact-section"  // This should match the 'name' prop from the Element
          smooth={true}  // This enables smooth scrolling
          duration={500}  // Time taken for scroll (in ms)
          className={`${
         theme === "light" ? "text-dark" : "text-light"
        } navbar-link px-4`}
        >
      Contact Me
     </ScrollLink>
       

            {theme === "light" ? (
              <button
                onClick={handleDark}
                className="border border-0 bg-transparent"
              >
                <Moon />
              </button>
            ) : (
              <button
                onClick={handleLight}
                className="border border-0 bg-transparent"
              >
                <Sun />
              </button>
            )}
          </ul>
        </nav>
        <div className="mobile-navbar-btn">
          <ion-icon
            name="menu-outline"
            class={`${
              theme === "light"
                ? "mobile-nav-icon-dark"
                : "mobile-nav-icon-light"
            } mobile-nav-icon`}
          ></ion-icon>
          <ion-icon
            name="close-outline"
            class={`${
              theme === "light"
                ? "mobile-nav-icon-dark"
                : "mobile-nav-icon-light"
            } mobile-nav-icon`}
          ></ion-icon>
        </div>
      </div>
      <div className="scroll-progress"></div>
    </>
  );
};

export default Navigation;
