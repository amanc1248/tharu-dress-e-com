import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "./Product.css";
import { Link } from "react-router-dom";
function Product({ addToFavoriteIcon, productName, productPrice }) {
  return (
    <div className="product__container col-lg-3 col-md-4 col-sm-6 col-6  ">
      <Link to="/productIndividual">
        <div className="product">
          <div className="add__to__wishlist text-right">
            <FavoriteBorderIcon></FavoriteBorderIcon>
          </div>
          <img
            className="specific__product__image"
            src="images/The gucci products men/644132_Z8AM8_1054_001_100_0000_Light-Regular-fit-corduroy-pant.jpg"
            alt="product"
          />
          <div className="product__info ">
            <div className="product__name">{productName}</div>
            <div className="product__price">{productPrice}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
