import React from "react";
import "./TailorHeader.css";
function TailorHeader() {
  return (
    <div className="tailor__header">
      <div className="tailor__header__image">
        <img
          className="authentication__logo  w-100"
          src="images/croped.jpg"
          alt="authentication background"
        />
      </div>
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
