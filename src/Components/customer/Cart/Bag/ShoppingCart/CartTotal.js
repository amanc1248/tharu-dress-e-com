import React from "react";
import "./CartTotal.css";
import { Link } from "react-router-dom";

function CartTotal({ items }) {
  // Calculating the total price 👇👇
  const getTotalPrice = () => {
    // Here while calculating the total price why Naz has not converted the price which is in string into the integer
    var theTotalPrice = 0;
    items.map((item) => {
      return (theTotalPrice += item.price * item.quantity);
    });
    return theTotalPrice;
  };

  // For total cart Items
  const getTotalCartItems = () => {
    let totalCartItems = 0;
    items.forEach((item) => {
      return (totalCartItems += parseInt(item.quantity));
    });

    return totalCartItems;
  };
  return (
    <div className="cartTotal">
      <h3>
        Subtotal({getTotalCartItems()} items)
        <span className="cart-total-price">${getTotalPrice().toFixed(2)}</span>
      </h3>
      <Link to="/checkout">
        <button>PROCEED TO CHECKOUT</button>
      </Link>
    </div>
  );
}

export default CartTotal;
