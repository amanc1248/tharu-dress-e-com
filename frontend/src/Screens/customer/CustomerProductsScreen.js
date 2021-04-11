import React from "react";
import "../../styles/customer/CustomerProductsScreen.css";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import FilterOptions from "../../Components/customer/FilterOptions";
import Product from "../../Components/customer/Product";

function CustomerProductsScreen() {
  return (
    <div className="product__category">
      {/* 1st Section Product category information */}
      <div className="product__category__info">
        <div className="product__category__title">
          <h2>Men</h2>
        </div>
        <div className="product__category__description">
          <span>Dhoti with variety of design and the sexy you.</span>
        </div>
      </div>

      {/* 2nd Section filter bar */}
      <div className="filter__bar__container">
        <div className="filter__bar">
          <div className="filter__options">
            <FilterOptions ourOptions="Color"></FilterOptions>
            <FilterOptions ourOptions="Design"></FilterOptions>
            <FilterOptions ourOptions="Size"></FilterOptions>
            <FilterOptions ourOptions="Style"></FilterOptions>
          </div>
        </div>
      </div>

      {/* 3rd section products section */}
      <div className="products__list row no-gutters h-100">
        <Product productName="Yellow " productPrice="$120.00"></Product>
        <Product productName="Yellow Boutique" productPrice="$110.00"></Product>
        <Product
          productName="Anchara With Red Boutique"
          productPrice="$120.00"
        ></Product>
        <Product
          productName="Anchara With Red Boutique"
          productPrice="$120.00"
        ></Product>
        <Product
          productName="Anchara With Red Boutique"
          productPrice="$120.00"
        ></Product>
        <Product
          productName="Anchara With Red Boutique"
          productPrice="$120.00"
        ></Product>
        <Product
          productName="Anchara With Red Boutique"
          productPrice="$120.00"
        ></Product>
        <Product
          productName="Anchara With Red Boutique"
          productPrice="$120.00"
        ></Product>
      </div>
      {/*  4th section, view more button*/}
      <div className="view__more__container">
        <button type="button" className="view__more__button">
          VIEW MORE
        </button>
      </div>

      {/* 5th section, customer service */}
      <div className="customer__service__container row no-gutters">
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

export default CustomerProductsScreen;
