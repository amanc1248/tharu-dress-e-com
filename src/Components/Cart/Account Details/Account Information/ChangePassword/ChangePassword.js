import React from "react";
// import { goToChangePassword } from "../Redux/Actions";
// import { useDispatch } from "react-redux";
import "./ChangePassword.css";
// import { goToChangePassword } from "../Redux/Actions";

function ChangePassword() {
  // const dispatch = useDispatch()  ;

  return (
    <div className="change__password">
      <div className="change__password__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <div className="change__password__title">
        <h4>CHANGE PASSWORD</h4>
      </div>
      <form action="">
        <div className="change__password__inputs">
          <label>
            Old Password
            <input type="text" />
          </label>
          <label>
            New Password
            <input type="text" />
          </label>
        </div>
        <div className="account__information__buttons row justify-content-between">
          <div className="edit__button__container col-6">
            <button
              className="edit__button"
              
            >
              SAVE
            </button>
          </div>
          <div className="changepassword__button__container col-6">
            <button className="changepassword__button">CANCEL</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ChangePassword;
