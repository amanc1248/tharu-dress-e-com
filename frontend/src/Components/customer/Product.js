import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import "../../styles/components/Product.css";
import { Link } from "react-router-dom";
function Product({ addToFavoriteIcon, product }) {
  return (
    <div className="product__container col-lg-3 col-md-4 col-sm-6 col-6  ">
      <Link
        to={`/productIndividual/${product.product_id}`}
        style={{ textDecoration: "none", color: "none" }}
      >
        <div className="product">
          <div className="add__to__wishlist text-right">
            <FavoriteBorderIcon className="favorite__border__icon"></FavoriteBorderIcon>
          </div>
          <img
            className="specific__product__image"
            src={product.image}
            alt="product"
          />
          <div className="product__info ">
            <div className="product__name">{product.name}</div>
            <div className="product__price">Rs. {product.price}</div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
