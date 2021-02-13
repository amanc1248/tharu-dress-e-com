import React from "react";
import EmployeeAndTailorRegister from "../Header/EmployeeAndTailorRegister";
import "./Authentication.css";
import Login from "./Login/Login";
import Signup from "./Signup/Signup.js";
function Authentication() {
  return (
    <div className="authentication">
      <EmployeeAndTailorRegister
      theTitle="CREATE DASA ACCOUNT"
      ></EmployeeAndTailorRegister>
      <div className=" login__signup row container-fluid p-0 m-0  ">
        <Login></Login>
        <Signup></Signup>
      </div>
    </div>
  );
}

export default Authentication;
