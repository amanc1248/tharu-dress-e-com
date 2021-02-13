import React from "react";
import "./Authentication.css";
import Login from "./Login/Login";
import Signup from "./Signup/Signup.js";
function Authentication() {
  return (
    <div className="authentication">
      <img
        className="authentication__logo  w-100"
        src="images/croped.jpg"
        alt="authentication background"
      />
      <div className=" login__signup row container-fluid p-0 m-0  ">
        <Login></Login>
        <Signup></Signup>
      </div>
    </div>
  );
}

export default Authentication;
