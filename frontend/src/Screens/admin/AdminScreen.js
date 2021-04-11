import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "../../styles/admin/AdminScreen.css";

import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaArrowLeft } from "react-icons/fa";
import AdminProductRequestsScreen from "./AdminProductRequestsScreen";
import AdminDashboardScreen from "./AdminDashboardScreen";
import AdminCustomersScreen from "./AdminCustomersScreen";
import AdminTailorsScreen from "./AdminTailorsScreen";
import AdminEmployeeScreen from "./AdminEmployeeScreen";
import AdminOrdersScreen from "./AdminOrdersScreen";
import AdminProductsScreen from "./AdminProductsScreen";
import theAdminSideBarData from "../../Data/AdminData";
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
export function TheEntireSidebar({ ourTabs, type, name, theData }) {
  const [sidebar, setSidebar] = useState(false);
  useEffect(() => {
    showHideSidebar();
    window.addEventListener("resize", showHideSidebar);
    return () => {
      window.removeEventListener("resize", showHideSidebar);
    };
  }, []);
  const showHideSidebar = () => {
    if (window.innerWidth > 700) {
      setLeftIcon(false);
      setSidebar(true);
    } else if (window.innerWidth < 700) {
      setLeftIcon(true);
      setSidebar(false);
    }
  };

  const [leftIcon, setLeftIcon] = useState(false);

  const sideBarRef = useRef();
  const whenOutsideSidebar = (e) => {
    if (!sideBarRef.current.contains(e.target)) {
      clickOutsideSideBar();
    }
  };
  const clickOutsideSideBar = () => {
    setSidebar(false);
  };

  // for changing tabs
  const [value, setValue] = useState(0);

  return (
    <div className="side__bar">
      <div className="top__side__bar">
        <div className="first__part">
          <div className="the__bar__title">DASA</div>
          <div
            className="the__icon"
            onClick={() => {
              setSidebar(true);
            }}
          >
            <FaBars></FaBars>
          </div>
        </div>
        <div className="second__part__sidebar">
          <div className="person__icon__circle">
            <div
              className="person__icon"
              style={{ color: "white", fontSize: "15px" }}
            >
              <PersonOutlineIcon></PersonOutlineIcon>
            </div>
          </div>

          <div className="admin__detail">
            <div className="admin__title">{type}</div>
            <div className="admin__name">{name}</div>
          </div>
        </div>
      </div>
      {sidebar ? (
        <div>
          <TheSideBar></TheSideBar>
        </div>
      ) : (
        <></>
      )}
      <div className="the__content__section">
        <h1>{ourTabs[value]}</h1>
      </div>
    </div>
  );
  function TheSideBar() {
    return (
      <div className="the__side__bar" onClick={whenOutsideSidebar}>
        <div className="left__side__bar" ref={sideBarRef}>
          <div className="left__side__bar__title">
            <div className="the__bar__title">DASA</div>
            {leftIcon ? (
              <div className="the__icon">
                <FaArrowLeft
                  onClick={() => {
                    setSidebar(false);
                  }}
                ></FaArrowLeft>
              </div>
            ) : (
              <></>
            )}
          </div>
          {theData.map((obj, index) => {
            return (
              <SidebarComponent
                index={index}
                theIcon={obj.icon}
                theTitle={obj.title}
              ></SidebarComponent>
            );
          })}
        </div>
      </div>
    );
  }
  function SidebarComponent({ theIcon, theTitle, index }) {
    return (
      <div
        className={`sidebar__component ${index === value && "active_btn"}`}
        onClick={() => {
          setValue(index);
        }}
      >
        <div className="the__sidebar__icon">{theIcon}</div>
        <div className="the__sidebar__title">{theTitle}</div>
      </div>
    );
  }
}

export default AdminScreen;
