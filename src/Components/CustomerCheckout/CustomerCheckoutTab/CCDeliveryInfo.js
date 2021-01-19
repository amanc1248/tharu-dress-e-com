import { Checkbox } from "@material-ui/core";
import React from "react";
import { CheckoutCart, CheckOutNextButton } from "./CCAccountInfo";

function CCDeliveryInfo() {
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

export default CCDeliveryInfo;
