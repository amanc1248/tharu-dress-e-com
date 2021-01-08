import { Checkbox } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./EmployesSignInRegister.css";
function EmployeeSignInRegister() {
  return (
    <div className="employees__signIn__register row container-fluid no-gutters p-0">
      <EmployeeSignIn></EmployeeSignIn>
      <EmployeeRegister></EmployeeRegister>
    </div>
  );
}

export default EmployeeSignInRegister;

export function EmployeeSignIn() {
  return (
    <div className="employee__signIn col-lg-6 col-md-6 ">
      <div className="employee__signIn__container">
        <div className="title__subTitle">
          <h6>SIGN IN</h6>
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
                <u>Forgot Password</u>
              </p>
              <Link to="/employeeAccount">
                <button className="employee__signIn__button">Sign In</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export function EmployeeRegister() {
  return (
    <div className="employee__register col-lg-6 col-md-6 ">
      <div className="employee__register__container">
        <div className="title__subTitle">
          <h6>REGISTER</h6>
          <p className="subtitle">
            Please register below to create an account.
          </p>
        </div>
        <form action="">
          <div className="employee__register__inputs">
            <label htmlFor="">
              Location
              <input type="text" />
            </label>
            <label htmlFor="">
              First name
              <input type="text" />
            </label>
            <label htmlFor="">
              Last name
              <input type="text" />
            </label>
            <label htmlFor="">
              Phone
              <input type="tel" />
            </label>
            <label htmlFor="">
              Email
              <input type="email" />
            </label>
            <label htmlFor="">
              Store Id
              <input type="text" />
            </label>
            <label htmlFor="">
              Store Location
              <input type="text" />
            </label>
          </div>
          <div className="employee__register__form__footer ">
            <div className="security__text">
              <Checkbox></Checkbox>
              <small>
                Subscribe to receive email updates about Daasaa products email
                updates about Daasaa products, services and events.{" "}
              </small>
            </div>
            <div className="row justify-content-end">
              <Link to="/employeeAccount">
                <button className="employee__register__button ">
                  Register
                </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
