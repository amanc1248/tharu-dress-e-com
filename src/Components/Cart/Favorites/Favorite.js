import React from "react";
import Product from "../../Product/Product";
import "./Favorite.css";
function Favorite() {
  return (
    <div className="favorite">
      <div className="favorite__products__container">
        <Product
          productName="Anchara With Red Boutique"
          productPrice="$120.00"
        ></Product>
        <Product productName="Yellow Boutique" productPrice="$110.00"></Product>
        <Product
          productName="Anchara With Red Boutique"
          productPrice="$120.00"
        ></Product>
        <Product
          productName="Anchara With Red Boutique"
          productPrice="$120.00"
        ></Product>
      </div>
      <div className="view__more__container">
        <button type="button" className="view__more__button">
          VIEW MORE
        </button>
      </div>
    </div>
  );
}

export default Favorite;
