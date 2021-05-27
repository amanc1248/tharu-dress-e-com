import { Checkbox } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/employee/EmployeeSignInScreen.css";
function EmployeeSignInScreen() {
  return (
    <div className="employees__signIn__register row container-fluid no-gutters p-0">
      <EmployeeSignIn></EmployeeSignIn>
    </div>
  );
}

export default EmployeeSignInScreen;

export function EmployeeSignIn() {
  return (
    <div className="employee__signIn col-lg-6 col-md-6 ">
      <div className="employee__signIn__container">
        <div className="title__subTitle">
          <h4>SIGN IN</h4>
          <p className="subtitle">
            Please enter your email and password to access your account
          </p>
        </div>
        <form action="">
          <div className="employee__signIn__inputs">
            <label htmlFor="">
              Email
              <input type="email" />
            </label>
            <label htmlFor="">
              Password
              <input type="password" />
            </label>
            <div className="security__text">
              <small>
                This site is protected by reCAPTCHA and the Google Privacy
                Policy and Terms Of Service Apply
              </small>
            </div>
            <div className="employee__form__footer row justify-content-between no-gutters">
              <p>
                <u> New Employee?</u>
                <Link to="/employeeRegister"> Register</Link>
              </p>
              <Link to="/employeeAccount">
                <button className="tailor__signIn__button">Sign In</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
