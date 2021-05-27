import React, { useEffect, useState } from "react";
import { Checkbox } from "@material-ui/core";
import { Link, withRouter } from "react-router-dom";
import "../../styles/employee/EmployeeSignInScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { employeeRegisterAction } from "../../actions/employeeActions";
import Message from "../../Components/Message";
import Loader from "../../Components/Loader";

function EmployeeRegister({ history }) {
  const [first_name, setFirst_name] = useState();
  const [last_name, setLast_name] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [tailorStoreId, setTailorStoreId] = useState();
  const [street, setStreet] = useState();
  const [city, setCity] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [message, setMessage] = useState();

  const dispatch = useDispatch();
  const employeeRegister = useSelector((state) => state.employeeRegister);
  const { loading, error, employeeInfo } = employeeRegister;
  useEffect(() => {
    if (employeeInfo) {
      history.push("/employeeAccount");
    }
  }, [history, employeeInfo]);
  const registerHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage("Password do not match");
    } else {
      dispatch(
        employeeRegisterAction(
          first_name,
          last_name,
          phone,
          email,
          city,
          street,
          tailorStoreId,
          password,
          confirmPassword
        )
      );
    }
  };
  return (
    <div className="employees__signIn__register row container-fluid no-gutters p-0">
      <div className="employee__register col-lg-6 col-md-6 ">
        <div className="employee__register__container">
          <div className="title__subTitle">
            <h4>REGISTER</h4>
            <p className="subtitle">
              Please register below to create an account.
            </p>
          </div>
          <form action="">
            <div className="employee__register__inputs">
              <label htmlFor="">
                First name
                <input
                  type="text"
                  value={first_name}
                  onChange={(e) => setFirst_name(e.target.value)}
                ></input>
              </label>
              <label htmlFor="">
                Last name
                <input
                  type="text"
                  value={last_name}
                  onChange={(e) => setLast_name(e.target.value)}
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
              <label htmlFor="">
                Tailor Store Id
                <input
                  type="text"
                  value={tailorStoreId}
                  onChange={(e) => setTailorStoreId(e.target.value)}
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
            <div className="employee__register__form__footer ">
              <div className="security__text">
                <Checkbox></Checkbox>
                <small>
                  Subscribe to receive email updates about Daasaa products email
                  updates about Daasaa products, services and events.{" "}
                </small>
              </div>
              {message && <Message variant="danger">{message}</Message>}

              {error && <Message variant="danger">{error}</Message>}
              {loading && <Loader></Loader>}
              <div className="row justify-content-between no-gutters">
                <p>
                  <u> Already an Employee?</u>
                  <Link to="/employeesignin"> Signin</Link>
                </p>
                <Link to="/employeeAccount">
                  <button
                    className="employee__register__button "
                    onClick={registerHandler}
                  >
                    Register
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

export default withRouter(EmployeeRegister);
