import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import "../../styles/tailor/TailorSignInScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { tailorLoginAction } from "../../actions/tailorActions";
import Message from "../../Components/Message";
import Loader from "../../Components/Loader";

function TailorSignIn({ history }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { loading, error, tailorInfo } = tailorLogin;
  useEffect(() => {
    if (tailorInfo) {
      history.push("/tailorAccount");
    }
  }, [tailorInfo, history]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(tailorLoginAction(email, password));
  };
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
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
          </div>
          <div className="security__text">
            <small>
              This site is protected by reCAPTCHA and the Google Privacy Policy
              and Terms Of Service Apply{" "}
            </small>
          </div>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader></Loader>}
          <div className="tailor__form__footer row justify-content-between mr-0 ml-0">
            <p>
              <u> New Tailor?</u>
              <Link to="/tailorRegister"> Register</Link>
            </p>
            <Link to="/tailorAccount">
              <button className="tailor__signIn__button" onClick={loginHandler}>
                Sign In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(TailorSignIn);
