import React from "react";
import Product from "../../Product/Product";
import ProductCategory from "../ProductCategory";

function MenProduct() {
  return (
    <div className="men__product">
      <ProductCategory
        product_category_title="Men"
        product_category_description="Dhoti with variety of design and the sexy you."
      ></ProductCategory>
      <div className="products__list row">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
    </div>
  );
}

export default MenProduct;
