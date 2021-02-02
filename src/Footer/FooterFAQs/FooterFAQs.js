import React from "react";
import "./FooterFAQ.css";
import { FooterFAQsTabs } from "./FooterFAQsTabs";
import {
  ordersAndPaymentData,
  shippingAndDelivery,
  gifts,
  returnsAndExchange,
  myDasaAccount,
} from "../../Data/FooterData/FooterDataFaqs";
function FooterFAQs({ faqsData }) {
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
          <div label="ORDERS & PAYMENTS">
            <FAQContent
              title={"ORDERS & PAYMENTS"}
              thedata={ordersAndPaymentData}
            ></FAQContent>
          </div>
          <div label="SHIPPING & DELIVERY">
            <FAQContent
              title={"SHIPPING & DELIVERY"}
              thedata={shippingAndDelivery}
            ></FAQContent>
          </div>
          <div label="RETURNS & EXCHANGE">
            <FAQContent
              title={"RETURNS & EXCHANGE"}
              thedata={returnsAndExchange}
            ></FAQContent>
          </div>
          <div label="GIFTS">
            <FAQContent title={"GIFTS"} thedata={gifts}></FAQContent>
          </div>
          <div label="MY DASA ACCOUNT">
            <FAQContent
              title={"MY DASA ACCOUNT"}
              thedata={myDasaAccount}
            ></FAQContent>
          </div>
          <div label="CONTACT US"></div>
        </FooterFAQsTabs>
      </div>
    </div>
  );
}

export default FooterFAQs;
function FAQContent({ title, thedata }) {
  const questionsAnswers = thedata.map((obj) => {
    return (
      <div className="question__answer">
        <div className="question__expand">
          <div className="question">{obj.question}</div>
          <div className="question__answer__toogle">+</div>
        </div>
        <div className="answer">{obj.answer}</div>
      </div>
    );
  });
  return (
    <div className="faq__content">
      {/* Title Part👇 */}
      <div className="faq__content__title__expand">
        <div className="faq__content__title">{title}</div>
        <div className="faq__content__toogle">Expand All</div>
      </div>
      {/* Content part 👇 */}
      {questionsAnswers}
    </div>
  );
}
