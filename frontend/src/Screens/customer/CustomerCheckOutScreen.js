import { Button, Checkbox } from "@material-ui/core";
import React, { useState } from "react";
import "../../styles/customer/CustomerCheckOutScreen.css";
import Footer from "../../Components/customer/Footer/Footer";
import Header from "../../Components/customer/Header";
import ImageWithTitle from "../../Components/ImageWithTitle";
import {
  savePaymentMethod,
  saveShippingAddress,
} from "../../actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Col } from "react-bootstrap";
import { Row, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Message from "../../Components/Message";
import { createOrder } from "../../actions/orderActions";

function CustomerCheckOutScreen({ history, location }) {
  const [value, setValue] = useState(0);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const changeValue = () => {
    setValue(1);
  };
  const goToPlaceOrder = () => {
    setValue(2);
  };
  const theLabelData = [
    { label: 1, text: "shipping" },
    { label: 2, text: "payment" },
    { label: 3, text: "placeorder" },
  ];

  const ourCheckOutTabs = [
    {
      theTab: <CCShipping value={changeValue}></CCShipping>,
    },
    {
      theTab: <CCPayment history={history} value={goToPlaceOrder}></CCPayment>,
    },
    {
      theTab: <PlaceOrder history={history}></PlaceOrder>,
    },
  ];
  useEffect(() => {
    if (!userInfo) {
      history.push("/signin");
    }
  }, [userLogin, history, userInfo]);
  return (
    <>
      <Header></Header>
      <ImageWithTitle theTitle="CHECKOUT"></ImageWithTitle>
      <div className="customer__checkout">
        <div className="customer__checkout__tabs">
          {theLabelData.map((obj, index) => (
            <div className="the__label" key={index.toString}>
              <div
                className={`the__number__label ${
                  index <= value && "the__active__tab"
                } `}
                onClick={() => {
                  setValue(index);
                }}
              >
                {obj.label}
              </div>
              <div className="the__text__label">{obj.text}</div>
            </div>
          ))}
        </div>
        <div className="checkout-tab-content">
          {ourCheckOutTabs[value].theTab}
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default CustomerCheckOutScreen;

export function CCShipping({ history, value }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  const [city, setCity] = useState(shippingAddress.city);
  const [street, setStreet] = useState(shippingAddress.street);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ city, street }));
    value();
  };
  return (
    <div className="cc__account__info ">
      <div className="cc__account__info__container ">
        <form action="">
          <div className="cc__account__info__inputs">
            <h3 className="checkOut__heading">SHIPPING</h3>
            <label htmlFor="">
              City
              <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              ></input>
            </label>
            <label htmlFor="">
              Street
              <input
                type="text"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              ></input>
            </label>
          </div>
          <div className="checkout__next__button__container ">
            <button className="checkout__next__button" onClick={submitHandler}>
              CONTINUE
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export function CheckOutNextButton() {
  return (
    <div className="checkout__next__button__container ">
      <button className="checkout__next__button">CONTINUE</button>
    </div>
  );
}

export function CCPayment({ history, value }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;
  if (!shippingAddress) {
    history.push("/checkout");
  }
  const [paymentMethod, setPaymentMethod] = useState("PayPal");

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    value();
  };

  return (
    <div className="cc__payment">
      <div className="payment__method ">
        <h3 className="checkOut__heading"> PAYMENT METHOD</h3>
        <div className="the__payment_form">
          <div>
            <input
              className="paypal__input"
              type="radio"
              text="Paypal or credit card"
              id="PayPal"
              name="paymentMethod"
              value="PayPal"
              checked
              onChange={(e) => setPaymentMethod(e.target.value)}
            ></input>
            <label for="payment method">Paypal or credit card</label>
          </div>

          <div className="checkout__next__button__container ">
            <button className="checkout__next__button" onClick={submitHandler}>
              CONTINUE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PlaceOrder({ history }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  //   Calculate Prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  cart.itemsPrice = addDecimals(
    cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  cart.shippingPrice = addDecimals(cart.itemsPrice > 100 ? 0 : 100);
  cart.taxPrice = addDecimals(Number((0.15 * cart.itemsPrice).toFixed(2)));
  cart.totalPrice = (
    Number(cart.itemsPrice) +
    Number(cart.shippingPrice) +
    Number(cart.taxPrice)
  ).toFixed(2);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;
  useEffect(() => {
    if (success) {
      history.push(`order/${order.orderId}`);
    }
    // eslint-disable-next-line
  }, [success, order]);
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cart.cartItems,
        shippingAddress: cart.shippingAddress,
        paymentMethod: cart.paymentMethod,
        // itemsPrice: cart.itemsPrice,
        totalPrice: cart.totalPrice,
        shippingPrice: cart.shippingPrice,
        customerId: userInfo.customerId,
      })
    );
  };
  return (
    <>
      <Row className="no-gutters  text-left">
        <Col md={8} className="px-2">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3 className="placeOrder__heading">SHIPPING</h3>

              <p>
                <strong>Address: </strong>
                {cart.shippingAddress.city},{cart.shippingAddress.street},
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h3 className="placeOrder__heading">PAYMENT METHOD</h3>
              <strong>Method: </strong>
              {cart.paymentMethod}
            </ListGroup.Item>
            <ListGroup.Item>
              <h3 className="placeOrder__heading">ORDER ITEMS</h3>
              {cart.cartItems.length === 0 ? (
                <Message>Your Cart is empty</Message>
              ) : (
                <ListGroup variant="flush">
                  {cart.cartItems.map((item, index) => (
                    <ListGroup.Item key={index}>
                      <Row>
                        <Col md={3} sm={3} xs={5}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          ></Image>
                        </Col>
                        <Col sm={5}>
                          <Link to={`/productIndividual/${item.productId}`}>
                            {item.name}
                          </Link>
                        </Col>
                        <Col md={4}>
                          {item.qty} x Rs.{item.price} = Rs.
                          {item.qty * item.price}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4} className="px-2">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h3 className="placeOrder__heading">ORDER SUMMARY</h3>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>Rs.{cart.itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>Rs.{cart.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>Rs.{cart.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>Rs.{cart.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {/* <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item> */}
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block the__placeorder__button"
                  disabled={cart.cartItems === 0}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
}
