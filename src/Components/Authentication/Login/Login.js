import React from "react";
import "./Login.css";
function Login() {
  return (
    <div className="login">
      <div className="title__subTitle">
        <h5>SIGN IN</h5>
        <p>Please enter your email and password to access your account</p>
      </div>
      <div className="login__container">
        <form action="">
          <p>Email</p>
          <input type="text"></input>
          <p>Password</p>
          <input type="text"></input>
          <div className="security__text">
            <small>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms Of Service Apply{" "}
            </small>
          </div>
          <div className="form__footer">
            <p>
              {" "}
              <u>Forgot Password</u>{" "}
            </p>
            <button className="signIn__button">Sign In</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
