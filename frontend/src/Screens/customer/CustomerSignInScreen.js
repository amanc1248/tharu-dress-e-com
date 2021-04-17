import React, { useState } from "react";
import "../../styles/customer/CustomerSignInScreen.css";
import { Link } from "react-router-dom";
import ImageWithTitle from "../../Components/ImageWithTitle";
import { withRouter } from "react-router";
import Header from "../../Components/customer/Header";
import Footer from "../../Components/customer/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../actions/userActions";
import { useEffect } from "react";
import Message from "../../Components/Message";
import Loader from "../../Components/Loader";

function CustomerSignInScreen({ location, history }) {
  return (
    <>
      <Header></Header>
      <div className="authentication">
        <ImageWithTitle theTitle="SIGN IN TO YOUR DASA ACCOUNT"></ImageWithTitle>
        <div className=" login__signup row container-fluid p-0 m-0  ">
          <Login location={location} history={history}></Login>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export function Login({ location, history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const redirect = location.search ? location.search.split("=")[1] : "/";
  const userLogin = useSelector((state) => state.userLogin);
  const { loading, error, userInfo } = userLogin;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);
  const dispatch = useDispatch();
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };
  return (
    <div className="login col-lg-6 col-md-6 p-0">
      <div className="login__container">
        <div className="title__subTitle">
          <h4>SIGN IN</h4>
          {error && <Message variant="danger">{error}</Message>}
          {loading && <Loader></Loader>}
          <p className="subtitle">
            Please enter your email and password to access your account
          </p>
        </div>
        <form action="">
          <div className="signin__inputs">
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
          <div className="login__form__footer row justify-content-between mr-0 ml-0">
            <p>
              {" "}
              <u>Forgot Password</u>{" "}
            </p>
            <Link to="/cart">
              <button className="signIn__button" onClick={loginHandler}>
                Sign In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default withRouter(CustomerSignInScreen);
