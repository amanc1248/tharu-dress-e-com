import React from "react";
import "./EmployeeCustomers.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { SeeMoreEmployeeToogle } from "../EmployeesStore";
import TailorCustomer from "../../../Tailor/TailorStore/TailorCustomer/TailorCustomer";

function EmployeeCustomers() {
  return (
    <div className="employee__customers">
      <TailorCustomer></TailorCustomer>
      {/* <div className="employee__customer__container">
        <table className="table" id="employee__customer__table">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Ordered</th>
              <th scope="col">Phone</th>
              <th scope="col">Location</th>
              <th scope="col">Last Order</th>
              <th scope="col">See more</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>{seeMoreFunction()}</td>
            </tr>{" "}
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>{seeMoreFunction()}</td>
            </tr>
          </tbody>
        </table>
      </div> */}
    </div>
  );
}

export default EmployeeCustomers;
let seeMoreOptionsList = [
  {
    icon: <VisibilityIcon></VisibilityIcon>,
    iconText: "Customer Details",
    theLink: "/customerDetails",
  },
];
const seeMoreFunction = () => {
  return (
    <SeeMoreEmployeeToogle theList={seeMoreOptionsList}></SeeMoreEmployeeToogle>
  );
};
