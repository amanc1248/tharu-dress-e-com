import React from "react";
import "./TailorCustomer.css";
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
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
            </tr>{" "}
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>Rs. 35000</td>
              <td>+9779804355969</td>
              <td>Itahari -07</td>
              <td>10 Feb, 2020</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TailorCustomer;
