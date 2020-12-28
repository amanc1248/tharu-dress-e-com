import React from "react";
import "./TailorHeader.css";
function TailorHeader() {
  return (
    <div className="tailor__header">
      <div className="tailor__header__title">DASA</div>
      <div className="tailor__header__image">
        <img
          className="authentication__logo  w-100"
          src="images/croped.jpg"
          alt="authentication background"
        />
      </div>
    </div>
  );
}

export default TailorHeader;
