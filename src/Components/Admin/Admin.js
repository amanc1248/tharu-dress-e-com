import React from "react";
import ImageWithTitle from "../Global/ImageWithTitle";
import TailorTabs from "../Tailor/TailorStore/TailorTabs/TailorTabs";
import Dashboard from "./Dashboard/Dashboard";
import "./Admin.css";
import ProductRequest from "./ProductRequests/ProductRequest";
import CustomerAdmin from "./Customer/CustomerAdmin";
import TailorAdmin from "./Tailor/TailorAdmin";
import EmployeeAdmin from "../Employees/EmployeeAdmin";
import OrdersAdmin from "./Orders/OrdersAdmin";
import ProductsAdmin from "./Products/ProductsAdmin";
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
        <div label="Customers">
          <CustomerAdmin></CustomerAdmin>
        </div>
        <div label="Tailors">
          <TailorAdmin></TailorAdmin>
        </div>
        <div label="Employees">
          <EmployeeAdmin></EmployeeAdmin>
        </div>
        <div label="Orders">
          <OrdersAdmin></OrdersAdmin>
        </div>
        <div label="Products">
          <ProductsAdmin></ProductsAdmin>
        </div>
      </TailorTabs>
    </div>
  );
}

export default Admin;
