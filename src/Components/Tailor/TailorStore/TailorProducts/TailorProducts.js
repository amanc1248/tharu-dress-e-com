import React, { useEffect, useRef, useState } from "react";
import "./TailorProducts.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
import { SeeMoreToogle } from "../TailorOrder/TailorOrder";

function TailorProducts() {
  const tableRow = (
    <tr>
      <td>
        {" "}
        <Checkbox></Checkbox>{" "}
      </td>
      <th scope="row" className="">
        <div className="table__product__container">
          <div className="table__product__image__container">
            <img
              src="productImage.png"
              alt="product"
              className="table__product__image"
            />
          </div>
          <div className="table__product__name">Kids Anchara</div>
        </div>
      </th>
      <td className="table__price">
        {" "}
        <span className="table__rs__title">Rs.</span> 12,000
      </td>{" "}
      <td>Men</td>
      <td>{seeMoreFunction()}</td>
    </tr>
  );
  const [addProduct, setAddProduct] = useState(false);
  const addProductClick = () => {
    setAddProduct(!addProduct);
  };
  return (
    <div className="tailor__products">
      {addProduct ? (
        <AddProduct clickOutside={addProductClick}></AddProduct>
      ) : null}
      <div className="tailor__products__heading">
        <h5 className="tailor__tabs__title">PRODUCTS</h5>
      </div>
      <div className="tailor__add__products">
        <button
          className="tailor__add__products__button"
          onClick={addProductClick}
        >
          + ADD PRODUCT
        </button>
      </div>

      <div className="tailor__products__container">
        <table className="table " id="tailor__products__table">
          <thead>
            <tr>
              <th scope="col" className="table__header"></th>
              <th scope="col" className="table__header">
                Name
              </th>
              <th scope="col" className="table__header">
                Price
              </th>
              <th scope="col" className="table__header">
                Category
              </th>
              <th scope="col" className="table__header">
                See More
              </th>
            </tr>
          </thead>
          <tbody>
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
            {tableRow}
          </tbody>
        </table>
      </div>
    </div>
  );
}
let seeMoreOptionsListProducts = [
  { icon: <EditIcon></EditIcon>, iconText: "Edit Product" },
  { icon: <VisibilityIcon></VisibilityIcon>, iconText: "View Product" },
  {
    icon: <FeaturedPlayListIcon></FeaturedPlayListIcon>,
    iconText: "Product Orders",
  },
  { icon: <DeleteIcon></DeleteIcon>, iconText: "Remove Product" },
];
const seeMoreFunction = () => {
  return <SeeMoreToogle theList={seeMoreOptionsListProducts}></SeeMoreToogle>;
};

export function AddProduct({ clickOutside }) {
  const myRef = useRef();

  const whenOutsideModal = (e) => {
    if (!myRef.current.contains(e.target)) {
      clickOutside();
    }
  };

  let newProductLengthOptions = ["3.5", "4", "4.5", "5", "5.5"];
  let newProductWidthOptions = ["3.5", "4", "4.5", "5", "5.5"];
  let newProductLengthOption = newProductLengthOptions.map((obj) => {
    return (
      <NewProductLength
        key={obj.toString()}
        checkBoxText={obj}
      ></NewProductLength>
    );
  });
  let newProductWidthOption = newProductWidthOptions.map((obj) => {
    return (
      <NewProductLength
        key={obj.toString()}
        checkBoxText={obj}
      ></NewProductLength>
    );
  });
  function NewProductLength({ checkBoxText }) {
    return (
      <div className="new__product__length">
        <Checkbox></Checkbox>
        <small>{checkBoxText}</small>
      </div>
    );
  }
  return (
    <div className="add__product" onClick={whenOutsideModal}>
      <form action="" id="add__product__inputs">
        <div className="add__product__container" ref={myRef}>
          <div className="new__product__title">
            <div className="the__title">New Product</div>
            <p>Add information of the new product</p>
          </div>
          <div className="new__product__row">
            <div className="new__product__container">
              <label htmlFor="">
                Product Title
                <input type="text" className="new__product__inputBox" />
              </label>
            </div>
          </div>
          <div className="new__product__row">
            <div className="new__product__container">
              <label htmlFor="">
                Regular Price
                <input type="number" className="new__product__inputBox" />
              </label>
            </div>
            <div className="new__product__container">
              <label htmlFor="">
                Sale Price
                <input type="number" className="new__product__inputBox" />
              </label>
            </div>
          </div>
          <div className="new__product__row">
            <div className="new__product__container">
              <label htmlFor="">
                Stock
                <input type="number" className="new__product__inputBox" />
              </label>
            </div>
            <div className="new__product__container">
              <label htmlFor="">
                SKU
                <input type="number" className="new__product__inputBox" />
              </label>
            </div>
          </div>
          <div className="new__product__row">
            <div className="new__product__container">
              <label htmlFor="">
                Category
                <select name="" id="" className="new__product__inputBox">
                  <option value="Men">Men</option>
                  <option value="Women">Women</option>
                  <option value="Kids">Kids</option>
                </select>
              </label>
            </div>
            <div className="new__product__container">
              <label htmlFor="">
                Color
                <select name="" id="" className="new__product__inputBox">
                  <option value="Men">Green</option>
                  <option value="Women">White</option>
                  <option value="Kids">Yellow</option>
                </select>
              </label>
            </div>
          </div>
          <div className="new__product__row">
            <div className="new__product__container">
              <label htmlFor="">
                Style
                <select name="" id="" className="new__product__inputBox">
                  <option value="Flowers">Flowers</option>
                  <option value="Full Boutique">Full Boutique</option>
                  <option value="Plain">Plain</option>
                </select>
              </label>
            </div>
            <div className="new__product__container">
              <label htmlFor="">
                Design
                <select name="" id="" className="new__product__inputBox">
                  <option value="Flowers">Flowers</option>
                  <option value="Text">Text</option>
                </select>
              </label>
            </div>
          </div>

          {/* for setting the size options */}
          <div className="new__product__size">
            <p>Size</p>
            <small>Length m</small>
            <div className="new__product__lenth__options">
              {newProductLengthOption}
            </div>
            <p>
              <small>Width m</small>
              <div className="new__product__width__options">
                {newProductWidthOption}
              </div>
            </p>
          </div>
          <div className="new__product__row">
            <div className="product__cloth__desc">
              <label htmlFor="">
                Product Description
                <textarea
                  name="Text1"
                  cols="40"
                  rows="5"
                  className="new__product__inputBox"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="new__product__row">
            <div className="product__cloth__desc">
              <label htmlFor="">
                Cloth Description
                <textarea
                  name="Text1"
                  cols="40"
                  rows="5"
                  className="new__product__inputBox"
                ></textarea>
              </label>
            </div>
          </div>
          <div className="new__product__row">
            <div className="product__image__upload">
              <input
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                placeholder="choose image"
                className="new__product__inputBox"
              ></input>
            </div>
          </div>
          <div className="new__product__row">
            <button className="newProductSubmitButton">DONE</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default TailorProducts;
