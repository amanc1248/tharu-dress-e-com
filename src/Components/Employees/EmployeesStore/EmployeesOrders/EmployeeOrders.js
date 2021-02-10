import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./EmployeeOrders.css";
import VisibilityIcon from "@material-ui/icons/Visibility";

import { SeeMoreEmployeeToogle } from "../EmployeesStore";
function EmployeeOrders() {
  return (
    <div className="employee__orders">
      <div className="employee__orders__heading row no-gutters">
        <div className="tailor__heading__part1 col-lg-6 col-md-6 col-sm-12">
          <h5>ORDERS</h5>
        </div>
        <div className="employee__orders__quick__search col-lg-6 col-md-6 col-sm-12">
          <input
            type="text"
            placeholder="Quick search by id"
            className="tailor__quick__search__input"
          />
          <SearchIcon className="quick__search__icon"></SearchIcon>
        </div>
      </div>
      <div className="employee__orders__container">
        <table className="table" id="employee__orders__table">
          <thead>
            <tr>
              <th scope="col">Order No.</th>
              <th scope="col">Date Ordered</th>
              <th scope="col">Name</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
              <th scope="col">See more</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#akkjj32kdf</th>
              <td>June 4, 2020</td>
              <td>Dipu Chaudhary</td>
              <td>Completed</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#akkjj32kdf</th>
              <td>June 4, 2020</td>
              <td>Dipu Chaudhary</td>
              <td>Completed</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#akkjj32kdf</th>
              <td>June 4, 2020</td>
              <td>Dipu Chaudhary</td>
              <td>Completed</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#akkjj32kdf</th>
              <td>June 4, 2020</td>
              <td>Dipu Chaudhary</td>
              <td>Completed</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#akkjj32kdf</th>
              <td>June 4, 2020</td>
              <td>Dipu Chaudhary</td>
              <td>Completed</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#akkjj32kdf</th>
              <td>June 4, 2020</td>
              <td>Dipu Chaudhary</td>
              <td>Completed</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#akkjj32kdf</th>
              <td>June 4, 2020</td>
              <td>Dipu Chaudhary</td>
              <td>Completed</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#akkjj32kdf</th>
              <td>June 4, 2020</td>
              <td>Dipu Chaudhary</td>
              <td>Completed</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeOrders;

let seeMoreOptionsList = [
  { icon: <VisibilityIcon></VisibilityIcon>, iconText: "Order Details" },
];
const seeMoreFunction = () => {
  return (
    <SeeMoreEmployeeToogle theList={seeMoreOptionsList}></SeeMoreEmployeeToogle>
  );
};
