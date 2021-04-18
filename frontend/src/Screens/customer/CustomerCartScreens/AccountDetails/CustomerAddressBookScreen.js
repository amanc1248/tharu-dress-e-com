import React from "react";
import "../../../../styles/customer/CustomerCartScreens.css";
import { useDispatch } from "react-redux";
import { goToAddressBookEdit } from "../../../../actions/accountDetailsActions";
function CustomerAddressBookScreen() {
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
            <strong>Location:</strong>{" "}
          </span>
          <span>Itahari-07, Sunsari</span>
        </div>
        <div className="userDetails">
          <span>
            {" "}
            <strong>City:</strong>{" "}
          </span>
          <span>Duhabi</span>
        </div>
        <div className="userDetails">
          <span>
            {" "}
            <strong>Street</strong>{" "}
          </span>
          <span>Duhabi, Pachira, 07</span>
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
            <input type="text" />
          </label>
          <label>
            Street
            <input type="text" />
          </label>
        </div>
        <div className="account__information__buttons row justify-content-between">
          <div className="edit__button__container col-6">
            <button
              className="edit__button"
              onClick={() => dispatch(goToAddressBookEdit())}
            >
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
