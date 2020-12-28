import Carousel from "react-bootstrap/Carousel";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import React, { useState } from "react";
import CloseIcon from "@material-ui/icons/Close";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "./ProductIndividual.css";
function ProductIndividual() {
  const [showProductDetails, setshowProductDetails] = useState(false);
  const changeShowProductDetails = () => {
    setshowProductDetails(!showProductDetails);
  };
  return (
    <div className="product__individual">
      <div className="row product__individual__container container-fluid m-0 p-0">
        <div className="col-lg-6 col-md-6 product__individual__images p-0">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 product__individual__carousel__image "
                src="images\The gucci products men\623953_XDBEF_2602_001_100_0000_Light-Washed-velvet-corduroy-pant.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product__individual__carousel__image"
                src="images\The gucci products men\645312_XJC98_4384_001_100_0000_Light-Disney-x-Gucci-Donald-Duck-Striped-T-shirt.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 product__individual__carousel__image"
                src="images\The gucci products men\649093_XDBK1_4266_001_100_0000_Light-Eco-washed-GG-denim-shorts.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-6 col-md-6 productDetails text-left">
          {showProductDetails ? (
            <ProductDetailsPart2
              showingProductDetails={changeShowProductDetails}
            ></ProductDetailsPart2>
          ) : (
            <ProductDetailsPart1
              showingProductDetails={changeShowProductDetails}
            ></ProductDetailsPart1>
          )}
        </div>
      </div>
    </div>
  );
}
export default ProductIndividual;

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

function ProductDetailsPart1({ showingProductDetails }) {
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
        <p className="product__title">Anchara With Red Boutique</p>
        <p className="product__price">Rs. 15,000</p>
      </div>
      <hr />
      <div className="product__color__style__design__container">
        <div className="product__color__style__design">
          <span className="title">COLOR: </span>
          <span>White </span>
        </div>
        <div className="product__color__style__design">
          <span className="title">STYLE: </span>
          <span>White </span>
        </div>
        <div className="product__color__style__design">
          <span className="title">DESIGN: </span>
          <span>Flowers With Boutique</span>
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

function ProductDetailsPart2({ showingProductDetails }) {
  return (
    <div className="product__details__part2">
      <div className="product__details__part2__title">
        <div>PRODUCT DETAILS</div>
        <div className="product__details__close__button">
          <CloseIcon onClick={showingProductDetails}></CloseIcon>
        </div>
      </div>
      <div className="product__details__part2__description">
        Introducing our new runway sneaker crafted in technical nylon and suede.
        The style is capped with a polished overshoe inspired by rain boots and
        a cross-detailed tread referencing our iconic check.
      </div>
      <div className="product__details__part2__specific__details">
        <span>Upper: 45% calf suede, 41% polyamide, 13% polyester, 1%</span>{" "}
        <span>
          cotton Lining: 49% polyester, 37% sheep leather, 9% goat suede 5%
          elastane
        </span>{" "}
        <span>
          Sole: 100% rubber Lace-up closure Embossed Burberry lettering at heel
          Made in Italy.
        </span>{" "}
        We are committed to supporting our supply chain partners to source
        low-carbon energy, which significantly reduces the carbon footprint of
        our products. Item 80203471
      </div>
    </div>
  );
}
