import React from "react";
import "../../styles/employee/EmployeeCustomersScreen.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import TailorCustomersScreen from "../tailor/TailorCustomersScreen";
import { SeeMoreEmployeeToogle } from "./EmployeeScreen";

function EmployeeCustomersScreen() {
  return (
    <div className="employee__customers">
      <TailorCustomersScreen></TailorCustomersScreen>
    </div>
  );
}

export default EmployeeCustomersScreen;
let seeMoreOptionsList = [
  {
    icon: <VisibilityIcon></VisibilityIcon>,
    iconText: "Customer Details",
    theLink: "/customerDetails",
  },
];
const seeMoreFunction = () => {
  return (
    <SeeMoreEmployeeToogle theList={seeMoreOptionsList}></SeeMoreEmployeeToogle>
  );
};
