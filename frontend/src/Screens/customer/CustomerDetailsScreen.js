import React, { useEffect } from "react";
import VisibilityIcon from "@material-ui/icons/Visibility";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import Tabs from "../../Components/Tabs/Tabs";
import DetailsPage from "../../Components/DetailsPage";
import "../../styles/components/DetailsPage.css";
import { CustomerDetailsForEmployee } from "../employee/EmployeeWorkScreen";
import SeeMoreToogle from "../../Components/SeeMoreContainer";
import { useDispatch, useSelector } from "react-redux";
import { customerDetailsAction } from "../../actions/customerActions";
import Loader from "../../Components/Loader";
function CustomerDetailsScreen({ history, match }) {
  const customerId = match.params.customerId;
  const dispatch = useDispatch();
  const customerDetails = useSelector((state) => state.customerDetails);
  const { loading, error, customerInfo } = customerDetails;
  useEffect(() => {
    dispatch(customerDetailsAction(customerId));
  }, [dispatch, customerId]);
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="customer__details">
      <DetailsPage
        title="CUSTOMER DETAILS"
        detailName={customerInfo && customerInfo.firstName}
      ></DetailsPage>
      <Tabs>
        <div label={`${customerInfo && customerInfo.firstName}`}>
          <div className="customer__info">
            <CustomerDetails
              history={history}
              match={match}
              customerInfo={customerInfo}
              loading={loading}
            ></CustomerDetails>
          </div>
        </div>
        <div label={`${customerInfo && customerInfo.firstName} orders`}>
          <CustomerOrders
            customerInfo={customerInfo}
            loading={loading}
            history={history}
          ></CustomerOrders>
        </div>
      </Tabs>
    </div>
  );
}

function CustomerDetails({ customerInfo, loading }) {
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="work__customer__details">
      <div className="work__detail__progress__instruction">
        Customer details is shown here.
      </div>
      <div className="work__detail__progress__title">
        <h5>CUSTOMER DETAILS</h5>
      </div>
      <div className="work__customer__container">
        <div className="employee__work__customer__details">
          <span>
            <strong>Full Name: </strong>
          </span>
          <span>{customerInfo && customerInfo.firstName}</span>
        </div>
        <div className="employee__work__customer__details">
          <span>
            <strong>Email: </strong>
          </span>
          <span>{customerInfo && customerInfo.email}</span>
        </div>
        <div className="employee__work__customer__details">
          <span>
            <strong>Phone: </strong>
          </span>
          <span>{customerInfo && customerInfo.phone}</span>
        </div>
      </div>
    </div>
  );
}

//Creating customer orders 👇👇👇👇
export function CustomerOrders({ customerInfo, loading, history }) {
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

  const customerOrders = customerInfo && customerInfo.orders;
  const orderDetailsPage = (orderId) => {
    history.push(`/orders/${orderId}`);
  };
  return loading ? (
    <Loader></Loader>
  ) : (
    <div className="customer__orders">
      <div className="">
        <table class="table customer__orders__table">
          <thead>
            <tr>
              <th scope="col">Orders</th>
              <th scope="col">Date</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
              <th scope="col">See more</th>
            </tr>
          </thead>
          <tbody>
            {customerOrders &&
              customerOrders.map((order) => (
                <tr key={order.order_id}>
                  <th scope="row" className="table__order__number">
                    {order.order_id}
                  </th>
                  <td className="table__date">{order.date_time}</td>
                  <td>
                    <div className="table__status">
                      {" "}
                      {order.status === "delivered"
                        ? tableStatus
                        : tableStatusNotDeliverd}
                    </div>
                  </td>
                  <td className="table__price">
                    {" "}
                    <span className="table__rs__title">Rs. </span>
                    {order.total_price}
                  </td>{" "}
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
                          icon: <AssignmentIndIcon></AssignmentIndIcon>,
                          iconText: "Employee Details",
                          theLink: "/employeeDetails",
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
let seeMoreOptionsList = [
  {
    icon: <VisibilityIcon></VisibilityIcon>,
    iconText: "Order Details",
    theLink: "/orderDetails",
  },
  {
    icon: <AssignmentIndIcon></AssignmentIndIcon>,
    iconText: "Employee Details",
    theLink: "/employeeDetails",
  },
];
const seeMoreFunction = () => {
  return <SeeMoreToogle theList={seeMoreOptionsList}></SeeMoreToogle>;
};

export default CustomerDetailsScreen;
