import React from "react";
import TailorOrder from "./TailorOrder/TailorOrder";
import TailorSales from "./TailorSales/TailorSales";
import TailorTabs from "./TailorTabs/TailorTabs";

function Tailor() {
  return (
    <div className="tailor">
      <TailorTabs>
        <div label="Sales">
          <TailorSales></TailorSales>
        </div>
        <div label="Orders"><TailorOrder></TailorOrder></div>
        <div label="Products">This is Products</div>
        <div label="Customers">This is customers</div>
        <div label="Employees">This is employess</div>
        <div label="Account Details">This is account details</div>
      </TailorTabs>
    </div>
  );
}

export default Tailor;
