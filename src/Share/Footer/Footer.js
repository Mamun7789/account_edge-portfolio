import React from "react";
import ScrollToTop from "react-scroll-to-top";
import useMode from "../../Hooks/useMode";
import "./Footer.css";

const Footer = () => {
  const { theme } = useMode();
  return (
    <div
      className={`${theme === "light" ? "footer-light" : "footer-dark"} footer`}
    >
      <ScrollToTop
        data-aos="fade-down"
        smooth
        width="20"
        height="20"
        component={
          <ion-icon
            name="chevron-up-outline"
            style={{ color: "#f9004d", marginTop: "8px", fontWeight: "bold" }}
          ></ion-icon>
        }
        style={
          theme === "light"
            ? { background: "#ECF0F3" }
            : { background: "#1f2125" }
        }
        top="700"
      />
      <p className="">Design and Developed by - Md. Saifullah Al Mamun </p>
    </div>
  );
};

export default Footer;
