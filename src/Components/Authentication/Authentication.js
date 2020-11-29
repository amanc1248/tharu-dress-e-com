import React from "react";
import "../..";
import "./Authentication.css";
import Login from "./Login/Login";
function Authentication() {
  return (
    <div className="authentication">
      <img
        className="authentication__logo"
        src="images/croped.jpg"
        alt="authentication background"
      />
      <div className="login">
        <Login></Login>
      </div>
      <div className="signup"></div>
    </div>
  );
}

export default Authentication;
