import React from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { SeeMoreToogle } from "../../Components/SeeMoreContainer";

function AdminEmployeeScreen() {
  let seeMoreOptionsList = [
    {
      icon: <VisibilityIcon></VisibilityIcon>,
      iconText: "See Employee Details",
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
      <td className="table__customer">Abhishek Neupane</td>
      <td className="table__location">Biratnagar</td>
      <td>{seeMoreFunction()}</td>
    </tr>
  );

  return (
    <div className="employee__admin">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">EMPLOYEES</h5>
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
                Associated Taior
              </th>
              <th scope="col" className="table__header">
                Location
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

export default AdminEmployeeScreen;
