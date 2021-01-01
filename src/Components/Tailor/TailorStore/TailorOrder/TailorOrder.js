import React from "react";
import "./TailorOrder.css";
import SearchIcon from "@material-ui/icons/Search";
function TailorOrder() {
  return (
    <div className="tailor__order">
      <div className="tailor__heading row no-gutters">
        <div className="tailor__heading__part1 col-lg-6 col-md-6 col-12">
          {" "}
          <h5>ORDERS</h5>
        </div>
        <div className="tailor__heading__part2 col-lg-4 col-md-5 col-12 justify-content-end">
          <div className="tailor__quick__search">
            <input
              type="text"
              placeholder="Quick search by id"
              className="tailor__quick__search__input"
            />
            <SearchIcon className="quick__search__icon"></SearchIcon>
          </div>
          <div className="tailor__status">
            <select name="" id="" className="tailor__status__options">
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
              <option value="Working">Working</option>
              <option selected value="Paid">
                Paid
              </option>
            </select>
          </div>
        </div>
      </div>
      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col">Orders</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Customer</th>
              <th scope="col">Purchased</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Rs. 12,000</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Rs. 12,000</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Rs. 12,000</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Rs. 12,000</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Rs. 12,000</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Rs. 12,000</td>
            </tr>
            <tr>
              <th scope="row">#124fdf</th>
              <td>June 4, 2020</td>
              <td>On Hold</td>
              <td>Swarnima Chaudhary</td>
              <td>1 item</td>
              <td>Rs. 12,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TailorOrder;
