import React from "react";
import { useSelector } from "react-redux";
import AccountDetails from "./Account Details/AccountDetails";
import Bag from "./Bag/Bag";
import "./Cart.css";
import Favorite from "./Favorites/Favorite";
import Orders, { ParticularOrderDetail } from "./Orders/Orders";
import OrdersTabs from "./Orders/OrdersTabs";
import Tabs from "./Tabs/Tabs";
function Cart() {
  const seeOrderDetails = useSelector((state) => state.seeOrderDetails);
  return (
    <div className="cart">
      <img
        className="authentication__logo  w-100"
        src="images/croped.jpg"
        alt="authentication background"
      />
      <div className="welcome__user">
        <h5>WELCOME, AMAN</h5>
      </div>
      <p className="contact__us__instruction">
        If you have any queries or need further assistance, please Contact Us
      </p>
      <Tabs>
        <div label="Bag">
          <Bag bagTitle="SHOPPING BAG"></Bag>
        </div>
        <div label="Favorites">
          <Favorite></Favorite>
        </div>
        <div label="Orders">
          {seeOrderDetails === false ? (
            <OrdersTabs>
              <div label="All">
                <Orders></Orders>
              </div>
              <div label="To Pay">
                <Orders></Orders>
              </div>
              <div label="To Receive">
                <Orders></Orders>
              </div>
            </OrdersTabs>
          ) : (
            <ParticularOrderDetail></ParticularOrderDetail>
          )}
        </div>
        <div label="Account Details">
          <AccountDetails></AccountDetails>
        </div>
      </Tabs>
    </div>
  );
}

export default Cart;
