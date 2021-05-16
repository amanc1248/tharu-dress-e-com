import React, { useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import "../../styles/admin/AdminCustomersScreen.css";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { adminAllCustomersDetailAction } from "../../actions/adminActions.js";
import Loader from "../../Components/Loader";
function AdminCustomersScreen({ history }) {
  const adminAllCustomers = useSelector((state) => state.adminAllCustomers);
  const { loading, adminAllCustomersInfo } = adminAllCustomers;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminAllCustomersDetailAction());
  }, [dispatch]);

  const customerDetailsPage = (customerId) => {
    history.push(`/customerDetails/${customerId}`);
  };
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="customer__admin">
      <div className="tailor__products__heading">
        <h5 className="admin__tabs__title">CUSTOMERS</h5>
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
                Total Orders
              </th>

              <th scope="col" className="table__header">
                Total Purchase
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
            {adminAllCustomersInfo &&
              adminAllCustomersInfo.map((customer) => (
                <tr>
                  <th scope="row" className="table__customer">
                    {customer.name}
                  </th>
                  <td className="table__customer">{customer.dateJoined}</td>
                  <td className="table__date">{customer.totalOrders}</td>
                  <td className="table__price">
                    {" "}
                    <span className="table__rs__title">Rs.</span>{" "}
                    {customer.totalPurchased}
                  </td>{" "}
                  <td className="table__location">{customer.Location}</td>
                  <td>
                    <SeeMoreToogle
                      theList={[
                        {
                          icon: <VisibilityIcon></VisibilityIcon>,
                          iconText: "See Customer Details",
                          theClickFunction: () => {
                            customerDetailsPage(customer.customer_id);
                          },
                        },
                      ]}
                    ></SeeMoreToogle>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default withRouter(AdminCustomersScreen);
