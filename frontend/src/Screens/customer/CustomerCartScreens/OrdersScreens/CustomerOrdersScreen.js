import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../../../../actions/orderActions";
import Loader from "../../../../Components/Loader";
import "../../../../styles/customer/CustomerOrdersScreen.css";
function CustomerOrdersScreen() {
  const orderListMy = useSelector((state) => state.orderListMy);
  const { loading: loadingOrders, error: errorOrders, orders } = orderListMy;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);
  return loadingOrders ? (
    <Loader></Loader>
  ) : orders.length === 0 ? (
    <h1>No Orders</h1>
  ) : (
    <div className="my__orders">
      <Table striped hover responsive bordered className="table-sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>TOTAL</th>
            <th>PAID</th>
            <th>DELIVERED</th>
            <th>DETAILS</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <td>{order.order_id}</td>
              <td>{order.date_time}</td>
              <td>{order.total_price}</td>
              <td>
                {order.ispaid === "0" ? (
                  <i className="fas fa-times" style={{ color: "red" }}></i>
                ) : (
                  "2015 - 9 - 8"
                )}
              </td>
              <td>
                {order.status === "delivered" ? (
                  order.delivered_date
                ) : (
                  <i className="fas fa-times" style={{ color: "red" }}></i>
                )}
              </td>
              <td>
                <LinkContainer to={`/orders/${order.order_id}`}>
                  <Button className="btn-sm" variant="light">
                    Details
                  </Button>
                </LinkContainer>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default CustomerOrdersScreen;
