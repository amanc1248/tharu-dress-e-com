import React from "react";
import "./AccountInformationEdit.css";
import { useDispatch } from "react-redux";
import { goToAccountEdit } from "../../../../../../contexts/Customer/Redux/Actions/index";
function AccountInformationEdit() {
  const dispatch = useDispatch();

  return (
    <div className="account__information__edit">
      <div className="account__information__edit__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <form action="">
        <div className="address__book__edit__inputs">
          <label>
            First Name
            <input type="text" />
          </label>
          <label>
            Last Name
            <input type="text" />
          </label>
          <label>
            Location
            <input type="text" />
          </label>
          <label>
            Phone
            <input type="text" />
          </label>
          <label>
            Email
            <input type="text" />
          </label>
        </div>
        <div className="account__information__buttons row no-gutters justify-content-between">
          <div className="edit__button__container  ">
            <button
              className="edit__button"
              onClick={() => dispatch(goToAccountEdit())}
            >
              SAVE
            </button>
          </div>
          <div className="changepassword__button__container ">
            <button
              className="changepassword__button"
              onClick={() => dispatch(goToAccountEdit())}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AccountInformationEdit;
