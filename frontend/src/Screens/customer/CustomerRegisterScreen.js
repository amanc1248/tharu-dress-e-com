import { withRouter } from "react-router";
import { Checkbox } from "@material-ui/core";
import { Link } from "react-router-dom";
import Header from "../../Components/customer/Header";
import Footer from "../../Components/customer/Footer/Footer";
import ImageWithTitle from "../../Components/ImageWithTitle";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../Components/Message";
import Loader from "../../Components/Loader";
import { register } from "../../actions/userActions";

function CustomerRegisterScreen({ location, history }) {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [message, setMessage] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();
  const redirect = location.search ? location.search.split("=")[1] : "/cart";

  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;
  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, redirect, userInfo]);

  const dispatch = useDispatch();
  const registerHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(
        register(firstName, lastName, email, phone, city, street, password)
      );
    }
  };
  return (
    <>
      <Header></Header>
      <div className="authentication">
        <ImageWithTitle theTitle="CREATE DASA ACCOUNT"></ImageWithTitle>
        <div className=" login__signup row container-fluid p-0 m-0  ">
          <div className="signup col-lg-6 col-md-6 p-0">
            <div className="signup__container">
              <div className="title__subtitle">
                <h4>REGISTER</h4>

                <p className="subtitle">
                  Please register below to create an account
                </p>
              </div>
              <form action="">
                <div className="register__inputs">
                  <label>
                    First Name
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    ></input>
                  </label>

                  <label>
                    Last Name
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    ></input>
                  </label>

                  <label>
                    Email
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </label>

                  <label>
                    Phone
                    <input
                      type="number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    ></input>
                  </label>
                  <label htmlFor="">
                    City
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
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

                  <label>
                    Password
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </label>

                  <label>
                    Confirm Password
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    ></input>
                  </label>
                </div>
                <div className="signup__form__footer ">
                  <div className="security__text">
                    <Checkbox></Checkbox>
                    <small>
                      Subscribe to receive email updates about Daasaa
                      productsemail updates about Daasaa products, services and
                      events.{" "}
                    </small>
                  </div>
                  {message && <Message variant="danger">{message}</Message>}

                  {error && <Message variant="danger">{error}</Message>}
                  {loading && <Loader></Loader>}
                  <div className="row justify-content-between  no-gutters">
                    <p>
                      <u>Have an account?</u>
                      <Link to="/signin"> Login</Link>
                    </p>
                    <button
                      className="register__button  "
                      onClick={registerHandler}
                    >
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}
export default withRouter(CustomerRegisterScreen);
