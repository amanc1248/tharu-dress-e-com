import React from "react";
import AccountDetails from "./Account Details/AccountDetails";
import Bag from "./Bag/Bag";
import "./Cart.css";
import Favorite from "./Favorites/Favorite";
import OrdersTabs from "./Orders/OrdersTabs";
import Tabs from "./Tabs/Tabs";
function Cart() {
  return (
    <div className="cart">
      <img
        className="authentication__logo  w-100"
        src="images/croped.jpg"
        alt="authentication background"
      />
      <div className="welcome__user">
        <h4>WELCOME, AMAN</h4>
      </div>
      <p>
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
          <OrdersTabs>
            <div label="All">
              <Bag></Bag>
            </div>
            <div label="To Pay">
              <Bag></Bag>
            </div>
            <div label="To Receive">
              <Bag></Bag>
            </div>
          </OrdersTabs>
        </div>
        <div label="Account Details">
          <AccountDetails></AccountDetails>
        </div>
      </Tabs>
    </div>
  );
}

export default Cart;
