import React from "react";
import "./services.css";

import { faPeopleRoof } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services() {
  return (
    <div className="services">
      <div className="box"> 
        <i className="bi bi-truck"></i>
        <b>Free Shipping</b>
      </div>
      <div className="box">
        <i className="bi bi-gift"></i>
        <b>Gift Cards</b>
      </div>
      <div className="box">
        <i className="bi bi-arrow-clockwise"></i>
        <b>7 Days Return</b>
      </div>
      <div className="box">
        {/* <i className="bi bi-send"></i> */}
        <i><FontAwesomeIcon icon={faPeopleRoof} /></i>
        <b>Join Our Community</b>
      </div>
    </div>
  );
}

export default Services;
