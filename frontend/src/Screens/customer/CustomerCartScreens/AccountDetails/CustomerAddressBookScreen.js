import React from "react";
import "../../../../styles/customer/CustomerCartScreens.css";
import { useDispatch, useSelector } from "react-redux";
import { goToAddressBookEdit } from "../../../../actions/accountDetailsActions";
import { useEffect } from "react";
import {
  getUserDetails,
  updateUserProfile,
} from "../../../../actions/userActions";
import { useState } from "react";
function CustomerAddressBookScreen() {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userDetails);
  const { user } = userDetails;

  useEffect(() => {
    if (!user.city || !user.street) {
      dispatch(getUserDetails("profile"));
    }
  }, [user, dispatch]);

  return (
    <div className="address__book">
      <div className="address__book__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <div className="address__book__title">
        <h4>ADDRESS BOOK</h4>
      </div>
      <div className="address__book__container">
        <div className="userDetails">
          <span>
            {" "}
            <strong>City:</strong>{" "}
          </span>
          <span>{user.city}</span>
        </div>
        <div className="userDetails">
          <span>
            {" "}
            <strong>Street</strong>{" "}
          </span>
          <span>{user.street}</span>
        </div>
      </div>
      <div className="address__book__buttons row justify-content-between">
        <div className="address__book__edit__button__container col-6">
          <button
            className="address__book__edit__button"
            onClick={() => dispatch(goToAddressBookEdit())}
          >
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
}
export function AddressBookEdit() {
  const dispatch = useDispatch();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userUpdateProfile = useSelector((state) => state.userUpdateProfile);
  const { success } = userUpdateProfile;

  useEffect(() => {
    if (!user.city) {
      dispatch(getUserDetails("profile"));
    } else {
      setCity(user.city);
      setStreet(user.street);
    }
  }, [user, dispatch]);

  const updateProfileHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    dispatch(updateUserProfile({ city, street }));
    dispatch(goToAddressBookEdit());
    dispatch(getUserDetails("profile"));
  };

  return (
    <div className="address__book__edit">
      <div className="addressBookEdit__information__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <form action="">
        <h5 className="address__book__edit__title">ADDRESS</h5>
        <div className="Shipping__address__edit__inputs">
          <label>
            City
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </label>
          <label>
            Street
            <input
              type="text"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            ></input>
          </label>
        </div>
        <div className="account__information__buttons row justify-content-between">
          <div className="edit__button__container col-6">
            <button className="edit__button" onClick={updateProfileHandler}>
              SAVE
            </button>
          </div>
          <div className="changepassword__button__container col-6">
            <button
              className="changepassword__button"
              onClick={() => dispatch(goToAddressBookEdit())}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>{" "}
    </div>
  );
}

export default CustomerAddressBookScreen;
