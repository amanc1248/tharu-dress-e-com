import React from "react";
import "../../styles/employee/EmployeeOrdersScreen.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { SeeMoreEmployeeToogle } from "./EmployeeScreen";
import TailorOrdersScreen from "../tailor/TailorOrdersScreen";

function EmployeeOrdersScreen() {
  return (
    <div className="employee__orders">
      <TailorOrdersScreen></TailorOrdersScreen>
    </div>
  );
}

export default EmployeeOrdersScreen;

let seeMoreOptionsList = [
  {
    icon: <VisibilityIcon></VisibilityIcon>,
    iconText: "Order Details",
    theLink: "/orderDetails",
  },
];
const seeMoreFunction = () => {
  return (
    <SeeMoreEmployeeToogle theList={seeMoreOptionsList}></SeeMoreEmployeeToogle>
  );
};
