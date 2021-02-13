import React from "react";
import { Link } from "react-router-dom";
import ShoppingBagProduct from "./ShoppingBagProduct";

function Bag({bagTitle}) {
  return (
    <div className="bag">
      <div className="bag__title">
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
      </div>
    </div>
  );
}

export default Bag;
