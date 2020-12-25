import React from "react";
import "./AddressBook.css";
import { useDispatch } from "react-redux";
import { goToAddressBookEdit } from "../Account Information/Redux/Actions";
function AddressBook() {
  const dispatch = useDispatch();

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
      </div>
      <div className="address__book__shippingAddress">
        <h5>SHIPPING ADDRESS</h5>
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
            <strong>Country:</strong>{" "}
          </span>
          <span>Nepal</span>
        </div>
      </div>
      <div className="address__book__billingAddress">
        <h5>BILLING ADDRESS</h5>
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
            <strong>Country:</strong>{" "}
          </span>
          <span>Nepal</span>
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
        <div className="address__book__changepassword__button__container col-6">
          <button
            className="address__book__changepassword__button"
            onClick={() => dispatch(goToAddressBookEdit())}
          >
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddressBook;
