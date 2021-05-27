import { Checkbox } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import "../../styles/tailor/TailorSignInScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { tailorRegisterAction } from "../../actions/tailorActions";
import Message from "../../Components/Message";
import Loader from "../../Components/Loader";

function TailorRegister({ history }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [storeLocation, setStoreLocation] = useState();
  const [street, setStreet] = useState();
  const [noEmployees, setNoEmployees] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [message, setMessage] = useState();

  const dispatch = useDispatch();
  const tailorRegister = useSelector((state) => state.tailorRegister);
  const { loading, error, tailorInfo } = tailorRegister;
  useEffect(() => {
    if (tailorInfo) {
      history.push("/tailorAccount");
    }
  }, [history, tailorInfo]);
  const registerHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(
        tailorRegisterAction(
          firstName,
          lastName,
          email,
          phone,
          storeLocation,
          street,
          noEmployees,
          password
        )
      );
    }
  };

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
              First Name
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              Last Name
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              Phone
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              Email
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              City
              <input
                type="text"
                value={storeLocation}
                onChange={(e) => setStoreLocation(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              Street
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              ></input>
            </label>

            <label htmlFor="">
              No. Of Employees
              <input
                type="number"
                value={noEmployees}
                onChange={(e) => setNoEmployees(e.target.value)}
              ></input>
            </label>

            <label htmlFor="">
              Password
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              Confirm Password
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
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
            {message && <Message variant="danger">{message}</Message>}

            {error && <Message variant="danger">{error}</Message>}
            {loading && <Loader></Loader>}
            <div className="row justify-content-between no-gutters">
              <p>
                <u>Already a tailor?</u>
                <Link to="/tailorSignIn"> SignIn</Link>
              </p>
              <button
                className="tailor__register__button "
                onClick={registerHandler}
              >
                Register
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(TailorRegister);
