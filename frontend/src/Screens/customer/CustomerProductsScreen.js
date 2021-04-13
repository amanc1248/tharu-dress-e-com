import React, { useEffect } from "react";
import "../../styles/customer/CustomerProductsScreen.css";
import FilterOptions from "../../Components/customer/FilterOptions";
import Product from "../../Components/customer/Product";
import CustomerService from "../../Components/customer/CustomerService";
import { useSelector, useDispatch } from "react-redux";
import { listCategoryProducts } from "../../actions/productActions";
function CustomerProductsScreen() {
  const categoryProducts = useSelector((state) => state.categoryProducts);

  const { products } = categoryProducts;
  console.log("====================================");
  console.log(categoryProducts);
  console.log("====================================");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listCategoryProducts());
  }, [dispatch]);
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
        {products.map((product) => (
          <Product key={product.product_id} product={product}></Product>
        ))}
      </div>
      {/*  4th section, view more button*/}
      <div className="view__more__container">
        <button type="button" className="view__more__button">
          VIEW MORE
        </button>
      </div>
      <CustomerService></CustomerService>
    </div>
  );
}

export default CustomerProductsScreen;
