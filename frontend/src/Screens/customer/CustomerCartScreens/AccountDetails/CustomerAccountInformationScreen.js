import React from "react";
import { useSelector } from "react-redux";
import "../../../../styles/customer/CustomerCartScreens.css";
import { useDispatch } from "react-redux";

import AnotherTabs from "../../../../Components/AnotherTabs/AnotherTabs";
import CustomerAddressBookScreen, {
  AddressBookEdit,
} from "./CustomerAddressBookScreen";
import CustomerPaymentOptionsScreens from "./CustomerPaymentOptionsScreens";
import {
  goToAccountEdit,
  goToChangePassword,
} from "../../../../contexts/Customer/Redux/Actions";
// import {
//   goToAccountEdit,
//   goToChangePassword,
// } from "./Account Information/Redux/Actions";
function CustomerAccountInformationScreen() {
  const editAccount = useSelector((state) => state.editAccount);
  const changePassword = useSelector((state) => state.changePassword);
  const addressBookEdit = useSelector((state) => state.addressBookEdit);
  return (
    <div className="account__details">
      <AnotherTabs>
        <div label="Account Information">
          {editAccount === false && changePassword === false ? (
            <AccountInformation></AccountInformation>
          ) : (
            <>
              {editAccount === true && changePassword === false ? (
                <AccountInformationEdit></AccountInformationEdit>
              ) : (
                <>
                  {editAccount === false && changePassword === true ? (
                    <ChangePassword></ChangePassword>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </>
          )}
        </div>
        <div label="Address Book">
          {addressBookEdit === false ? (
            <CustomerAddressBookScreen></CustomerAddressBookScreen>
          ) : (
            <AddressBookEdit></AddressBookEdit>
          )}
        </div>
        <div label="Payment Options">
          <CustomerPaymentOptionsScreens></CustomerPaymentOptionsScreens>
        </div>
      </AnotherTabs>
    </div>
  );
}

export function AccountInformationEdit() {
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

// import { goToChangePassword } from "../Redux/Actions";

export function ChangePassword() {
  const dispatch = useDispatch();

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
              onClick={() => dispatch(goToChangePassword())}
            >
              SAVE
            </button>
          </div>
          <div className="changepassword__button__container col-6">
            <button
              className="changepassword__button"
              onClick={() => dispatch(goToChangePassword())}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CustomerAccountInformationScreen;

export function AccountInformation() {
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
      <div className="account__information__buttons row justify-content-between no-gutters ">
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
