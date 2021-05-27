import React, { useEffect } from "react";
import "../../styles/employee/EmployeeOrdersScreen.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { SeeMoreEmployeeToogle } from "./EmployeeScreen";
import TailorOrdersScreen from "../tailor/TailorOrdersScreen";
import { withRouter } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { employeeProductOrdersAction } from "../../actions/employeeActions";
import Loader from "../../Components/Loader";
import SearchIcon from "@material-ui/icons/Search";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import PersonIcon from "@material-ui/icons/Person";

function EmployeeOrdersScreen({ history }) {
  const employeeLogin = useSelector((state) => state.employeeLogin);
  const { employeeInfo } = employeeLogin;
  const employeeProductOrders = useSelector(
    (state) => state.employeeProductOrders
  );
  const tableStatus = (
    <div className="table__status__container">
      <div class="table__status__icon"></div>
      <div className="table__status__text">Delivered</div>
    </div>
  );
  const tableStatusNotDeliverd = (
    <div className="table__status__notDelivered__container">
      <div class="table__status__icon"></div>
      <div className="table__status__text">Not Delivered</div>
    </div>
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (employeeInfo) {
      const empId = employeeInfo.employee_id;
      dispatch(employeeProductOrdersAction(empId));
    } else {
      history.push("/employeeSignin");
    }
  }, [dispatch, employeeInfo, history]);
  // const tableRow = (
  const { loading, error, orders } = employeeProductOrders;
  // orders = tai
  const theOrders =
    employeeProductOrders && employeeProductOrders.employeeProductOrdersInfo;
  const orderDetailsPage = (orderId) => {
    history.push(`/orders/${orderId}`);
  };
  const customerDetailsPage = (customerId) => {
    history.push(`/customerDetails/${customerId}`);
  };

  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="employee__orders">
      <div className="tailor__order">
        <div className="tailor__heading row no-gutters">
          <div className="tailor__heading__part1 col-lg-6 col-md-6 col-12">
            {" "}
            <h5 className="tailor__tabs__title">PRODUCT ORDERS</h5>
          </div>
        </div>
        <div className="tailor__orders">
          <table class="table order__table" id="orders__table">
            <thead>
              <tr>
                <th scope="col" className="table__header">
                  Order No.
                </th>
                <th scope="col" className="table__header">
                  Date
                </th>
                <th scope="col" className="table__header">
                  Status
                </th>
                <th scope="col" className="table__header">
                  Customer
                </th>

                <th scope="col" className="table__header">
                  See more
                </th>
              </tr>
            </thead>
            <tbody>
              {theOrders &&
                theOrders.map((order) => (
                  <tr>
                    <th scope="row" className="table__order__number">
                      {order.order_id}
                    </th>
                    <td className="table__date">{order.date}</td>
                    <td>
                      <div className="table__status">
                        {" "}
                        {order.status === "delivered"
                          ? tableStatus
                          : tableStatusNotDeliverd}
                      </div>
                    </td>
                    <td className="table__customer">{order.customer}</td>

                    <td>
                      <SeeMoreToogle
                        theList={[
                          {
                            icon: <VisibilityIcon></VisibilityIcon>,
                            iconText: "Order Details",
                            theClickFunction: () => {
                              orderDetailsPage(order.order_id);
                            },
                          },

                          {
                            icon: <PersonIcon></PersonIcon>,
                            iconText: "Customer Details",
                            theClickFunction: () => {
                              customerDetailsPage(order.customer_id);
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
    </div>
  );
}

export default withRouter(EmployeeOrdersScreen);
