import React from "react";
import Footer from "../../Footer/Footer";
import ProductCategory from "../ProductCategory";
function MenProduct() {
  return (
    <div className="men__product">
      {/* <Header headerSticky=""></Header> */}
      <ProductCategory
        product_category_title="Men"
        product_category_description="Dhoti with variety of design and the sexy you."
      ></ProductCategory>
      <Footer></Footer>
    </div>
  );
}

export default MenProduct;
