import React from "react";
import "./Cart.css";
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
      <div className="cart__options__list">
        <p className="cart__option">Overview</p>
        <p className="cart__option">Bags</p>
        <p className="cart__option">Favorites</p>
        <p className="cart__option">Orders</p>
        <p className="cart__option">Account Details</p>
      </div>
    </div>
  );
}

export default Cart;
