import React from "react";
import AnotherTabs from "../../Components/AnotherTabs/AnotherTabs";
import "../../styles/employee/EmployeeWorkScreen.css";
function EmployeeWorkScreen() {
  return (
    <div className="your__work">
      <AnotherTabs>
        <div label="Work Details & Progress">
          <WorkDetailsAndProgress></WorkDetailsAndProgress>
        </div>
        <div label="Materials Needed">
          <MaterialsNeeded></MaterialsNeeded>
        </div>
        <div label="Customer Details">
          <CustomerDetailsForEmployee></CustomerDetailsForEmployee>
        </div>
      </AnotherTabs>
    </div>
  );
}
export function WorkDetailsAndProgress() {
  return (
    <div className="work__detail__progress">
      <div className="work__detail__progress__instruction">
        Your work details, work progress and customer details are shown here.
      </div>
      <div className="work__detail__progress__title">
        <h5>WORK DETAILS & PROGRESS</h5>
      </div>
      <div className="work__details__progress__container">
        <div className="employee__work__details">
          <span>
            <strong>Date Started: </strong>
          </span>
          <span>20 Feb, 2020</span>
        </div>
        <div className="employee__work__details">
          <span>
            <strong>Estimated Finish Date: </strong>
          </span>
          <span>30 Feb, 2020</span>
        </div>
        <div className="employee__work__details">
          <span>
            <strong>Status: </strong>
          </span>
          <span>completed/working</span>
        </div>
        <div className="employee__work__details">
          <span>
            <strong>Design: </strong>
          </span>
        </div>
      </div>
    </div>
  );
}
export function MaterialsNeeded() {
  return (
    <div className="materials__needed">
      <div className="work__detail__progress__instruction">
        Your work details, work progress and customer details are shown here.
      </div>
      <div className="work__detail__progress__title">
        <h5>MATERIALS NEEDED</h5>
      </div>
      <div className="materials__container row ">
        <div className="materials col-lg-4 col-md-4 col-6">
          <img
            className="material__image"
            src="images/Materials Needed/thread.jpg"
            alt="thread"
          />
        </div>
        <div className="materials col-lg-4 col-md-4 col-6">
          <img
            className="material__image"
            src="images/Materials Needed/cloth.jpg"
            alt="cloth"
          />
        </div>
      </div>
    </div>
  );
}
export function CustomerDetailsForEmployee() {
  return (
    <div className="work__customer__details">
      <div className="work__detail__progress__instruction">
        Your work details, work progress and customer details are shown here.
      </div>
      <div className="work__detail__progress__title">
        <h5>CUSTOMER DETAILS</h5>
      </div>
      <div className="work__customer__container">
        <div className="employee__work__customer__details">
          <span>
            <strong>Full Name: </strong>
          </span>
          <span>Kamal Chaudhary</span>
        </div>
        <div className="employee__work__customer__details">
          <span>
            <strong>Email: </strong>
          </span>
          <span>kamalchau@gmail.com</span>
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
      </div>
    </div>
  );
}
export default EmployeeWorkScreen;
