import React, { useState, useEffect, useRef } from "react";
import TailorAccountDetails from "./TailorAccountDetails/TailorAccountDetails";
import TailorCustomer from "./TailorCustomer/TailorCustomer";
import TailorEmployees from "./TailorEmployees/TailorEmployees";
import TailorOrder from "./TailorOrder/TailorOrder";
import TailorProducts from "./TailorProducts/TailorProducts";
import TailorSales from "./TailorSales/TailorSales";
import TailorTabs from "./TailorTabs/TailorTabs";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import { TheEntireSidebar } from "../../Admin/Admin";
import theTailorSidebarData from "./TailorData";
const ourTabs = [
  <TailorSales></TailorSales>,
  <TailorOrder></TailorOrder>,
  <TailorProducts></TailorProducts>,
  <TailorCustomer></TailorCustomer>,
  <TailorEmployees></TailorEmployees>,
  <TailorAccountDetails></TailorAccountDetails>,
];
function Tailor() {
  return (
    <div>
      <TheEntireSidebar
        ourTabs={ourTabs}
        name="Dipraj Rai"
        type="Tailor"
        theData={theTailorSidebarData}
      ></TheEntireSidebar>
    </div>
  );
}

export default Tailor;
