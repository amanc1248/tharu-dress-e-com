import React from "react";
import "./TailorAccountInformation.css";
function TailorAccountInformation({ editPage, changePasswordPage }) {
  return (
    <div className="tailor__account__information">
      <div className="tailor__account__information">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <div className="tailor__account__information__container">
        <div className="tailor__details">
          <span>
            {" "}
            <strong>First Name:</strong>{" "}
          </span>
          <span>Aman</span>
        </div>
        <div className="tailor__details">
          <span>
            {" "}
            <strong>Last Name:</strong>{" "}
          </span>
          <span>Chaudhary</span>
        </div>
        <div className="tailor__details">
          <span>
            {" "}
            <strong>Location:</strong>{" "}
          </span>
          <span>Itahari-07, Sunsari</span>
        </div>
        <div className="tailor__details">
          <span>
            {" "}
            <strong>Phone:</strong>{" "}
          </span>
          <span>+9779804355969</span>
        </div>
        <div className="tailor__details">
          <span>
            {" "}
            <strong>Email:</strong>{" "}
          </span>
          <span>amanc1248@gmail.com</span>
        </div>
      </div>
      <div className="tailor__account__information__buttons row ">
        <div className="tailor__edit__button__container col-6">
          <button className="tailor__edit__button" onClick={editPage}>
            EDIT
          </button>
        </div>
        <div className="tailor__changepassword__button__container col-6">
          <button
            className="tailor__changepassword__button"
            onClick={changePasswordPage}
          >
            CHANGE PASSWORD
          </button>
        </div>
      </div>
    </div>
  );
}

export function TailorAccountInformationEdit({ editPage }) {
  return (
    <div className="tailor__account__information__edit">
      <div className="tailor__account__information__edit__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <form action="">
        <div className="tailor__address__edit__inputs">
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
        <div className="tailor__account__information__buttons row justify-content-between">
          <div className="tailor__save__button__container col-6">
            <button className="tailor__save__button" onClick={editPage}>
              SAVE
            </button>
          </div>
          <div className="tailor__accountCancel__button__container col-6">
            <button
              className="tailor__accountCancel__button"
              onClick={editPage}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export function TailorAccountInformationChangePassword({ changePasswordPage }) {
  return (
    <div className="tailor__account__information__change__password">
      <div className="tailor__account__information__change__password__instruction">
        Please update your personal account details, update your address book or
        change your email setting here.
      </div>
      <div className="tailor__account__information__change__password__title">
        <h4>CHANGE PASSWORD</h4>
      </div>
      <form action="">
        <div className="tailor__account__information__change__password__inputs">
          <label>
            Old Password
            <input type="text" />
          </label>
          <label>
            New Password
            <input type="text" />
          </label>
        </div>
        <div className="tailor__account__information__buttons row justify-content-between">
          <div className="tailor__change__password__edit__button__container col-6">
            <button
              className="tailor__change__password__save__button"
              onClick={changePasswordPage}
            >
              SAVE
            </button>
          </div>
          <div className="tailor__change__password__button__container col-6">
            <button
              className="tailor__cancel__button"
              onClick={changePasswordPage}
            >
              CANCEL
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default TailorAccountInformation;
