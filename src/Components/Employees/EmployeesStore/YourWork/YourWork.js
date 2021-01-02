import React from "react";
import AnotherTabs from "../../../Cart/Account Details/AnotherTabs/AnotherTabs";
import "./YourWork.css";
function YourWork() {
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
          <CustomerDetails></CustomerDetails>
        </div>
      </AnotherTabs>
    </div>
  );
}
function WorkDetailsAndProgress() {
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
            <strong>Progress: </strong>
          </span>
          <select name="" id="">
            <option value="10">10%</option>
            <option value="20">20%</option>
            <option value="30">30%</option>
            <option value="40">40%</option>
            <option value="50">50%</option>
            <option value="60">60%</option>
            <option value="70">70%</option>
            <option value="80">80%</option>
            <option value="90">90%</option>
            <option value="100">100%</option>
          </select>
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
function MaterialsNeeded() {
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
function CustomerDetails() {
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
export default YourWork;
