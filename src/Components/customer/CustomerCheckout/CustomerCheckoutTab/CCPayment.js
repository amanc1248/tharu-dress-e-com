import React from "react";
import { CheckoutCart } from "./CCAccountInfo";

function CCPayment() {
  return (
    <div className="cc__payment row justify-content-between">
      <div className="payment__method col-lg-6 col-md-6 col-sm-12">
        <h6>SELECT PAYMENT METHOD</h6>
        <div className="particular__payment__method">Credit/Debit Card</div>
        <div className="particular__payment__method">e-sewa mobile wallet</div>
        <div className="particular__payment__method">Cash On Delivery</div>
      </div>
      <div className="checkout__cart col-lg-4 col-md-6 col-sm-12 ">
        <CheckoutCart></CheckoutCart>
      </div>
    </div>
  );
}

export default CCPayment;
