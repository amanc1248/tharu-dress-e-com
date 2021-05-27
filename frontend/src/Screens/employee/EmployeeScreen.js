import React, { useEffect, useRef, useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Link, withRouter } from "react-router-dom";
import Tabs from "../../Components/Tabs/Tabs";
import EmployeeWorkScreen from "./EmployeeWorkScreen";
import EmployeeOrdersScreen from "./EmployeeOrdersScreen";
import EmployeeCustomersScreen from "./EmployeeCustomersScreen";
import EmployeeAccountDetailsScreen from "./EmployeeAccountDetailsScreen";
import { useDispatch, useSelector } from "react-redux";
import { employeeLogout } from "../../actions/employeeActions";

function EmployeeScreen({ history }) {
  const dispatch = useDispatch();

  const employeeLogin = useSelector((state) => state.employeeLogin);
  const { employeeInfo } = employeeLogin;
  const logoutHandler = () => {
    dispatch(employeeLogout());
  };

  useEffect(() => {
    if (!employeeInfo) {
      history.push("/employeeRegister");
    }
  }, [history, employeeInfo]);
  return (
    <div className="employee__store">
      <div className="welcome__user">
        <span className="welcome__the__user">
          WELCOME, {employeeInfo && employeeInfo["firstName"]}
        </span>
        <span className="user_logout" onClick={logoutHandler}>
          {" "}
          <u>Sign Out</u>
        </span>
      </div>
      <p className="contact__us__instruction">
        If you have any queries or need further assistance, please Contact Us
      </p>
      <Tabs>
        <div label="Your Work">
          <EmployeeWorkScreen></EmployeeWorkScreen>
        </div>
        <div label="Product Orders">
          <EmployeeOrdersScreen></EmployeeOrdersScreen>
        </div>
        <div label="Customers">
          <EmployeeCustomersScreen></EmployeeCustomersScreen>
        </div>
        <div label="Account Details">
          <EmployeeAccountDetailsScreen></EmployeeAccountDetailsScreen>
        </div>
      </Tabs>
    </div>
  );
}

export default withRouter(EmployeeScreen);

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
