import React from "react";
import { Row, Col, ListGroup, Image, Card } from "react-bootstrap";

const OrderDetails = ({ match, history }) => {
  return (
    <div className="text-left">
      <div>
        <h1 className="px-4">
          <span>Order</span> <span className="the__order__id"></span>{" "}
        </h1>
      </div>
      <Row className="no-gutters px-3 py-4">
        <Col md={8} className="px-2">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Name: </strong>
                {"order.user.name"}
              </p>
              <p>
                <strong>Email:</strong>
                <a href={`mailto:${"amanc1248@gmai.com"}`}>
                  {"order.user.email"}
                </a>
              </p>
              <p>
                <strong>Address: </strong>
                {"order.shippingAddress.address"},{"order.shippingAddress.city"}
                ,{"order.shippingAddress.postalCode"},
                {"order.shippingAddress.country"},
              </p>
              {/* {order.isDelivered ? (
                <Message variant="success">
                  Delivered on{order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger"> Not Delivered</Message>
              )} */}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {"order.paymentMethod"}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>

              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col md={1}>
                      <Image
                        // src={item.image}
                        // alt={item.name}
                        fluid
                        rounded
                      ></Image>
                    </Col>
                    <Col>
                      {/* <Link to={`/product/${item.product}`}>{item.name}</Link> */}
                    </Col>
                    <Col md={4}>
                      {/* {item.qty} x ${item.price} = ${item.qty * item.price} */}
                    </Col>
                  </Row>
                </ListGroup.Item>
              </ListGroup>
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
                  {/* <Col>${order.itemsPrice}</Col> */}
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  {/* <Col>${order.shippingPrice}</Col> */}
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  {/* <Col>${order.taxPrice}</Col> */}
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  {/* <Col>${order.totalPrice}</Col> */}
                </Row>
              </ListGroup.Item>

              {/* {!order.isPaid && (
                <ListGroup.Item>
                  {loadingPay && <Loader></Loader>}
                  {!sdkReady ? (
                    <Loader></Loader>
                  ) : (
                    <PayPalButton
                      amount={order.totalPrice}
                      onSuccess={successPaymentHandler}
                    ></PayPalButton>
                  )}
                </ListGroup.Item>
              )} */}
              {/* {loadingDeliver && <Loader></Loader>}
              {userInfo &&
                userInfo.isAdmin &&
                order.isPaid &&
                !order.isDeliverd && (
                  <ListGroup.Item>
                    <Button
                      type="button"
                      className="btn btn-block"
                      onClick={deliverHandler}
                    >
                      Mark As Delivered
                    </Button>
                  </ListGroup.Item>
                )} */}
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default OrderDetails;
