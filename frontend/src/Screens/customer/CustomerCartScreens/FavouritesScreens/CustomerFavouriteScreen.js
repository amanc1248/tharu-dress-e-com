import React from "react";
import Product from "../../../../Components/customer/Product";
function CustomerFavoriteScreen() {
  return (
    <div className="favorite">
      <div className="favorite__products__container row container-container-fluid m-0 p-0">
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

export default CustomerFavoriteScreen;
