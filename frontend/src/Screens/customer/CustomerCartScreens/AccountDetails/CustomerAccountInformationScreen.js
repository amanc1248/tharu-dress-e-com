import React, { useState } from "react";
import { useSelector } from "react-redux";
import "../../../../styles/customer/CustomerCartScreens.css";
import { useDispatch } from "react-redux";

import AnotherTabs from "../../../../Components/AnotherTabs/AnotherTabs";

import CustomerPaymentOptionsScreens from "./CustomerPaymentOptionsScreens";

import CustomerAddressBookScreen, {
  AddressBookEdit,
} from "./CustomerAddressBookScreen";
import {
  goToAccountEdit,
  goToChangePassword,
} from "../../../../actions/accountDetailsActions";
import {
  getUserDetails,
  updateUserProfile,
} from "../../../../actions/userActions";
import { useEffect } from "react";
import { userUpdateProfileReducer } from "../../../../reducers/userReducers";
import Message from "../../../../Components/Message";
import Loader from "../../../../Components/Loader";
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
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!user.firstName) {
      dispatch(getUserDetails("profile"));
    } else {
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setEmail(user.email);
      setPhone(user.phone);
    }
  }, [user, dispatch]);

  const updateProfileHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    dispatch(updateUserProfile({ firstName, lastName, email, phone }));
    dispatch(goToAccountEdit());
    dispatch(getUserDetails("profile"));
  };

  return (
    <div className="account__information__edit">
      <div className="account__information__edit__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      {error && <Message variant="danger">{error} </Message>}
      {success && <Message variant="danger">Successfully updated </Message>}
      {loading && <Loader> </Loader>}
      <form action="">
        <div className="address__book__edit__inputs">
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
        <div className="account__information__buttons row no-gutters justify-content-between">
          <div className="edit__button__container  ">
            <button className="edit__button" onClick={updateProfileHandler}>
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
            Password
            <input type="password" />
          </label>
          <label>
            Confirm Password
            <input type="password" />
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
  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  useEffect(() => {
    if (!user.firstName) {
      dispatch(getUserDetails("profile"));
    }
  }, [user, dispatch]);

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
          <span>{user.firstName}</span>
        </div>
        <div className="userDetails">
          <span>
            {" "}
            <strong>Last Name:</strong>{" "}
          </span>
          <span>{user.lastName}</span>
        </div>

        <div className="userDetails">
          <span>
            {" "}
            <strong>Phone:</strong>{" "}
          </span>
          <span>{user.phone}</span>
        </div>
        <div className="userDetails">
          <span>
            {" "}
            <strong>Email:</strong>{" "}
          </span>
          <span>{user.email}</span>
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
