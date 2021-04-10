import React, { useState } from "react";
import { Link } from "react-router-dom";
import CartItems from "./ShoppingCart/CartItems";
import CartItem from "./ShoppingCart/CartItem";
import CartTotal from "./ShoppingCart/CartTotal";
import "./ShoppingCart/CartItems.css";
import "./ShoppingCart/CartItem.css";
import data from "./Data";
function Bag({ bagTitle }) {
  const [cartItems, setCartItems] = useState(data);

  return (
    <div className="bag">
      <div className="App_main row no-gutters">
        <div className="col-lg-8 col-12">
          <CartItems items={cartItems} setCartItems={setCartItems}></CartItems>
        </div>

        <div className="col-lg-4 col-12">
          <CartTotal items={cartItems}></CartTotal>
        </div>
      </div>

      {/* <div className="bag__title">
        <h5>{bagTitle}</h5>
      </div>
      <div className="product__section">
        <ShoppingBagProduct></ShoppingBagProduct>
        <ShoppingBagProduct></ShoppingBagProduct>
        <ShoppingBagProduct></ShoppingBagProduct>
        <ShoppingBagProduct></ShoppingBagProduct>
        <ShoppingBagProduct></ShoppingBagProduct>
      </div>
      <div className="order__summary__container">
        <div className="order__summary__title text-left">
          <h5>ORDER SUMMARY</h5>
        </div>
        <div className="row sub__total">
          <div className="col-6 text-left">Sub-total</div>
          <div className="col-6 text-right">$100.00</div>
        </div>
        <div className="row shipping__fee">
          <div className="col-6 text-left">Shipping-Fee</div>
          <div className="col-6 text-right">$100.00</div>
        </div>
        <div className="row estimated__total">
          <div className="col-6 text-left">Estimated Total</div>
          <div className="col-6 text-right">$100.00</div>
        </div>
        <div className="text-right">
          <Link to="/checkOut">
            <button className="checkout__button ">CHECK OUT</button>
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Bag;
