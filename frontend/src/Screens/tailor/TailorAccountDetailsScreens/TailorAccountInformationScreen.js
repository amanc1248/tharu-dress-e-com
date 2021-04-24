import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../../../styles/tailor/TailorAccountDetailsScreens.css";
import "../../../actions/tailorActions.js";
import { getTailorDetails } from "../../../actions/tailorActions.js";
import Loader from "../../../Components/Loader";
function TailorAccountInformationScreen({ editPage, changePasswordPage }) {
  const dispatch = useDispatch();
  const tailorDetails = useSelector((state) => state.tailorDetails);
  const { tailor } = tailorDetails;

  useEffect(() => {
    if (
      !tailor.firstName ||
      !tailor.lastName ||
      !tailor.email ||
      !tailor.phone
    ) {
      dispatch(getTailorDetails("profile"));
    }
  }, [tailor, dispatch]);

  return (
    <div className="tailor__account__information">
      <div className="tailor__account__information">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <div className="tailor__account__information__container">
        <div className="tailor__details">
          <span>
            {" "}
            <strong>First Name:</strong>{" "}
          </span>
          <span>{tailor.firstName}</span>
        </div>
        <div className="tailor__details">
          <span>
            {" "}
            <strong>Last Name:</strong>{" "}
          </span>
          <span>{tailor.lastName}</span>
        </div>

        <div className="tailor__details">
          <span>
            {" "}
            <strong>Phone:</strong>{" "}
          </span>
          <span>{tailor.phone}</span>
        </div>
        <div className="tailor__details">
          <span>
            {" "}
            <strong>Email:</strong>{" "}
          </span>
          <span>{tailor.email}</span>
        </div>
      </div>
      <div className="tailor__account__information__buttons row ">
        <div className="tailor__edit__button__container col-6">
          <button className="tailor__edit__button" onClick={editPage}>
            EDIT
          </button>
        </div>
        <div className="tailor__changepassword__button__container col-6">
          <button
            className="tailor__changepassword__button"
            onClick={changePasswordPage}
          >
            CHANGE PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
}

export function TailorAccountInformationEdit({ editPage }) {
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const tailorDetails = useSelector((state) => state.tailorDetails);
  const { loading, error, tailor } = tailorDetails;
  useEffect(() => {
    if (!tailor.firstName) {
      dispatch(getTailorDetails("profile"));
    } else {
      setFirstName(tailor.firstName);
      setLastName(tailor.lastName);
      setEmail(tailor.email);
      setPhone(tailor.phone);
    }
  }, [tailor, dispatch]);
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="tailor__account__information__edit">
      <div className="tailor__account__information__edit__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <form action="">
        <div className="tailor__address__edit__inputs">
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
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </label>
          <label>
            Phone
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="tailor__account__information__buttons row justify-content-between">
          <div className="tailor__save__button__container col-6">
            <button className="tailor__save__button" onClick={editPage}>
              SAVE
            </button>
          </div>
          <div className="tailor__accountCancel__button__container col-6">
            <button
              className="tailor__accountCancel__button"
              onClick={editPage}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export function TailorAccountInformationChangePassword({ changePasswordPage }) {
  return (
    <div className="tailor__account__information__change__password">
      <div className="tailor__account__information__change__password__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <div className="tailor__account__information__change__password__title">
        <h4>CHANGE PASSWORD</h4>
      </div>
      <form action="">
        <div className="tailor__account__information__change__password__inputs">
          <label>
            Password
            <input type="text" />
          </label>
          <label>
            Confirm Password
            <input type="text" />
          </label>
        </div>
        <div className="tailor__account__information__buttons row justify-content-between">
          <div className="tailor__change__password__edit__button__container col-6">
            <button
              className="tailor__change__password__save__button"
              onClick={changePasswordPage}
            >
              SAVE
            </button>
          </div>
          <div className="tailor__change__password__button__container col-6">
            <button
              className="tailor__cancel__button"
              onClick={changePasswordPage}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TailorAccountInformationScreen;
