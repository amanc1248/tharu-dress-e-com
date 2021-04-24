import React from "react";
import "../../../styles/tailor/TailorAccountDetailsScreens.css";
function TailorStoreInformationScreen({ changeStoreInfoPage }) {
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
            <strong>City:</strong>
          </span>
          <span>Aman</span>
        </div>
        <div className="tailor__address__detail">
          <span>
            <strong>Street:</strong>
          </span>
          <span>Chaudhary</span>
        </div>
      </div>
      <div className="address__book__buttons row justify-content-between">
        <div className="address__book__edit__button__container col-6">
          <button
            className="address__book__edit__button"
            onClick={changeStoreInfoPage}
          >
            EDIT
          </button>
        </div>
      </div>
    </div>
  );
}

export function StoreInformationEdit({ changeStoreInfoPage }) {
  return (
    <div className="store__information__edit">
      <div className="store__information__edit__instruction">
        Please update your store account details & update your store address
        book
      </div>
      <form action="">
        <h5 className="store__information__edit__title">SHIPPING ADDRESS</h5>
        <div className="store__information__edit__inputs">
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
            <button className="edit__button" onClick={changeStoreInfoPage}>
              SAVE
            </button>
          </div>
          <div className="changepassword__button__container col-6">
            <button
              className="changepassword__button"
              onClick={changeStoreInfoPage}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TailorStoreInformationScreen;
