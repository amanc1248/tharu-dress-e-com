import React, { useEffect, useRef, useState } from "react";
import EmployeeAccountDetails from "./EmployeesAccountDetails/EmployeeAccountDetails";
import EmployeeCustomers from "./EmployeesCustomers/EmployeeCustomers";
import EmployeeOrders from "./EmployeesOrders/EmployeeOrders";
import EmployeeStoreTabs from "./EmployeeStoreTabs/EmployeeStoreTabs";
import YourWork from "./YourWork/YourWork";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link } from "react-router-dom";

function EmployeesStore() {
  return (
    <div className="employee__store">
      <div className="welcome__user">
        <h5>WELCOME, AMAN</h5>
      </div>
      <p className="contact__us__instruction">
        If you have any queries or need further assistance, please Contact Us
      </p>
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

export function SeeMoreEmployeeToogle({ theList }) {
  const [moreAction, setMoreAction] = useState(false);
  const hideMoreAction = () => {
    setMoreAction(!moreAction);
  };

  console.log("This is console log");
  // console.log(seeMoreOptions[1].props.theIcon);

  function SeeMoreIndividualEmployee({ theIcon, theIconText, theLink }) {
    return (
      <Link to={theLink} style={{ color: "none", textDecoration: "none" }}>
        <div className="see__more__individual__container">
          <div className="see__more__icon">{theIcon}</div>
          <div className="see__more__text">{theIconText}</div>
        </div>
      </Link>
    );
  }
  function SeeMoreContainer({ seeMoreRef }) {
    let seeMoreOptions = theList.map((obj) => {
      return (
        <SeeMoreIndividualEmployee
          key={obj.toString()}
          theLink={obj.theLink}
          theIcon={obj.icon}
          theIconText={obj.iconText}
        >
          {" "}
        </SeeMoreIndividualEmployee>
      );
    });
    return (
      <div className="see__more__container" ref={seeMoreRef}>
        {seeMoreOptions}
      </div>
    );
  }
  const seeMoreRef = useRef(null);
  useEffect(() => {
    function hideSeeMore(event) {
      if (seeMoreRef.current && !seeMoreRef.current.contains(event.target)) {
        hideMoreAction();
      }
    }
    document.addEventListener("mousedown", hideSeeMore);
    return () => {
      document.removeEventListener("mousedown", hideSeeMore);
    };
  }, [moreAction, seeMoreRef]);
  return (
    <div className="see__more__data">
      <MoreHorizIcon
        className="more__horizon__icon"
        onClick={() => {
          setMoreAction(!moreAction);
        }}
      ></MoreHorizIcon>
      {moreAction && (
        <SeeMoreContainer seeMoreRef={seeMoreRef}></SeeMoreContainer>
      )}
    </div>
  );
}
