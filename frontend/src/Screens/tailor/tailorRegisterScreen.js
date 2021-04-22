import { Checkbox } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import "../../styles/tailor/TailorSignInScreen.css";

function TailorRegister() {
  return (
    <div className="tailor__register col-lg-6 col-md-6 p-0">
      <div className="tailor__register__container">
        <div className="title__subTitle">
          <h4>REGISTER</h4>
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
            <div className="row justify-content-end no-gutters">
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

export default withRouter(TailorRegister);
