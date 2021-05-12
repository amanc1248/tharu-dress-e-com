import React, { useEffect, useRef, useState } from "react";
import "../../styles/tailor/TailorEmployeeScreen.css";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import "../../styles/tailor/TailorProductsScreen.css";

import "../../styles/tailor/TailorProductsScreen.css";
import { Link } from "react-router-dom";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import { useDispatch, useSelector } from "react-redux";
import { tailorEmployeesAction } from "../../actions/tailorActions";
import Loader from "../../Components/Loader";
function TailorEmployeeScreen() {
  const tailorEmployees = useSelector((state) => state.tailorEmployees);
  const { loading, error, employees } = tailorEmployees;

  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { tailorInfo } = tailorLogin;

  // const tailorrSales = `${tailorSales ? tailorSales : 0}`;
  const dispatch = useDispatch();
  useEffect(() => {
    if (tailorInfo) {
      const tailId = tailorInfo.tailorId;
      console.log("screen id" + tailId);
      dispatch(tailorEmployeesAction(tailId));
    } else {
    }
  }, [dispatch, tailorInfo]);
  const theEmployees = tailorEmployees && tailorEmployees.employees;

  const [addEmployee, setaddEmployee] = useState(false);
  const addEmployeeClick = () => {
    setaddEmployee(!addEmployee);
  };
  const tableStatus = (
    <div className="table__status__container">
      <div class="table__status__icon"></div>
      <div className="table__status__text">Working</div>
    </div>
  );
  const tableStatusNotWorking = (
    <div className="table__status__notDelivered__container">
      <div class="table__status__icon"></div>
      <div className="table__status__text">Free</div>
    </div>
  );

  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="tailor__employees">
      {addEmployee ? (
        <AssignWork
          cancelAddEmployee={() => {
            setaddEmployee(false);
          }}
        ></AssignWork>
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
                Email
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
            {theEmployees &&
              theEmployees.map((employee) => (
                <tr key={employee.employee_id}>
                  <th scope="row" className="table__customer">
                    {employee.first_name + employee.last_name}
                  </th>
                  <td className="table__date">{employee.date_time}</td>
                  <td className="work__assigned">
                    {" "}
                    <Link to="/employeeDetails">{employee.email}</Link>{" "}
                  </td>
                  <td className="table__customer">{employee.phone}</td>
                  <td>
                    <div className="table__status">
                      {" "}
                      {employee.status === "working"
                        ? tableStatus
                        : tableStatusNotWorking}
                    </div>
                  </td>
                  <td>{seeMoreFunction()}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TailorEmployeeScreen;

// Assign work function 👇
function AssignWork({ cancelAddEmployee }) {
  return (
    <div className="assign__work">
      <form action="" id="assign__work__inputs">
        <div className="assign__work__container">
          <div className="assign__work__title">Assign Work</div>
          <div className="assign__work__desc">Assign work to your employee</div>
          <div className="assign__work__row">
            <label htmlFor="">
              <p>Select Employee</p>
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
              <p> Select Order</p>
              <select name="" id="" className="select__employee__inputBox">
                <option value="Order 1 product 1">Order 1 product 1</option>
                <option value="Order 1 product 2">Order 1 product 2</option>
                <option value="Order 1 product 3">Order 1 product 3</option>
                <option value="Order 2 product 1">Order 2 product 1</option>
                <option value="Order 9 product 6">Order 9 product 6</option>
              </select>
            </label>
          </div>
          <div className="assign__work__row justify-content-between">
            <button className="assignWorkSubmitButton">DONE</button>
            <button
              className="newProductCancelButton"
              onClick={cancelAddEmployee}
            >
              CANCEL
            </button>
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
