import React, { useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import "./TailorCustomer.css";
import PersonIcon from "@material-ui/icons/Person";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";

function TailorCustomer() {
  const [seeMoreCustomers, setseeMoreCustomers] = useState(false);
  const showHideSeeMoreCustomers = () => {
    setseeMoreCustomers(!seeMoreCustomers);
  };
  return (
    <div className="tailor__customer">
      <div className="tailor__customer__title">
        <h5>CUSTOMERS</h5>
      </div>
      <div className="tailor__customer__container">
        <table className="table" id="tailor__customer__table">
          <thead>
            <tr>
              <th scope="col">User</th>
              <th scope="col">Ordered</th>
              <th scope="col">Phone</th>
              <th scope="col">Location</th>
              <th scope="col">Last Order</th>
              <th scope="col">See More</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td className="see__more__data">
                <MoreHorizIcon
                  onClick={showHideSeeMoreCustomers}
                ></MoreHorizIcon>
                {seeMoreCustomers && <SeeMoreCustomers></SeeMoreCustomers>}
              </td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>
                <MoreHorizIcon></MoreHorizIcon>
              </td>
            </tr>{" "}
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>
                <MoreHorizIcon></MoreHorizIcon>
              </td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>
                <MoreHorizIcon></MoreHorizIcon>
              </td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>
                <MoreHorizIcon></MoreHorizIcon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TailorCustomer;

// for the customer see more
export function SeeMoreCustomers() {
  let seeMoreOptionsCustomer = [
    { icon: <PersonIcon></PersonIcon>, iconText: "Customer Details" },
    {
      icon: <FeaturedPlayListIcon></FeaturedPlayListIcon>,
      iconText: "Product Orders",
    },
  ];
  let seeMoreOptions = seeMoreOptionsCustomer.map((obj) => {
    return (
      <SeeMoreCustomer
        key={obj.toString()}
        theIcon={obj.icon}
        theIconText={obj.iconText}
      ></SeeMoreCustomer>
    );
  });
  function SeeMoreCustomer({ theIcon, theIconText }) {
    return (
      <div className="see__more__individual__container">
        <div className="see__more__icon">{theIcon}</div>
        <div className="see__more__text">{theIconText}</div>
      </div>
    );
  }
  return (
    <div className="see__more">
      <div className="see__more__container">{seeMoreOptions}</div>
    </div>
  );
}
