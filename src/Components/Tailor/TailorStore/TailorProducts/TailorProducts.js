import React from "react";
import "./TailorProducts.css";
import Checkbox from "@material-ui/core/Checkbox";
function TailorProducts() {
  return (
    <div className="tailor__products">
      <div className="tailor__products__title">
        <h5>PRODUCTS</h5>
      </div>
      <div className="tailor__products__container">
        <table className="table " id="tailor__products__table">
          <thead>
            <tr>
              <th scope="col"></th>

              <th scope="col">Name</th>
              <th scope="col">Associated Design</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <Checkbox></Checkbox>{" "}
              </td>
              <th scope="row">Kids Anchara</th>
              <td>See Detail</td>
              <td>Rs. 12,000</td>
              <td>Men</td>
            </tr>
            <tr>
              <td>
                {" "}
                <Checkbox></Checkbox>{" "}
              </td>
              <th scope="row">Kids Anchara</th>
              <td>See Detail</td>
              <td>Rs. 12,000</td>
              <td>Men</td>
            </tr>
            <tr>
              <td>
                {" "}
                <Checkbox></Checkbox>{" "}
              </td>
              <th scope="row">Kids Anchara</th>
              <td>See Detail</td>
              <td>Rs. 12,000</td>
              <td>Men</td>
            </tr>
            <tr>
              <td>
                {" "}
                <Checkbox></Checkbox>{" "}
              </td>
              <th scope="row">Kids Anchara</th>
              <td>See Detail</td>
              <td>Rs. 12,000</td>
              <td>Men</td>
            </tr>
            <tr>
              <td>
                {" "}
                <Checkbox></Checkbox>{" "}
              </td>
              <th scope="row">Kids Anchara</th>
              <td>See Detail</td>
              <td>Rs. 12,000</td>
              <td>Men</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TailorProducts;
