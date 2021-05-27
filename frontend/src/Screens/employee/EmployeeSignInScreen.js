import { Checkbox } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, withRouter } from "react-router-dom";
import { employeeLoginAction } from "../../actions/employeeActions";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import "../../styles/employee/EmployeeSignInScreen.css";

function EmployeeSignIn({ history }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const employeeLogin = useSelector((state) => state.employeeLogin);
  const { loading, error, employeeInfo } = employeeLogin;
  useEffect(() => {
    if (employeeInfo) {
      history.push("/employeeAccount");
    }
  }, [employeeInfo, history]);

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(employeeLoginAction(email, password));
  };
  return (
    <div className="employees__signIn__register row container-fluid no-gutters p-0">
      <div className="employee__signIn col-lg-6 col-md-6 ">
        <div className="employee__signIn__container">
          <div className="title__subTitle">
            <h4>SIGN IN</h4>
            <p className="subtitle">
              Please enter your email and password to access your account
            </p>
          </div>
          <form action="">
            <div className="employee__signIn__inputs">
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
              <div className="security__text">
                <small>
                  This site is protected by reCAPTCHA and the Google Privacy
                  Policy and Terms Of Service Apply
                </small>
              </div>
              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader></Loader>}
              <div className="employee__form__footer row justify-content-between no-gutters">
                <p>
                  <u> New Employee?</u>
                  <Link to="/employeeRegister"> Register</Link>
                </p>
                <Link to="/employeeAccount">
                  <button
                    className="tailor__signIn__button"
                    onClick={loginHandler}
                  >
                    Sign In
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default withRouter(EmployeeSignIn);
