import React from "react";
import EmployeeOrders from "./EmployeesOrders/EmployeeOrders";
import EmployeeStoreTabs from "./EmployeeStoreTabs/EmployeeStoreTabs";
import YourWork from "./YourWork/YourWork";

function EmployeesStore() {
  return (
    <div className="employee__store">
      <EmployeeStoreTabs>
        <div label="Your Work">
          <YourWork></YourWork>
        </div>
        <div label="Orders">
          <EmployeeOrders></EmployeeOrders>
        </div>
        <div label="Customers">
          <h1>Customers</h1>
        </div>
        <div label="Account Details">Acccc details</div>
      </EmployeeStoreTabs>
    </div>
  );
}

export default EmployeesStore;
