import React from "react";
import { useDispatch } from "react-redux";
import { goToAddressBookEdit } from "../../../../../../contexts/Customer/Redux/Actions/index";
import "./AddressBookEdit.css";
function AddressBookEdit() {
  const dispatch = useDispatch();

  return (
    <div className="address__book__edit">
      <div className="addressBookEdit__information__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <form action="">
        <h5 className="address__book__edit__title">SHIPPING ADDRESS</h5>
        <div className="Shipping__address__edit__inputs">
          <label>
            First Name
            <input type="text" />
          </label>
          <label>
            Last Name
            <input type="text" />
          </label>
          <label>
            Region
            <input type="text" />
          </label>
          <label>
            City
            <input type="text" />
          </label>
          <label>
            Area
            <input type="text" />
          </label>
          <label>
            Store Address
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
      </form>
      <form action="">
        <h5 className="address__book__edit__title">BILLING ADDRESS</h5>
        <div className="billing__address__edit__inputs">
          <label>
            First Name
            <input type="text" />
          </label>
          <label>
            Last Name
            <input type="text" />
          </label>
          <label>
            Region
            <input type="text" />
          </label>
          <label>
            City
            <input type="text" />
          </label>
          <label>
            Area
            <input type="text" />
          </label>
          <label>
            Address
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
      </form>
    </div>
  );
}

export default AddressBookEdit;
