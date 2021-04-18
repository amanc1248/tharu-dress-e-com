import { Checkbox } from "@material-ui/core";
import React from "react";
import "../../styles/customer/CustomerCheckOutScreen.css";
import { CustomerCheckoutTabs } from "../../Components/CustomerCheckoutTab/CustomerCheckoutTab";

function CustomerCheckOutScreen() {
  let checkOutFirstLabel = (
    <div className="the__label">
      <div className="the__number__label">1</div>
      <div className="the__text__label">Shipping</div>
    </div>
  );
  let checkOutSecondLabel = (
    <div className="the__label">
      <div className="the__number__label">2</div>
      <div className="the__text__label">Payment</div>
    </div>
  );
  let checkOutThirdLabel = (
    <div className="the__label">
      <div className="the__number__label">3</div>
      <div className="the__text__label">Place Order</div>
    </div>
  );
  return (
    <div className="customer__checkout">
      <CustomerCheckoutTabs>
        <div label={checkOutFirstLabel}>
          <CCShipping></CCShipping>
        </div>
        <div label={checkOutSecondLabel}>
          <CCPayment></CCPayment>
        </div>
        <div label={checkOutThirdLabel}></div>
      </CustomerCheckoutTabs>
    </div>
  );
}

export default CustomerCheckOutScreen;

export function CCShipping() {
  return (
    <div className="cc__account__info ">
      <div className="cc__account__info__container ">
        <form action="">
          <div className="cc__account__info__inputs">
            <h3 className="checkOut__heading">SHIPPING</h3>
            <label htmlFor="">
              City
              <input type="text"></input>
            </label>
            <label htmlFor="">
              Street
              <input type="text" />
            </label>
          </div>
          <CheckOutNextButton></CheckOutNextButton>
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

export function CCPayment() {
  return (
    <div className="cc__payment">
      <div className="payment__method ">
        <h3 className="checkOut__heading"> PAYMENT METHOD</h3>
        <div className="particular__payment__method">Credit/Debit Card</div>
        <div className="particular__payment__method">e-sewa mobile wallet</div>
        <div className="particular__payment__method">Cash On Delivery</div>
      </div>
    </div>
  );
}
