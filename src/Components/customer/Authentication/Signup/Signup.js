import { Checkbox } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Signup.css";
function Signup() {
  return (
    <div className="signup col-lg-6 col-md-6 p-0">
      <div className="signup__container">
        <div className="title__subtitle">
          <h4>REGISTER</h4>
          <p className="subtitle">Please register below to create an account</p>
        </div>
        <form action="">
          <div className="register__inputs">
            <label>
              First Name
              <input type="text" />
            </label>

            <label>
              Last Name
              <input type="text" />
            </label>

            <label>
              Email
              <input type="text" />
            </label>

            <label>
              Phone
              <input type="text" />
            </label>

            <label>
              Location
              <input type="text" />
            </label>

            <label>
              Address
              <input type="text" />
            </label>

            <label>
              Password
              <input type="text" />
            </label>

            <label>
              Confirm Password
              <input type="text" />
            </label>
          </div>
          <div className="signup__form__footer ">
            <div className="security__text">
              <Checkbox></Checkbox>
              <small>
                Subscribe to receive email updates about Daasaa productsemail
                updates about Daasaa products, services and events.{" "}
              </small>
            </div>
            <div className="row justify-content-end no-gutters">
              <Link to="/cart">
                <button className="register__button ">Register</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
