import React, { useRef, useState } from "react";
import "./TailorEmployees.css";
import "../TailorProducts/TailorProducts.css";
function TailorEmployees() {
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
        <h5>EMPLOYEES</h5>
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
              <th scope="col">Name</th>
              <th scope="col">Date Joined</th>
              <th scope="col">Work Assigned</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>20 Feb, 2020</td>
              <td>See Details</td>
              <td>+9779804355969</td>
              <td>Working</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>20 Feb, 2020</td>
              <td>See Details</td>
              <td>+9779804355969</td>
              <td>Working</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>20 Feb, 2020</td>
              <td>See Details</td>
              <td>+9779804355969</td>
              <td>Working</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>20 Feb, 2020</td>
              <td>See Details</td>
              <td>+9779804355969</td>
              <td>Working</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>20 Feb, 2020</td>
              <td>See Details</td>
              <td>+9779804355969</td>
              <td>Working</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TailorEmployees;
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
