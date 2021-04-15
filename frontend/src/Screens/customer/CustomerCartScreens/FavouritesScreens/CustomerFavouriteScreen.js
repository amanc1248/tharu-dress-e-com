import React from "react";
import Product from "../../../../Components/customer/Product";
function CustomerFavoriteScreen() {
  console.log("Favourite screen");
  return (
    <div className="favorite">
      <div className="favorite__products__container row container-container-fluid m-0 p-0">
        This is product
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
