import React from "react";
import './TailorEmployees.css'
function TailorEmployees() {
  return (
    <div className="tailor__employees">
      <div className="tailor__employees__title">
        <h5>EMPLOYEES</h5>
      </div>
      <div className="tailor__employees__container">
        <table className="table" id="tailor__employees__table">
          <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Date Joined</th>
              <th scope="col">Work Assigned</th>
              <th scope="col">Phone</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>20 Feb, 2020</td>
              <td>See Details</td>
              <td>+9779804355969</td>
              <td>Working</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>20 Feb, 2020</td>
              <td>See Details</td>
              <td>+9779804355969</td>
              <td>Working</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>20 Feb, 2020</td>
              <td>See Details</td>
              <td>+9779804355969</td>
              <td>Working</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>20 Feb, 2020</td>
              <td>See Details</td>
              <td>+9779804355969</td>
              <td>Working</td>
            </tr>
            <tr>
              <th scope="row">Sudeep Bhattrai</th>
              <td>20 Feb, 2020</td>
              <td>See Details</td>
              <td>+9779804355969</td>
              <td>Working</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TailorEmployees;
