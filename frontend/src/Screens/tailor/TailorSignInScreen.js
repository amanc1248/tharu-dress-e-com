import { Checkbox } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import "../../styles/tailor/TailorSignInScreen.css";

function TailorSignIn() {
  return (
    <div className="tailor__signIn col-lg-6 col-md-6 p-0">
      <div className="tailor__signIn__container">
        <div className="title__subTitle">
          <h4>SIGN IN</h4>
          <p className="subtitle">
            Please enter your email and password to access your account
          </p>
        </div>
        <form action="">
          <div className="tailor__signin__inputs">
            <label htmlFor="">
              Email
              <input type="email"></input>
            </label>
            <label htmlFor="">
              Password
              <input type="password"></input>
            </label>
          </div>
          <div className="security__text">
            <small>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms Of Service Apply{" "}
            </small>
          </div>
          <div className="tailor__form__footer row justify-content-between mr-0 ml-0">
            <p>
              {" "}
              <u className="forgot__password">Forgot Password</u>{" "}
            </p>
            <Link to="/tailorAccount">
              <button className="tailor__signIn__button">Sign In</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(TailorSignIn);
