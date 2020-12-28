import React from "react";
import TailorTabs from "./TailorTabs/TailorTabs";

function Tailor() {
  return (
    <div className="tailor">
      <TailorTabs>
        <div label="Sales">This is Sales</div>
        <div label="Orders">This is Favourites</div>
        <div label="Products">This is Products</div>
        <div label="Customers">This is customers</div>{" "}
        <div label="Employees">This is employess</div>
        <div label="Account Details">This is account details</div>
      </TailorTabs>
    </div>
  );
}

export default Tailor;
