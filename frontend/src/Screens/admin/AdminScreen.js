import "../../styles/admin/AdminScreen.css";

import React from "react";
import AdminProductRequestsScreen from "./AdminProductRequestsScreen";
import AdminDashboardScreen from "./AdminDashboardScreen";
import AdminCustomersScreen from "./AdminCustomersScreen";
import AdminTailorsScreen from "./AdminTailorsScreen";
import AdminEmployeeScreen from "./AdminEmployeeScreen";
import AdminOrdersScreen from "./AdminOrdersScreen";
import AdminProductsScreen from "./AdminProductsScreen";
import theAdminSideBarData from "../../Data/AdminData";
import { TheEntireSidebar } from "../../Components/TheEntireSidebar";
const ourTabs = [
  <AdminDashboardScreen></AdminDashboardScreen>,
  <AdminProductRequestsScreen></AdminProductRequestsScreen>,
  <AdminCustomersScreen></AdminCustomersScreen>,
  <AdminTailorsScreen></AdminTailorsScreen>,
  <AdminEmployeeScreen></AdminEmployeeScreen>,
  <AdminOrdersScreen></AdminOrdersScreen>,
  <AdminProductsScreen></AdminProductsScreen>,
];
function AdminScreen() {
  return (
    <div>
      <TheEntireSidebar
        ourTabs={ourTabs}
        name="Aman Chaudhary"
        type="Administrator"
        theData={theAdminSideBarData}
      ></TheEntireSidebar>
    </div>
  );
}

export default AdminScreen;
