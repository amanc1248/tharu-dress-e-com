import { Checkbox } from "@material-ui/core";
import React from "react";
import "../../styles/customer/CustomerCheckOutScreen.css";
import { CustomerCheckoutTabs } from "../../Components/CustomerCheckoutTab/CustomerCheckoutTab";

function CustomerCheckOutScreen() {
  let checkOutFirstLabel = (
    <div className="the__label">
      <div className="the__number__label">1</div>
      <div className="the__text__label">Account Info</div>
    </div>
  );
  let checkOutSecondLabel = (
    <div className="the__label">
      <div className="the__number__label">2</div>
      <div className="the__text__label">Delivery Info</div>
    </div>
  );
  let checkOutThirdLabel = (
    <div className="the__label">
      <div className="the__number__label">3</div>
      <div className="the__text__label">Payment</div>
    </div>
  );
  return (
    <div className="customer__checkout">
      <CustomerCheckoutTabs>
        <div label={checkOutFirstLabel}>
          <CCAccountInfo></CCAccountInfo>
        </div>
        <div label={checkOutSecondLabel}>
          <CCDeliveryInfo></CCDeliveryInfo>
        </div>
        <div label={checkOutThirdLabel}>
          <CCPayment></CCPayment>
        </div>
      </CustomerCheckoutTabs>
    </div>
  );
}

export default CustomerCheckOutScreen;

export function CCAccountInfo() {
  return (
    <div className="cc__account__info row justify-content-between">
      <div className="cc__account__info__container  col-lg-6 col-md-6 col-sm-12">
        <form action="">
          <div className="cc__account__info__inputs">
            <label htmlFor="">
              First Name
              <input type="text"></input>
            </label>
            <label htmlFor="">
              Last Name
              <input type="text" />
            </label>
            <label htmlFor="">
              Email
              <input type="email" />
            </label>
          </div>
          <CheckOutNextButton></CheckOutNextButton>
        </form>
      </div>

      <div className="checkout__cart col-lg-4 col-md-6 col-sm-12 ">
        {" "}
        <CheckoutCart></CheckoutCart>
      </div>
    </div>
  );
}

export function CheckOutNextButton() {
  return (
    <div className="checkout__next__button__container ">
      <button className="checkout__next__button">NEXT</button>
    </div>
  );
}
export function CheckoutCart() {
  let checkOutItem = (
    <div className="checkout__item">
      <div className="checkout__item__title__desc">
        <div className="checkout__item__title">Anchara With Red Boutique</div>
        <div className="checkout__item__desc">Brief description</div>
      </div>
      <div className="checkout__item__price">Rs. 13000</div>
    </div>
  );
  return (
    <div>
      <strong>YOUR CART</strong>
      <div className="checkout__cart__container">
        {checkOutItem}
        {checkOutItem}
        {checkOutItem}
        {checkOutItem}
        {checkOutItem}
      </div>
    </div>
  );
}

export function CCPayment() {
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

export function CCDeliveryInfo() {
  return (
    <div className="cc__delivery__info row justify-content-between">
      <div className="cc__delivery__info__container col-lg-6 col-md-6 col-sm-12">
        <div className="cc__delivery__info__shippingAd">
          <form action="">
            <div className="cc__delivery__info__shipping__inputs">
              <h6>SHIPPING ADDRESS</h6>

              <label htmlFor="">
                First Name
                <input type="text" />
              </label>
              <label htmlFor="">
                Last Name
                <input type="text" />
              </label>
              <label htmlFor="">
                Location
                <input type="text" />
              </label>
              <label htmlFor="">
                Phone
                <input type="tel" />
              </label>
            </div>
            <div className="billing__shipping__same">
              <Checkbox></Checkbox>
              <small>Billing address same as shipping address.</small>
            </div>
          </form>
        </div>

        {/* For billing address👇 */}
        <div className="cc__delivery__info__billingAd">
          <form action="">
            <div className="cc__delivery__info__billing__inputs">
              <h6>BILLING ADDRESS</h6>
              <label htmlFor="">
                First Name
                <input type="text" />
              </label>
              <label htmlFor="">
                Last Name
                <input type="text" />
              </label>
              <label htmlFor="">
                Location
                <input type="text" />
              </label>
              <label htmlFor="">
                Phone
                <input type="tel" />
              </label>
            </div>
          </form>
        </div>

        <CheckOutNextButton></CheckOutNextButton>
      </div>
      <div className="checkout__cart col-lg-4 col-md-6 col-sm-12 ">
        {" "}
        <CheckoutCart></CheckoutCart>
      </div>
    </div>
  );
}
