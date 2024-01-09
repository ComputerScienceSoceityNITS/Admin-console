import React from "react";
import "../styles/Hamburger.css";

const Hamburger = ({ clicked, setClicked }) => {
  return (
    <div
      className={`hamMenu ${clicked ? "active" : ""}`}
      onClick={() => setClicked(!clicked)}
    >
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default Hamburger;
