import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useMode from "../../Hooks/useMode";
import notImg from "../../images/404.png";
import "./NotFound.css";

const NotFound = () => {
  const { theme } = useMode();
  const navigate = useNavigate();
  const [count, setCount] = useState(1);
  useEffect(() => {
    const clearTime = setInterval(() => {
      setCount(count + 1);
    }, 1000);
    if (count === 6) {
      navigate("/");
      setCount(1);
      return () => clearInterval(clearTime);
    }
  }, [navigate, count]);
  return (
    <div
      className={`${
        theme === "light" ? "notfound-page-light" : "notfound-page-dark"
      } text-center`}
    >
      <img className="mx-auto" width="40%" src={notImg} alt="" />
      <h3 style={{ color: "#f9004d" }} className="fw-bold">
        {count}
      </h3>
      <h1 style={{ color: "#f9004d" }} className="fw-bold">
        Opps!
      </h1>
      <h3 className={theme === "light" ? "text-muted" : "text-light"}>
        Page Not Found
      </h3>
      <p className="text-muted">Please check your internet connection</p>
    </div>
  );
};

export default NotFound;
