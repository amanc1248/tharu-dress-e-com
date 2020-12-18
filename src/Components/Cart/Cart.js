import React from "react";
import AccountDetails from "./Account Details/AccountDetails";
import Bag from "./Bag/Bag";
import ShoppingBagProduct from "./Bag/ShoppingBagProduct";
import "./Cart.css";
import Favorite from "./Favorites/Favorite";
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
          <Bag></Bag>
        </div>
        <div label="Favorites">
          <Favorite></Favorite>
        </div>
        <div label="Orders">
          <h1>THis is the orders page</h1>
        </div>
        <div label="Account Details">
          <AccountDetails></AccountDetails>
        </div>
      </Tabs>
    </div>
  );
}

export default Cart;
