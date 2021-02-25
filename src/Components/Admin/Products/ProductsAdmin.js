import React from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";

import { SeeMoreToogle } from "../../Global/SeeMoreContainer";

function ProductsAdmin() {
  let seeMoreOptionsList = [
    {
      icon: <VisibilityIcon></VisibilityIcon>,
      iconText: "See Product Details",
      theLink: "/orderDetails",
    },
  ];
  const seeMoreFunction = () => {
    return <SeeMoreToogle theList={seeMoreOptionsList}></SeeMoreToogle>;
  };

  const tableRow = (
    <tr>
      <th scope="row" className="table__customer">
        Anchara With Red Boutique
      </th>
      <td className="table__customer">June 4, 2020</td>
      <td className="table__date">150</td>
      <td className="table__date">Sanju</td>
      <td className="table__date">144</td>
      <td className="table__date">Soni Chaudhary</td>

      <td>{seeMoreFunction()}</td>
    </tr>
  );
  return (
    <div className="products__admin">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">PRODUCTS </h5>
      </div>
      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Title
              </th>
              <th scope="col" className="table__header">
                Date Added
              </th>
              <th scope="col" className="table__header">
                Total Orders
              </th>

              <th scope="col" className="table__header">
                Tailor
              </th>
              <th scope="col" className="table__header">
                Total Customers
              </th>
              <th scope="col" className="table__header">
                Employee Assigned
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

export default ProductsAdmin;
