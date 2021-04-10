import React from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import PersonIcon from "@material-ui/icons/Person";
import { BackspaceOutlined } from "@material-ui/icons";
import { SeeMoreToogle } from "../../Global/SeeMoreContainer";
import { Link } from "@material-ui/core";
import "./ProductRequest.css";

function ProductRequests() {
  let seeMoreOptionsList = [
    {
      icon: <VisibilityIcon></VisibilityIcon>,
      iconText: "See Request Details",
      theLink: "/orderDetails",
    },
    {
      icon: <PersonIcon></PersonIcon>,
      iconText: "Tailor Details",
      theLink: "/tailorAccount",
    },

    {
      icon: <CheckBoxIcon></CheckBoxIcon>,
      iconText: "Mark as approved",
    },
    {
      icon: <BackspaceOutlined></BackspaceOutlined>,
      iconText: "Mark as declined",
    },
  ];
  const seeMoreFunction = () => {
    return <SeeMoreToogle theList={seeMoreOptionsList}></SeeMoreToogle>;
  };

  const tableRow = (
    <tr>
      <th scope="row" className="table__customer">
        Dipraj Rai
      </th>
      <td className="table__customer">Anchara With Red Boutique</td>
      <td className="table__date">June 4, 2020</td>
      <td className="table__date">
        <Link>See Details</Link>
      </td>
      <td className="table__price">
        {" "}
        <span className="table__rs__title">Rs.</span> 12,000
      </td>{" "}
      <td>{seeMoreFunction()}</td>
    </tr>
  );
  return (
    <div>
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">PRODUCT REQUESTS</h5>
      </div>
      <div className="tailor__orders">
        <table
          class="table order__table product_requests__table"
          id="product__requests__orders__table"
        >
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Tailor
              </th>
              <th scope="col" className="table__header">
                Title
              </th>
              <th scope="col" className="table__header">
                Requested Date
              </th>

              <th scope="col" className="table__header">
                Design
              </th>
              <th scope="col" className="table__header">
                Price Allocated
              </th>
              <th scope="col" className="table__header">
                See more
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProductRequests;
