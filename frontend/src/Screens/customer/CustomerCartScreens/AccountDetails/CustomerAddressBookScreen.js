import React from "react";
import "../../../../styles/customer/CustomerCartScreens.css";
import { useDispatch } from "react-redux";
import { goToAddressBookEdit } from "../../../../contexts/Customer/Redux/Actions";
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
export function AddressBookEdit() {
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

export default CustomerAddressBookScreen;
