import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Product from "../Product/Product";
import "./ProductCategory.css";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
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
      <div className="filter__bar__container">
        <div className="filter__bar">
          <div className="filter__option">
            Category
            <ExpandMoreIcon className="expandmore__icon"></ExpandMoreIcon>
          </div>
          <div className="filter__option">
            Design
            <ExpandMoreIcon className="expandmore__icon"></ExpandMoreIcon>
          </div>
          <div className="filter__option">
            Size
            <ExpandMoreIcon className="expandmore__icon"></ExpandMoreIcon>
          </div>
          <div className="filter__option">
            Style
            <ExpandMoreIcon className="expandmore__icon"></ExpandMoreIcon>
          </div>
        </div>
      </div>

      {/* 3rd section products section */}
      <div className="products__list row">
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
        <Product></Product>
      </div>
      {/*  4th section, view more button*/}
      <div className="view__more__container">
        <button type="button" className="view__more__button">
          VIEW MORE
        </button>
      </div>

      {/* 5th section, customer service */}
      <div className="customer__service__container row">
        <div className="customer__service  col-lg-4 col-md-4 col-sm-4 col-sm-12   ">
          <LocalShippingIcon className="customer__service__icon"></LocalShippingIcon>
          <p className="customer__service__description">
            Shipping And Exchange
          </p>
        </div>
        <div className="customer__service col-lg-4 col-md-4 col-sm-4 col-sm-12   ">
          <CheckBoxIcon className="customer__service__icon"></CheckBoxIcon>
          <p className="customer__service__description">Free Packaging</p>
        </div>
        <div className="customer__service col-lg-4 col-md-4 col-sm-4 col-sm-12   ">
          <InsertEmoticonIcon className="customer__service__icon"></InsertEmoticonIcon>
          <p className="customer__service__description">Get your avatar</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCategory;
