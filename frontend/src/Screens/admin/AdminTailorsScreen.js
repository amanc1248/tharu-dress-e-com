import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import "../../styles/admin/AdminTailorsScreen.css";

function AdminTailorsScreen() {
  let seeMoreOptionsList = [
    {
      icon: <VisibilityIcon></VisibilityIcon>,
      iconText: "See Tailor Details",
      theLink: "/orderDetails",
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
      <td className="table__customer">April 5, 2019</td>
      <td className="table__date">155</td>
      <td className="table__price">
        {" "}
        <span className="table__rs__title">Rs.</span> 12,000
      </td>{" "}
      <td className="table__location">Biratnagar</td>
      <td className="table__location">8</td>
      <td>{seeMoreFunction()}</td>
    </tr>
  );

  return (
    <div className="tailor__admin">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">TAILORS</h5>
      </div>
      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Name
              </th>
              <th scope="col" className="table__header">
                Date Joined
              </th>
              <th scope="col" className="table__header">
                Total Completed Orders
              </th>

              <th scope="col" className="table__header">
                Total Sales
              </th>
              <th scope="col" className="table__header">
                Location
              </th>
              <th scope="col" className="table__header">
                Total Employees
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

export default AdminTailorsScreen;
