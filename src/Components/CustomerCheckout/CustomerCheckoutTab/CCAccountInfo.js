import React from "react";

function CCAccountInfo() {
  return (
    <div className="cc__account__info row">
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
      <div className="checkout__cart col-lg-4 col-md-6 col-sm-12">
        <strong>YOUR CART</strong>
        <div className="checkout__cart__container">
          <CheckoutCartItem></CheckoutCartItem>
          <CheckoutCartItem></CheckoutCartItem>
          <CheckoutCartItem></CheckoutCartItem>
          <CheckoutCartItem></CheckoutCartItem>
        </div>
      </div>
    </div>
  );
}

export default CCAccountInfo;
export function CheckOutNextButton() {
  return (
    <div className="checkout__next__button__container ">
      <button className="checkout__next__button">NEXT</button>
    </div>
  );
}
export function CheckoutCartItem() {
  let checkOutItem = (
    <div className="checkout__item">
      <div className="checkout__item__title__desc">
        <div className="checkout__item__title">Anchara With Red Boutique</div>
        <div className="checkout__item__desc">Brief description</div>
      </div>
      <div className="checkout__item__price">Rs. 13000</div>
    </div>
  );
  return <div> {checkOutItem}</div>;
}
