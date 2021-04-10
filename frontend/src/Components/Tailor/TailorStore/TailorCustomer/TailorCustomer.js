import React from "react";
import "./TailorCustomer.css";
import PersonIcon from "@material-ui/icons/Person";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import "../../Tailors.css";
import { SeeMoreToogle } from "../../../Global/SeeMoreContainer";
function TailorCustomer() {
  const tableRow = (
    <tr>
      <th scope="row" className="table__customer">
        Sudeep Bhattrai
      </th>
      <td className="table__price">
        {" "}
        <span className="table__rs__title">Rs.</span> 12,000
      </td>{" "}
      <td className="table__customer">+9779804355969</td>
      <td className="table__location">Itahari -07</td>
      <td className="table__date">10 Feb, 2020</td>
      <td>{seeMoreFunction()}</td>
    </tr>
  );
  return (
    <div className="tailor__customer">
      <div className="tailor__customer__title">
        <h5 className="tailor__tabs__title">CUSTOMERS</h5>
      </div>
      <div className="tailor__customer__container">
        <table className="table" id="tailor__customer__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                User
              </th>
              <th scope="col" className="table__header">
                Ordered
              </th>
              <th scope="col" className="table__header">
                Phone
              </th>
              <th scope="col" className="table__header">
                Location
              </th>
              <th scope="col" className="table__header">
                Last Order
              </th>
              <th scope="col" className="table__header">
                See More
              </th>
            </tr>
          </thead>
          <tbody>
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default TailorCustomer;
// for the customer see more
let seeMoreOptionsCustomer = [
  {
    icon: <PersonIcon></PersonIcon>,
    iconText: "Customer Details",
    theLink: "/customerDetails",
  },
  {
    icon: <FeaturedPlayListIcon></FeaturedPlayListIcon>,
    iconText: "Product Orders",
  },
];
const seeMoreFunction = () => {
  return <SeeMoreToogle theList={seeMoreOptionsCustomer}></SeeMoreToogle>;
};
