import React from "react";

import { FaBars, FaArrowLeft } from "react-icons/fa";
import { TheEntireSidebar } from "../admin/AdminScreen";
import TailorAccountDetailsScreen from "./TailorAccountDetailsScreens/TailorAccountDetailsScreen";
import TailorCustomersScreen from "./TailorCustomersScreen";
import TailorEmployeeScreen from "./TailorEmployeeScreen";
import TailorOrdersScreen from "./TailorOrdersScreen";
import TailorProductsScreen from "./TailorProductsScreen";
import TailorSalesScreen from "./TailorSalesScreen";
import theTailorSidebarData from "../../Data/TailorData";
const ourTabs = [
  <TailorSalesScreen></TailorSalesScreen>,
  <TailorOrdersScreen></TailorOrdersScreen>,
  <TailorProductsScreen></TailorProductsScreen>,
  <TailorCustomersScreen></TailorCustomersScreen>,
  <TailorEmployeeScreen></TailorEmployeeScreen>,
  <TailorAccountDetailsScreen></TailorAccountDetailsScreen>,
];
function TailorScreen() {
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

export default TailorScreen;
