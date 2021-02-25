import React from "react";
import ImageWithTitle from "../../Global/ImageWithTitle";
import "./TailorHeader.css";
function TailorHeader() {
  return (
    <div className="tailor__header">
      <ImageWithTitle theTitle="TAILOR ACCOUNT"></ImageWithTitle>
      <div className="welcome__user">
        <h5>WELCOME, AMAN</h5>
      </div>
      <p className="contact__us__instruction">
        If you have any queries or need further assistance, please Contact Us
      </p>
    </div>
  );
}

export default TailorHeader;
