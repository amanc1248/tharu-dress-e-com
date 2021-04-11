import React from "react";
import "../../styles/customer/CustomerSignInScreen.css";
import { Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import ImageWithTitle from "../../Components/ImageWithTitle";
function CustomerSignInScreen() {
  return (
    <div className="authentication">
      <ImageWithTitle theTitle="CREATE DASA ACCOUNT"></ImageWithTitle>
      <div className=" login__signup row container-fluid p-0 m-0  ">
        <Login></Login>
        <Signup></Signup>
      </div>
    </div>
  );
}

export function Login() {
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
              <input type="email" />
            </label>

            <label>
              Phone
              <input type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
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
              <input type="password" />
            </label>

            <label>
              Confirm Password
              <input type="password" />
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

export default CustomerSignInScreen;
