import React, { useEffect } from "react";

import { FaBars, FaArrowLeft } from "react-icons/fa";
import { TheEntireSidebar } from "../admin/AdminScreen";
import TailorAccountDetailsScreen from "./TailorAccountDetailsScreens/TailorAccountDetailsScreen";
import TailorCustomersScreen from "./TailorCustomersScreen";
import TailorEmployeeScreen from "./TailorEmployeeScreen";
import TailorOrdersScreen from "./TailorOrdersScreen";
import TailorProductsScreen from "./TailorProductsScreen";
import TailorSalesScreen from "./TailorSalesScreen";
import theTailorSidebarData from "../../Data/TailorData";
import { useDispatch, useSelector } from "react-redux";
import { tailorLogout } from "../../actions/tailorActions";
const ourTabs = [
  <TailorSalesScreen></TailorSalesScreen>,
  <TailorOrdersScreen></TailorOrdersScreen>,
  <TailorProductsScreen></TailorProductsScreen>,
  <TailorCustomersScreen></TailorCustomersScreen>,
  <TailorEmployeeScreen></TailorEmployeeScreen>,
  <TailorAccountDetailsScreen></TailorAccountDetailsScreen>,
];
function TailorScreen({ history }) {
  const dispatch = useDispatch();
  const tailorLogin = useSelector((state) => state.tailorLogin);
  const { tailorInfo } = tailorLogin;
  const signOutHandler = (e) => {
    e.preventDefault();
    dispatch(tailorLogout());
  };
  useEffect(() => {
    if (!tailorInfo) {
      history.push("/tailorSignin");
    }
  }, [tailorInfo, history]);
  return (
    <div>
      <TheEntireSidebar
        ourTabs={ourTabs}
        name={tailorInfo && tailorInfo.firstName}
        type="Tailor"
        theData={theTailorSidebarData}
        signOutHandler={signOutHandler}
      ></TheEntireSidebar>
    </div>
  );
}

export default TailorScreen;
