import { Checkbox } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "../../styles/employee/EmployeeSignInScreen.css";

function EmployeeRegisterScreen() {
  return (
    <div>
      <div className="employees__signIn__register row container-fluid no-gutters p-0">
        <EmployeeRegister></EmployeeRegister>
      </div>
    </div>
  );
}
export function EmployeeRegister() {
  return (
    <div className="employee__register col-lg-6 col-md-6 ">
      <div className="employee__register__container">
        <div className="title__subTitle">
          <h4>REGISTER</h4>
          <p className="subtitle">
            Please register below to create an account.
          </p>
        </div>
        <form action="">
          <div className="employee__register__inputs">
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
              City
              <input type="text" />
            </label>
            <label htmlFor="">
              Street
              <input type="text" />
            </label>
            <label htmlFor="">
              Tailor Store Id
              <input type="text" />
            </label>
            <label htmlFor="">
              Password
              <input type="text" />
            </label>
            <label htmlFor="">
              Confirm Password
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

            <div className="row justify-content-between no-gutters">
              <p>
                <u> Already an Employee?</u>
                <Link to="/employeesignin"> Signin</Link>
              </p>
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

export default EmployeeRegisterScreen;
