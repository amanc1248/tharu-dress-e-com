import React, { useState } from "react";
import "./TailorProducts.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import Checkbox from "@material-ui/core/Checkbox";
import DeleteIcon from "@material-ui/icons/Delete";
let seeMoreOptionsListProducts = [
  { icon: <EditIcon></EditIcon>, iconText: "Edit Product" },
  { icon: <VisibilityIcon></VisibilityIcon>, iconText: "View Product" },
  {
    icon: <FeaturedPlayListIcon></FeaturedPlayListIcon>,
    iconText: "Product Orders",
  },
  { icon: <DeleteIcon></DeleteIcon>, iconText: "Remove Product" },
];
let seeMoreOptionProducts = seeMoreOptionsListProducts.map((obj) => {
  return (
    <SeeMoreIndividual
      key={obj.toString()}
      theIcon={obj.icon}
      theIconText={obj.iconText}
    >
      {" "}
    </SeeMoreIndividual>
  );
});
function SeeMoreIndividual({ theIcon, theIconText }) {
  return (
    <div className="see__more__individual__container">
      <div className="see__more__icon">{theIcon}</div>
      <div className="see__more__text">{theIconText}</div>
    </div>
  );
}
function SeeMoreContainer() {
  return <div className="see__more__container">{seeMoreOptionProducts}</div>;
}
function TailorProducts() {
  const [moreAction, setMoreAction] = useState(false);
  return (
    <div className="tailor__products">
      <div className="tailor__products__title row no-gutters justify-content-around">
        <div className="tailor__products__heading col-6">
          <h5>PRODUCTS</h5>
        </div>
        <div className="tailor__add__products col-6">
          <button className="tailor__add__products__button">
            + ADD PRODUCT
          </button>
        </div>
      </div>
      <div className="tailor__products__container">
        <table className="table " id="tailor__products__table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Category</th>
              <th scope="col">See More</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                {" "}
                <Checkbox></Checkbox>{" "}
              </td>
              <th scope="row">Kids Anchara</th>
              <td>Rs. 12,000</td>
              <td>Men</td>
              <td className="see__more__data">
                <MoreHorizIcon
                  onClick={() => {
                    setMoreAction(!moreAction);
                  }}
                ></MoreHorizIcon>
                {moreAction && <SeeMoreContainer></SeeMoreContainer>}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <Checkbox></Checkbox>{" "}
              </td>
              <th scope="row">Kids Anchara</th>
              <td>Rs. 12,000</td>
              <td>Men</td>
              <td className="see__more__data">
                <MoreHorizIcon
                  onClick={() => {
                    setMoreAction(!moreAction);
                  }}
                ></MoreHorizIcon>
                {moreAction && <SeeMoreContainer></SeeMoreContainer>}
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <Checkbox></Checkbox>{" "}
              </td>
              <th scope="row">Kids Anchara</th>
              <td>Rs. 12,000</td>
              <td>Men</td>
              <td>
                <MoreHorizIcon></MoreHorizIcon>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <Checkbox></Checkbox>{" "}
              </td>
              <th scope="row">Kids Anchara</th>
              <td>Rs. 12,000</td>
              <td>Men</td>
              <td>
                <MoreHorizIcon></MoreHorizIcon>
              </td>
            </tr>
            <tr>
              <td>
                {" "}
                <Checkbox></Checkbox>{" "}
              </td>
              <th scope="row">Kids Anchara</th>
              <td>Rs. 12,000</td>
              <td>Men</td>
              <td>
                <MoreHorizIcon></MoreHorizIcon>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TailorProducts;
