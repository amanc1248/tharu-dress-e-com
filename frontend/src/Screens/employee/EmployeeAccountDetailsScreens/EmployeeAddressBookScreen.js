import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getEmployeeDetails,
  updateEmployeeProfile,
} from "../../../actions/employeeActions";
import "../../../styles/tailor/TailorAccountDetailsScreens.css";

function EmployeeStoreInformationScreen({ changeStoreInfoPage }) {
  const dispatch = useDispatch();
  const employeeDetails = useSelector((state) => state.employeeDetails);
  const { employee } = employeeDetails;

  useEffect(() => {
    if (!employee.city || !employee.street) {
      dispatch(getEmployeeDetails("profile"));
    }
  }, [employee, dispatch]);
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
          <span>{employee.city}</span>
        </div>
        <div className="tailor__address__detail">
          <span>
            <strong>Street:</strong>
          </span>
          <span>{employee.street}</span>
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

export function EmployeeStoreInformationEdit({ changeStoreInfoPage }) {
  const dispatch = useDispatch();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();

  const employeeDetails = useSelector((state) => state.employeeDetails);
  const { loading, error, employee } = employeeDetails;

  const employeeUpdateProfile = useSelector(
    (state) => state.employeeUpdateProfile
  );
  const { success } = employeeUpdateProfile;

  useEffect(() => {
    if (!employee.city) {
      dispatch(getEmployeeDetails("profile"));
    } else {
      setCity(employee.city);
      setStreet(employee.street);
    }
  }, [employee, dispatch]);

  const updateProfileHandler = (e) => {
    e.preventDefault();
    // dispatch update profile
    dispatch(updateEmployeeProfile({ city, street }));
    changeStoreInfoPage();
    dispatch(getEmployeeDetails("profile"));
  };

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

export default EmployeeStoreInformationScreen;
