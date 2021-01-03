import React from "react";
import EmployeeAccountDetails from "./EmployeesAccountDetails/EmployeeAccountDetails";
import EmployeeCustomers from "./EmployeesCustomers/EmployeeCustomers";
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
          <EmployeeCustomers></EmployeeCustomers>
        </div>
        <div label="Account Details">
          <EmployeeAccountDetails></EmployeeAccountDetails>
        </div>
      </EmployeeStoreTabs>
    </div>
  );
}

export default EmployeesStore;
