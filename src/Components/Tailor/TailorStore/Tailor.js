import React from "react";
import TailorAccountDetails from "./TailorAccountDetails/TailorAccountDetails";
import TailorCustomer from "./TailorCustomer/TailorCustomer";
import TailorEmployees from "./TailorEmployees/TailorEmployees";
import TailorOrder from "./TailorOrder/TailorOrder";
import TailorProducts from "./TailorProducts/TailorProducts";
import TailorSales from "./TailorSales/TailorSales";
import TailorTabs from "./TailorTabs/TailorTabs";

function Tailor() {
  return (
    <div className="tailor">
      <TailorTabs>
        <div label="Sales">
          <TailorSales></TailorSales>
        </div>
        <div label="Orders">
          <TailorOrder></TailorOrder>
        </div>
        <div label="Products">
          <TailorProducts></TailorProducts>{" "}
        </div>
        <div label="Customers">
          <TailorCustomer></TailorCustomer>
        </div>
        <div label="Employees">
          <TailorEmployees></TailorEmployees>
        </div>
        <div label="Account Details">
          <TailorAccountDetails></TailorAccountDetails>
        </div>
      </TailorTabs>
    </div>
  );
}

export default Tailor;
