import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
  return (
    <div className="login col-lg-6 col-md-6 p-0">
      <div className="login__container">
        <div className="title__subTitle">
          <h4>SIGN IN</h4>
          <p className="subtitle">
            Please enter your email and password to access your account
          </p>
        </div>
        <form action="">
          <div className="signin__inputs">
            <label htmlFor="">
              Email
              <input type="text"></input>
            </label>
            <label htmlFor="">
              Password
              <input type="text"></input>
            </label>
          </div>
          <div className="security__text">
            <small>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms Of Service Apply{" "}
            </small>
          </div>
          <div className="login__form__footer row justify-content-between mr-0 ml-0">
            <p>
              {" "}
              <u>Forgot Password</u>{" "}
            </p>
            <Link to="/cart">
              <button className="signIn__button">Sign In</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
