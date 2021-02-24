import React from "react";
import AnotherTabs from "../customer/Cart/Account Details/AnotherTabs/AnotherTabs";
import {
  WorkDetailsAndProgress,
  MaterialsNeeded,
  CustomerDetailsForEmployee,
} from "../Employees/EmployeesStore/YourWork/YourWork";
import TailorTabs from "../Tailor/TailorStore/TailorTabs/TailorTabs";
import { CustomerOrders } from "./CustomerDetails";
import DetailsPage from "./DetailsPage";
import PersonIcon from "@material-ui/icons/Person";
import { SeeMoreToogle } from "../Global/SeeMoreContainer";
function EmployeeDetails() {
  return (
    <div className="employee__details">
      <DetailsPage title="EMPLOYEE DETAILS" detailName="Ankita's"></DetailsPage>
      <TailorTabs>
        <div label="Ankita's Information">
          <div className="employee__info">
            <EmployeeInformation></EmployeeInformation>
          </div>
        </div>
        <div label="Ankita's Current Work">
          <AnotherTabs>
            <div label="Work Details & Progress">
              <WorkDetailsAndProgress></WorkDetailsAndProgress>
            </div>
            <div label="Materials Needed">
              <MaterialsNeeded></MaterialsNeeded>
            </div>
            <div label="Current Customer">
              <CustomerDetailsForEmployee></CustomerDetailsForEmployee>
            </div>
            <div label="Current Order">
              {" "}
              <CurrentCustomerOrder></CurrentCustomerOrder>{" "}
            </div>
          </AnotherTabs>
        </div>
        <div label="Ankita's Orders">
          <CustomerOrders></CustomerOrders>
        </div>
        <div label="Ankita's Customers">
          <EmployeeCustomers></EmployeeCustomers>
        </div>
      </TailorTabs>
    </div>
  );
}
export function EmployeeInformation() {
  return (
    <div className="work__customer__details">
      <div className="work__detail__progress__instruction">
        Employee information is shown here.
      </div>
      <div className="work__detail__progress__title">
        <h5>EMPLOYEE DETAILS</h5>
      </div>
      <div className="work__customer__container">
        <div className="employee__work__customer__details">
          <span>
            <strong>Full Name: </strong>
          </span>
          <span>Sanjay Chaudhary</span>
        </div>
        <div className="employee__work__customer__details">
          <span>
            <strong>Email: </strong>
          </span>
          <span>sanjay@gmail.com</span>
        </div>
        <div className="employee__work__customer__details">
          <span>
            <strong>Date Joined: </strong>
          </span>
          <span>14 Feb, 2020</span>
        </div>
        <div className="employee__work__customer__details">
          <span>
            <strong>Orders Completed: </strong>
          </span>
          <span>12</span>
        </div>
      </div>
    </div>
  );
}

export function CurrentCustomerOrder() {
  return (
    <div className="work__customer__details">
      <div className="work__detail__progress__instruction">
        Your current customer order detail is shown here.
      </div>
      <div className="work__detail__progress__title">
        <h5>ORDER DETAILS</h5>
      </div>
      <div className="work__customer__container">
        <div className="employee__work__customer__details">
          <span>
            <strong>Order Number: </strong>
          </span>
          <span>#kjhsdfiu8345ugfd</span>
        </div>

        <div className="employee__work__customer__details">
          <span>
            <strong>Ordered Date: </strong>
          </span>
          <span>30 Feb, 2020</span>
        </div>
        <div className="employee__work__customer__details">
          <span>
            <strong>Ordered Delivery Date: </strong>
          </span>
          <span>1 Jan, 2020</span>
        </div>
        <div className="employee__work__customer__details">
          <span className="see__order__details">See Order Detail</span>
        </div>
      </div>
    </div>
  );
}

export function EmployeeCustomers() {
  return (
    <div className="employee__customers">
      <div className="tailor__customer__container">
        <table className="table" id="tailor__customer__table">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Ordered</th>
              <th scope="col">Phone</th>
              <th scope="col">Location</th>
              <th scope="col">Last Order</th>
              <th scope="col">See More</th>
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
      </div>
    </div>
  );
}
let seeMoreOptionsCustomer = [
  {
    icon: <PersonIcon></PersonIcon>,
    iconText: "Customer Details",
    theLink: "/customerDetails",
  },
];
const seeMoreFunction = () => {
  return <SeeMoreToogle theList={seeMoreOptionsCustomer}></SeeMoreToogle>;
};
export default EmployeeDetails;
