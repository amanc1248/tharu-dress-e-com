import React from "react";
import Footer from "../../../Footer/Footer";
import Header from "../../../Header/Header";
import ProductCategory from "../ProductCategory";

function WomenProduct() {
  return (
    <div className="women__product">
      {/* <Header headerSticky=""></Header> */}
      <ProductCategory
        product_category_title="Women"
        product_category_description="Anchara in white cloth, beautiful boutique and
        you the gorgeous."
      ></ProductCategory>
      <Footer></Footer>
    </div>
  );
}

export default WomenProduct;
