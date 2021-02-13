import React from "react";
import ProductCategory from "../ProductCategory";
import Footer from "../../Footer/Footer";
function KidsProduct() {
  return (
    <div className="kid__product">
      {/* <Header headerSticky=""></Header> */}
      <ProductCategory
        product_category_title="Kids Wear"
        product_category_description="Cultural attire in your kid."
      ></ProductCategory>
      <Footer></Footer>
    </div>
  );
}

export default KidsProduct;
