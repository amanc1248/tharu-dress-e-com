import React from "react";
import { Link } from "react-router-dom";
import "./Bag.css";
function ShoppingBagProduct() {
  return (
    <div className="shopping__bag__product">
      {/* Div for the product details 👇 */}{" "}
      <Link
        to="/productIndividual"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <div className="product__details row no-gutters">
          <div className=" the__image__container col-lg-2 col-5 pl-2 pr-2">
            <img
              src="images/The gucci products men/639398_ZAF7Y_2066_001_100_0000_Light-Cotton-pant-with-Interlocking-G-patch.jpg"
              alt="authentication background"
              className="product__image"
            />
          </div>
          <div className="product__info__bag col-lg-8 col-7">
            <span>
              {" "}
              <strong>White Anchara with red boutique</strong>{" "}
            </span>
            <span>Item 12439thjvlxgl</span>
            <span>Full boutique</span>
            <span>Size 3 m</span>
            <span>Quantity 1</span>
          </div>
          {/* align items works only inside row */}
          <div className=" product__price__container col-lg-2   align-self-end">
            <div className="row justify-content-end container-fluid ">
              <div className="col-2">
                <strong>$100.00</strong>{" "}
              </div>
            </div>
          </div>
        </div>
      </Link>
      {/* Div for the product handling 👇*/}
      <div className="row product__handling no-gutters justify-content-between container-fluid">
        <div className="col-lg-2 col-md-5 col-6 product__save__remove justify-content-between">
          <div className="save__for__later ">
            {" "}
            <u>Save For Later</u>{" "}
          </div>
          <div className="remove ">
            <u>Remove</u>
          </div>
        </div>
        <div className="edit col-1">
          <u>Edit</u>
        </div>
      </div>
    </div>
  );
}

export default ShoppingBagProduct;
