import React from "react";
import "./TailorCustomer.css";
import PersonIcon from "@material-ui/icons/Person";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import { SeeMoreToogle } from "../TailorOrder/TailorOrder";

function TailorCustomer() {
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
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>{seeMoreFunction()}</td>
            </tr>{" "}
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>{seeMoreFunction()}</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
              <td>{seeMoreFunction()}</td>
            </tr>
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
