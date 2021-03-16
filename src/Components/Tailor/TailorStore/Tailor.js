import React, { useState, useEffect, useRef } from "react";
import TailorAccountDetails from "./TailorAccountDetails/TailorAccountDetails";
import TailorCustomer from "./TailorCustomer/TailorCustomer";
import TailorEmployees from "./TailorEmployees/TailorEmployees";
import TailorOrder from "./TailorOrder/TailorOrder";
import TailorProducts from "./TailorProducts/TailorProducts";
import TailorSales from "./TailorSales/TailorSales";
import TailorTabs from "./TailorTabs/TailorTabs";
import { FaBars, FaArrowLeft } from "react-icons/fa";
// function Tailor() {
//   return (
//     <div className="tailor">
//       <div className="welcome__user">
//         <h5>WELCOME, AMAN</h5>
//       </div>
//       <p className="contact__us__instruction">
//         If you have any queries or need further assistance, please Contact Us
//       </p>
//       <TailorTabs>
//         <div label="Sales">
//           <TailorSales></TailorSales>
//         </div>
//         <div label="Orders">
//           <TailorOrder></TailorOrder>
//         </div>
//         <div label="Products">
//           <TailorProducts></TailorProducts>{" "}
//         </div>
//         <div label="Customers">
//           <TailorCustomer></TailorCustomer>
//         </div>
//         <div label="Employees">
//           <TailorEmployees></TailorEmployees>
//         </div>
//         <div label="Account Details">
//           <TailorAccountDetails></TailorAccountDetails>
//         </div>
//       </TailorTabs>
//     </div>
//   );
// }

function Tailor() {
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
  return (
    <div className="side__bar">
      <div className="top__side__bar">
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
      {sidebar ? (
        <div>
          <TheSideBar></TheSideBar>
        </div>
      ) : (
        <></>
      )}
      <div className="the__content__section">
        <h1>Hi this is the side bar</h1>
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
          {/* {theSideBarData.map((obj) => {
            return (
              <SidebarComponent
                theIcon={obj.icon}
                theTitle={obj.title}
              ></SidebarComponent>
            );
          })} */}
        </div>
      </div>
    );
  }
}

function SidebarComponent({ theIcon, theTitle }) {
  return (
    <div className="sidebar__component">
      <div className="the__sidebar__icon">{theIcon}</div>
      <div className="the__sidebar__title">{theTitle}</div>
    </div>
  );
}
export default Tailor;
