import { Checkbox } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./TailorSignInRegister.css";
function TailorSignInRegister() {
  return (
    <div className="signIn__register row container-fluid p-0 m-0">
      <TailorSignIn></TailorSignIn>
      <TailorRegister></TailorRegister>
    </div>
  );
}

export default TailorSignInRegister;

function TailorSignIn() {
  return (
    <div className="tailor__signIn col-lg-6 col-md-6 p-0">
      <div className="tailor__signIn__container">
        <div className="title__subTitle">
          <h6>SIGN IN</h6>
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
              <u>Forgot Password</u>{" "}
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

function TailorRegister() {
  return (
    <div className="tailor__register col-lg-6 col-md-6 p-0">
      <div className="tailor__register__container">
        <div className="title__subTitle">
          <h6>REGISTER</h6>
          <p className="subtitle">
            Please register below to create an account.
          </p>
        </div>
        <form action="">
          <div className="tailor__register__inputs">
            <label htmlFor="">
              Location
              <input type="text"></input>
            </label>
            <label htmlFor="">
              First Name
              <input type="text"></input>
            </label>
            <label htmlFor="">
              Last Name
              <input type="text"></input>
            </label>
            <label htmlFor="">
              Phone
              <input type="tel"></input>
            </label>
            <label htmlFor="">
              Email
              <input type="email"></input>
            </label>
            <label htmlFor="">
              Store Location
              <select name="" id="">
                <option value="Duhabi">Duhabi</option>
                <option value="Itahari">Itahari</option>
                <option value="Inaruwa">Inaruwa</option>
                <option value="Biratnagar">Biratnagar</option>
                <option value="Morang">Morang</option>
              </select>
            </label>
            <label htmlFor="">
              No. Of Employees
              <select name="" id="">
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </label>
            <label htmlFor="">
              Experience Certificate of yours or your employees
              <input
                type="file"
                placeholder="Add photo:"
                alt="Experience Certificate"
              ></input>
            </label>
            <label htmlFor="">
              Password
              <input type="text"></input>
            </label>
            <label htmlFor="">
              Confirm Password
              <input type="password"></input>
            </label>
          </div>
          <div className="tailor__register__form__footer ">
            <div className="security__text">
              <Checkbox></Checkbox>
              <small>
                Subscribe to receive email updates about Daasaa productsemail
                updates about Daasaa products, services and events.{" "}
              </small>
            </div>
            <div className="row justify-content-end">
              <Link to="/tailorAccount">
                <button className="tailor__register__button ">Register</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
