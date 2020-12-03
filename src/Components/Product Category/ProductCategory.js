import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
function ProductCategory({
  product_category_title,
  product_category_description,
}) {
  return (
    <div className="product__category">
      {/* 1st Section Product category information */}
      <div className="product__category__info">
        <div className="product__category__title">
          <h2>{product_category_title}</h2>
        </div>
        <div className="product__category__description">
          <span>{product_category_description}</span>
        </div>
      </div>

      {/* 2nd Section filter bar */}
      <div className="filter__bar">
        <div className="filter__options">
          <div>
            Category
            <ExpandMoreIcon></ExpandMoreIcon>
          </div>
          <div>
            Design
            <ExpandMoreIcon></ExpandMoreIcon>
          </div>
          <div>
            Size
            <ExpandMoreIcon></ExpandMoreIcon>
          </div>
          <div>
            Style
            <ExpandMoreIcon></ExpandMoreIcon>
          </div>
        </div>
      </div>

      {/* 3rd section products section */}
      
    </div>
  );
}

export default ProductCategory;
