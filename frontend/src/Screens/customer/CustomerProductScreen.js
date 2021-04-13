import Carousel from "react-bootstrap/Carousel";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "../../styles/customer/CustomerProductScreen.css";
import { useDispatch, useSelector } from "react-redux";
import {
  listProductDetails,
  listProductSpecificationDetails,
} from "../../actions/productActions";
function CustomerProductScreen() {
  const [showProductDetails, setshowProductDetails] = useState(false);
  const changeShowProductDetails = () => {
    setshowProductDetails(!showProductDetails);
  };

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  const productSpecification = useSelector(
    (state) => state.productSpecification
  );
  const { productSpec } = productSpecification;

  useEffect(() => {
    dispatch(listProductDetails("pod2"));
    dispatch(listProductSpecificationDetails("pod2"));
  }, [dispatch]);

  return (
    <div className="product__individual">
      <div className="row product__individual__container container-fluid m-0 p-0">
        <div className="col-lg-6 col-md-6 product__individual__images p-0">
          <Carousel>
            {productSpec.map((obj) => (
              <Carousel.Item key={obj.toString}>
                <img
                  className="d-block w-100 product__individual__carousel__image "
                  src={obj.image}
                  alt="carousel"
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="col-lg-6 col-md-6 productDetails text-left">
          {showProductDetails ? (
            <ProductDetailsPart2
              showingProductDetails={changeShowProductDetails}
              product={product}
            ></ProductDetailsPart2>
          ) : (
            <ProductDetailsPart1
              showingProductDetails={changeShowProductDetails}
              product={product}
            ></ProductDetailsPart1>
          )}
        </div>
      </div>
    </div>
  );
}
export default CustomerProductScreen;

function LengthOptionButton({ size, sizeName }) {
  return (
    <div>
      <button className="length__options__button">
        <span>{size}</span>
        <span>
          <small>{sizeName}</small>
        </span>
      </button>
    </div>
  );
}

function WidthOptionButton({ size, sizeName }) {
  return (
    <div>
      <button className="width__options__button">
        <span>{size}</span>
        <span>
          <small>{sizeName}</small>
        </span>
      </button>
    </div>
  );
}

function ProductDetailsPart1({ showingProductDetails, product }) {
  let lenghtOptions = [
    { size: 3.5, sizeName: "Short" },
    { size: 4, sizeName: "" },
    { size: 4.5, sizeName: "Standad" },
    { size: 5, sizeName: "" },
    { size: 5.5, sizeName: "Long" },
  ];
  let widthOptions = [
    { size: 80, sizeName: "Short" },
    { size: 90, sizeName: "" },
    { size: 100, sizeName: "Standad" },
    { size: 110, sizeName: "" },
    { size: 120, sizeName: "Long" },
  ];
  let lengthChooseOptions = lenghtOptions.map((obj) => {
    return (
      <LengthOptionButton
        key={obj.toString()}
        size={obj.size}
        sizeName={obj.sizeName}
      ></LengthOptionButton>
    );
  });
  let widthChooseOptions = widthOptions.map((obj) => {
    return (
      <WidthOptionButton
        key={obj.toString()}
        size={obj.size}
        sizeName={obj.sizeName}
      ></WidthOptionButton>
    );
  });
  return (
    <div className="product__details__part1">
      <div className="product__title__price">
        {product && product.length ? (
          <p className="product__title">{product[0].name}</p>
        ) : null}

        {product && product.length ? (
          <p className="product__price">{product[0].price}</p>
        ) : null}
      </div>
      <hr />
      <div className="product__color__style__design__container">
        <div className="product__color__style__design">
          <span className="title">COLOR: </span>
          {product && product.length ? <span>{product[0].color} </span> : null}
        </div>
        <div className="product__color__style__design">
          <span className="title">STYLE: </span>
          {product && product.length ? <span>{product[0].style} </span> : null}
        </div>
        <div className="product__color__style__design">
          <span className="title">DESIGN: </span>
          {product && product.lenght ? <span>{product[0].design} </span> : null}
        </div>
      </div>
      <hr />
      <div className="choose__size">
        <div className="choose__size__title">SIZE:</div>
        <div className="size__length">
          <span>LENGTH </span>
          <span>
            {" "}
            <small>meters</small>
          </span>
          <div className="length__options">{lengthChooseOptions}</div>
        </div>
        <div className="size__width">
          <span>WIDTH </span>
          <span>
            <small>meters</small>
          </span>
          <div className="width__options">{widthChooseOptions}</div>
        </div>
      </div>
      <hr />
      <div className="product__detail__button">
        <span>
          VIEW PRODUCT DETAILS{" "}
          <ControlPointIcon onClick={showingProductDetails}></ControlPointIcon>{" "}
        </span>
      </div>
      <hr />
      <div className="quantity__add__section">
        <span className="quantity__title">QUATITY </span>
        <span>
          <IndeterminateCheckBoxIcon></IndeterminateCheckBoxIcon>
        </span>
        <span className="product__quantity__number">1</span>
        <span>
          <AddBoxIcon></AddBoxIcon>
        </span>{" "}
      </div>
      <hr />
      <div className="add__to__cart">
        <button className="add__to__cart__button">ADD TO CART</button>
      </div>
    </div>
  );
}

function ProductDetailsPart2({ showingProductDetails, product }) {
  return (
    <div className="product__details__part2">
      <div className="product__details__part2__title">
        <div>PRODUCT DETAILS</div>
        <div className="product__details__close__button">
          <CloseIcon onClick={showingProductDetails}></CloseIcon>
        </div>
      </div>

      {product && product.length ? (
        <div className="product__details__part2__description">
          {" "}
          {product[0].description}{" "}
        </div>
      ) : null}

      {product && product.length ? (
        <div className="product__details__part2__specific__details">
          {product[0].cloth_description}
        </div>
      ) : null}
    </div>
  );
}
