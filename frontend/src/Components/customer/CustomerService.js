import React from "react";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
const CustomerService = () => {
  return (
    <div>
      {/* 5th section, customer service */}
      <div className="customer__service__container row no-gutters">
        <div className="customer__service  col-lg-4 col-md-4 col-sm-4 col-sm-12   ">
          <LocalShippingIcon className="customer__service__icon"></LocalShippingIcon>
          <p className="customer__service__description">
            Shipping And Exchange
          </p>
        </div>
        <div className="customer__service col-lg-4 col-md-4 col-sm-4 col-sm-12   ">
          <CheckBoxIcon className="customer__service__icon"></CheckBoxIcon>
          <p className="customer__service__description">Free Packaging</p>
        </div>
        <div className="customer__service col-lg-4 col-md-4 col-sm-4 col-sm-12   ">
          <InsertEmoticonIcon className="customer__service__icon"></InsertEmoticonIcon>
          <p className="customer__service__description">Get your avatar</p>
        </div>
      </div>
    </div>
  );
};

export default CustomerService;
