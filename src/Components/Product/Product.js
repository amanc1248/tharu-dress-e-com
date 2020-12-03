import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Product.css";
function Product() {
  return (
    <div className="product col-lg-3 col-md-4 col-sm-6 col-6  ">
      <div className="add__to__wishlist text-right">
        <FavoriteBorderIcon></FavoriteBorderIcon>
      </div>
      {/* <div className="product__image"> */}
      <img
        className="specific__product__image"
        src="images/The gucci products men/644132_Z8AM8_1054_001_100_0000_Light-Regular-fit-corduroy-pant.jpg"
        alt="product"
      />
      {/* </div> */}
      <div className="product__info">
        <div className="product__name">Anchara With Red Boutique</div>
        <div className="product__price">$150.00</div>
      </div>
    </div>
  );
}

export default Product;
