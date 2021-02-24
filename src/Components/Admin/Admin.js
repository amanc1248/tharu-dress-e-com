import React from "react";
import ImageWithTitle from "../Global/ImageWithTitle";
import TailorTabs from "../Tailor/TailorStore/TailorTabs/TailorTabs";
import Dashboard from "./Dashboard/Dashboard";
import "./Admin.css";
import ProductRequest from "./ProductRequests/ProductRequest";
function Admin() {
  return (
    <div className="admin__dashboard">
      <ImageWithTitle theTitle="ADMIN"></ImageWithTitle>
      <div className="welcome__user">
        <h5>WELCOME, AMAN</h5>
      </div>
      <p className="contact__us__instruction">
        See the details of your store here
      </p>

      <TailorTabs>
        <div label="DashBoard">
          <Dashboard></Dashboard>
        </div>
        <div label="Product Requests">
          <ProductRequest></ProductRequest>
        </div>
        <div label="Customers"></div>
        <div label="Tailors"></div>
        <div label="Employees"></div>
        <div label="Orders"></div>
        <div label="Products"></div>
      </TailorTabs>
    </div>
  );
}

export default Admin;
