import React from "react";
import { CustomerCheckoutTabs } from "./CustomerCheckoutTab/CustomerCheckoutTab";
import "./CustomerCheckout.css";
import CCAccountInfo from "./CustomerCheckoutTab/CCAccountInfo";
import CCDeliveryInfo from "./CustomerCheckoutTab/CCDeliveryInfo";
import CCPayment from "./CustomerCheckoutTab/CCPayment";
function CustomerCheckout() {
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

export default CustomerCheckout;
