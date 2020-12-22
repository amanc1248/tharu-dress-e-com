import React from "react";
import "./AccountInformation.css";
import { useDispatch } from "react-redux";
import { goToAccountEdit, goToChangePassword } from "./Redux/Actions";

function AccountInformation() {
  const dispatch = useDispatch();

  return (
    <div className="account__information">
      <div className="account__information__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <div className="account__information__container">
        <div className="userDetails">
          <span>
            {" "}
            <strong>First Name:</strong>{" "}
          </span>
          <span>Aman</span>
        </div>
        <div className="userDetails">
          <span>
            {" "}
            <strong>Last Name:</strong>{" "}
          </span>
          <span>Chaudhary</span>
        </div>
        <div className="userDetails">
          <span>
            {" "}
            <strong>Location:</strong>{" "}
          </span>
          <span>Itahari-07, Sunsari</span>
        </div>
        <div className="userDetails">
          <span>
            {" "}
            <strong>Phone:</strong>{" "}
          </span>
          <span>+9779804355969</span>
        </div>
        <div className="userDetails">
          <span>
            {" "}
            <strong>Email:</strong>{" "}
          </span>
          <span>amanc1248@gmail.com</span>
        </div>
      </div>
      <div className="account__information__buttons row justify-content-between">
        <div className="edit__button__container col-6">
          <button
            className="edit__button"
            onClick={() => dispatch(goToAccountEdit())}
          >
            EDIT
          </button>
        </div>
        <div className="changepassword__button__container col-6">
          <button
            className="changepassword__button"
            onClick={() => dispatch(goToChangePassword())}
          >
            CHANGE PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
}

export default AccountInformation;
