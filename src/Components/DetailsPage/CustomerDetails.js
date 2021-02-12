import React from "react";
import { SeeMoreToogle } from "../Tailor/TailorStore/TailorOrder/TailorOrder";
import TailorTabs from "../Tailor/TailorStore/TailorTabs/TailorTabs";
import DetailsPage from "./DetailsPage";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { CustomerDetailsForEmployee } from "../Employees/EmployeesStore/YourWork/YourWork";
function CustomerDetails() {
  return (
    <div className="customer__details">
      <DetailsPage
        title="CUSTOMER DETAILS"
        detailName="Soni Chaudhary's"
      ></DetailsPage>
      <TailorTabs>
        <div label="Soni's Information">
          <div className="customer__info">
            <CustomerDetailsForEmployee></CustomerDetailsForEmployee>
          </div>
        </div>
        <div label="Soni's Orders">
          <CustomerOrders></CustomerOrders>
        </div>
      </TailorTabs>
    </div>
  );
}

//Creating customer orders 👇👇👇👇
export function CustomerOrders() {
  return (
    <div className="customer__orders">
      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col">Orders</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Customer</th>
              <th scope="col">Purchased</th>
              <th scope="col">Assigned To</th>
              <th scope="col">Total</th>
              <th scope="col">See more</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td> <td>{seeMoreFunction()}</td>
            </tr>

            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Manturam Chaudhary</td>
              <td>Rs. 12,000</td>
              <td>{seeMoreFunction()}</td>
            </tr>
          </tbody>
        </table>
        {/* <nav aria-label="Page navigation example">
          <ul className="pagination justify-content-end">
            <li className="page-item disabled">
              <a className="page-link" tabindex="-1">
                Previous
              </a>
            </li>
            <li className="page-item">
              <a className="page-link">1</a>
            </li>
            <li className="page-item">
              <a className="page-link">2</a>
            </li>
            <li className="page-item">
              <a className="page-link">3</a>
            </li>
            <li className="page-item">
              <a className="page-link">Next</a>
            </li>
          </ul>
        </nav> */}
      </div>
    </div>
  );
}
let seeMoreOptionsList = [
  {
    icon: <VisibilityIcon></VisibilityIcon>,
    iconText: "Order Details",
    theLink: "/orderDetails",
  },
  {
    icon: <AssignmentIndIcon></AssignmentIndIcon>,
    iconText: "Employee Details",
    theLink: "/employeeDetails",
  },
];
const seeMoreFunction = () => {
  return <SeeMoreToogle theList={seeMoreOptionsList}></SeeMoreToogle>;
};
export default CustomerDetails;
