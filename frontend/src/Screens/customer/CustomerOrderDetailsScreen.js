import React, { useState, useEffect } from "react";
import axios from "axios";
import { PayPalButton } from "react-paypal-button-v2";
import { Row, Col, ListGroup, Image, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../styles/customer/CustomerOrderDetailsScreen.css";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import { getOrderDetails } from "../../actions/orderActions";
import Header from "../../Components/customer/Header";
import Footer from "../../Components/customer/Footer/Footer";
import ImageWithTitle from "../../Components/ImageWithTitle";

const CustomerOrderDetailsScreens = ({ match, history }) => {
  const orderId = match.params.orderId;
  console.log("The order Id" + orderId);

  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;
  console.log("The orders👇👇");
  console.log(order);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  if (!loading) {
    //   Calculate Prices
    const addDecimals = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    order.itemsPrice = addDecimals(
      order.orderItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      )
    );
  }
  useEffect(() => {
    if (!userInfo) {
      history.push("/signin");
    } else {
      dispatch(getOrderDetails(orderId));
    }
  }, [dispatch, orderId, userInfo, history]);

  const successPaymentHandler = () => {
    console.log("success");
  };
  return loading ? (
    <Loader></Loader>
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      <Header></Header>
      <ImageWithTitle theTitle="ORDER DETAIL"></ImageWithTitle>
      <div className="customer__orderDetails__screen">
        <div>
          <h1 className="px-4">
            <span>ORDER</span>{" "}
            <span className="the__order__id">
              #{order && order.orderDetails.order_id}
            </span>{" "}
          </h1>
        </div>
        <Row className="no-gutters px-3 py-4">
          <Col md={8} className="px-2">
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>SHIPPING</h2>

                <p>
                  <strong>Address: </strong>
                  {order.shippingAddress.city},{order.shippingAddress.street}
                </p>
                {order.orderDetails.status === "delivered" ? (
                  <Message variant="success">
                    Delivered on{order.deliveredAt}
                  </Message>
                ) : (
                  <Message variant="danger"> Not Delivered</Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>PAYMENT METHOD</h2>
                <p>
                  <strong>Method: </strong>
                  {order.orderDetails.payment_method}
                </p>
                {order.orderDetails.isPaid === "1" ? (
                  <Message variant="success">Paid on{order.paidAt}</Message>
                ) : (
                  <Message variant="danger"> Not Paid</Message>
                )}
              </ListGroup.Item>
              <ListGroup.Item>
                <h2>ORDER ITEMS</h2>
                {order.orderItems.length === 0 ? (
                  <Message>Your order is empty</Message>
                ) : (
                  <ListGroup variant="flush">
                    {order.orderItems.map((item, index) => (
                      <ListGroup.Item key={index}>
                        <Row>
                          <Col md={1}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              fluid
                              rounded
                            ></Image>
                          </Col>
                          <Col>
                            <Link to={`/productIndividual/${item.product_id}`}>
                              {item.name}
                            </Link>
                          </Col>
                          <Col md={4}>
                            {item.quantity} x Rs. {item.price} = Rs.
                            {item.quantity * item.price}
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                )}
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={4}>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h2>Order Summary</h2>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Items</Col>
                    <Col>Rs.{order.itemsPrice}</Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>Rs. {order.orderDetails.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>

              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.orderDetails.total_price}</Col>
                </Row>
              </ListGroup.Item>
            </Card>
          </Col>
        </Row>
      </div>
      <Footer></Footer>
    </>
  );
};

export default CustomerOrderDetailsScreens;
