import React from "react";
import "./FooterFAQ.css";
import { FooterFAQsTabs } from "./FooterFAQsTabs";
function FooterFAQs() {
  return (
    <div className="footer__faqs">
      {/* <img
        className="authentication__logo  w-100"
        src="images/croped.jpg"
        alt="authentication background"
      /> */}
      <div
        className="theBackgroundImage"
        style={{
          backgroundImage: `url("images/croped.jpg")`,
        }}
      >
        <div className="faq__title">FREQUENTLY ASKED QUESTIONS</div>
      </div>
      <div>
        <FooterFAQsTabs>
          <div label="ORDERS & PAYMENTS"></div>
          <div label="SHIPPING & DELIVERY"></div>
          <div label="RETURNS & EXCHANGE"></div>
          <div label="GIFTS"></div>
          <div label="MY DASA ACCOUNT"></div>
          <div label="CONTACT US"></div>
        </FooterFAQsTabs>
      </div>
    </div>
  );
}

export default FooterFAQs;
