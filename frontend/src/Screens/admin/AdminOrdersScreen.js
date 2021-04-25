import React from "react";

import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import PersonIcon from "@material-ui/icons/Person";
import SeeMoreToogle from "../../Components/SeeMoreContainer";

function AdminOrdersScreen() {
  let seeMoreOptionsList = [
    {
      icon: <VisibilityIcon></VisibilityIcon>,
      iconText: "Order Details",
      theLink: "/orderDetails",
    },
    {
      icon: <AssignmentIndIcon></AssignmentIndIcon>,
      iconText: "Tailor Details",
      theLink: "/tailorAccount",
    },
    {
      icon: <AssignmentIndIcon></AssignmentIndIcon>,
      iconText: "Employee Details",
      theLink: "/employeeDetails",
    },
    {
      icon: <PersonIcon></PersonIcon>,
      iconText: "Customer Details",
      theLink: "/customerDetails",
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
      <td className="table__date">Pujan Prasai</td>
      <td className="table__date">Soni Chaudhary</td>
      <td className="table__date">Sanju </td>

      <td>{seeMoreFunction()}</td>
    </tr>
  );
  return (
    <div className="orders__admin">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">ORDERS</h5>
      </div>
      <div className="tailor__orders">
        <table class="table order__table" id="orders__table">
          <thead>
            <tr>
              <th scope="col" className="table__header">
                Order Id
              </th>
              <th scope="col" className="table__header">
                Ordered Date
              </th>
              <th scope="col" className="table__header">
                Status
              </th>

              <th scope="col" className="table__header">
                Customer
              </th>
              <th scope="col" className="table__header">
                Tailor
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

export default AdminOrdersScreen;
