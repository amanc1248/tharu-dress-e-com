import React from "react";
import "./StoreInformation.css";
function StoreInformationAddressBook() {
  return (
    <div className="store__information">
      <div className="store__information__address__book__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <div className="store__information__address__book__title">
        <h4>ADDRESS BOOK</h4>
      </div>
      <div className="store__information__address__book__container">
        <div className="tailor__address__detail">
          <span>
            <strong>First Name:</strong>
          </span>
          <span>Aman</span>
        </div>
        <div className="tailor__address__detail">
          <span>
            <strong>Last Name:</strong>
          </span>
          <span>Chaudhary</span>
        </div>
        <div className="tailor__address__detail">
          <span>
            <strong>Location:</strong>
          </span>
          <span>Itahari-07, Sunsari</span>
        </div>
      </div>
      <div className="address__book__buttons row justify-content-between">
        <div className="address__book__edit__button__container col-6">
          <button className="address__book__edit__button">EDIT</button>
        </div>
        <div className="address__book__changepassword__button__container col-6">
          <button className="address__book__changepassword__button">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default StoreInformationAddressBook;
