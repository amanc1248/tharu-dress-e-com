import React, { useRef, useState } from "react";
import "./TailorEmployees.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

import "../TailorProducts/TailorProducts.css";
import { Link } from "react-router-dom";
import { SeeMoreToogle } from "../../../Global/SeeMoreContainer";
function TailorEmployees() {
  const tableStatus = (
    <div className="table__status__container">
      <div class="table__status__icon"></div>
      <div className="table__status__text">Delivered</div>
    </div>
  );
  const tableRow = (
    <tr>
      <th scope="row" className="table__customer">
        Sudeep Bhattrai
      </th>
      <td className="table__date">20 Feb, 2020</td>
      <td className="work__assigned">
        {" "}
        <Link to="/employeeDetails">See Details</Link>{" "}
      </td>
      <td className="table__customer">+9779804355969</td>
      <td>
        <div className="table__status"> {tableStatus}</div>
      </td>
      <td>{seeMoreFunction()}</td>
    </tr>
  );
  const [addEmployee, setaddEmployee] = useState(false);
  const addEmployeeClick = () => {
    setaddEmployee(!addEmployee);
  };

  return (
    <div className="tailor__employees">
      {addEmployee ? (
        <AssignWork clickOutside={addEmployeeClick}></AssignWork>
      ) : null}
      <div className="tailor__employees__title">
        <h5 className="tailor__tabs__title">EMPLOYEES</h5>
      </div>
      <div className="tailor__add__products ">
        <button
          className="tailor__add__products__button"
          onClick={addEmployeeClick}
        >
          + ASSIGN WORK
        </button>
      </div>
      <div className="tailor__employees__container">
        <table className="table" id="tailor__employees__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Name
              </th>
              <th scope="col" className="table__header">
                Date Joined
              </th>
              <th scope="col" className="table__header">
                Work Assigned
              </th>
              <th scope="col" className="table__header">
                Phone
              </th>
              <th scope="col" className="table__header">
                Status
              </th>
              <th scope="col" className="table__header">
                See More
              </th>
            </tr>
          </thead>
          <tbody>
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TailorEmployees;

// Assign work function 👇
function AssignWork({ clickOutside }) {
  const whenOutsideModal = (e) => {
    if (!myRef.current.contains(e.target)) {
      clickOutside();
    }
  };
  const myRef = useRef();
  return (
    <div className="assign__work" onClick={whenOutsideModal}>
      <form action="" id="assign__work__inputs" ref={myRef}>
        <div className="assign__work__container">
          <div className="assign__work__title">Assign Work</div>
          <div className="assign__work__desc">Assign work to your employee</div>
          <div className="assign__work__row">
            <label htmlFor="">
              Select Employee
              <select name="" id="" className="select__employee__inputBox">
                <option value="Aman Chaudhary">Aman Chaudhary</option>
                <option value="Sima Chaudhary">Sima Chaudhary</option>
                <option value="Bhara Chaudhary">Bhara Chaudhary</option>
                <option value="Aman Chaudhary">Aman Chaudhary</option>
                <option value="Aman Chaudhary">Aman Chaudhary</option>
                <option value="Aman Chaudhary">Aman Chaudhary</option>
                <option value="Aman Chaudhary">Aman Chaudhary</option>
                <option value="Aman Chaudhary">Aman Chaudhary</option>
              </select>
            </label>
          </div>
          <div className="assign__work__row">
            <label htmlFor="">
              Select Order
              <select name="" id="" className="select__employee__inputBox">
                <option value="Order 1">Order 1</option>
                <option value="Order 2">Order 2</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
                <option value="Order 3">Order 3</option>
              </select>
            </label>
          </div>
          <div className="assign__work__row">
            <button className="assignWorkSubmitButton">DONE</button>
          </div>
        </div>
      </form>
    </div>
  );
}

//See more employees 👇
let seeMoreOptionsEmployees = [
  {
    icon: <AssignmentIndIcon></AssignmentIndIcon>,
    iconText: "Employee Details",
    theLink: "/employeeDetails",
  },
];
const seeMoreFunction = () => {
  return <SeeMoreToogle theList={seeMoreOptionsEmployees}></SeeMoreToogle>;
};
