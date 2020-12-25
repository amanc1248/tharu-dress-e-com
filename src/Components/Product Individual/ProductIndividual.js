import Carousel from "react-bootstrap/Carousel";

import React from "react";
import "./ProductIndividual.css";
function ProductIndividual() {
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
    <div className="product__individual">
      <div className="row product__individual__container">
        <div className="col-lg-6 col-md-6 product__individual__images">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel__image "
                src="images\The gucci products men\623953_XDBEF_2602_001_100_0000_Light-Washed-velvet-corduroy-pant.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel__image"
                src="images\The gucci products men\645312_XJC98_4384_001_100_0000_Light-Disney-x-Gucci-Donald-Duck-Striped-T-shirt.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100 carousel__image"
                src="images\The gucci products men\649093_XDBK1_4266_001_100_0000_Light-Eco-washed-GG-denim-shorts.jpg"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-lg-6 col-md-6 product__individual__details">
          <div className="product__title__price">
            <p className="product__title">Anchara With Red Boutique</p>
            <p className="product__price">Rs. 15,000</p>
          </div>
          <div className="product__color__style__design">
            <div className="product__color">
              <span>COLOR: </span>
              <span>White </span>
            </div>
            <div className="product__style">
              <span>STYLE: </span>
              <span>White </span>
            </div>
            <div className="product__design">
              <span>DESIGN: </span>
              <span>Flowers With Boutique</span>
            </div>
          </div>
          <div className="choose__size">
            <div className="size__length">
              <span>LENGTH </span>
              <span>meters</span>
              <div className="length__options">{lengthChooseOptions}</div>
            </div>
            <div className="size__width">
              <span>WIDTH</span>
              <span>meters</span>
              <div className="width__options">{widthChooseOptions}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductIndividual;

function LengthOptionButton({ size, sizeName }) {
  return (
    <div className="length__options__button">
      <button>
        <p>{size}</p>
        <p>{sizeName}</p>
      </button>
    </div>
  );
}

function WidthOptionButton({ size, sizeName }) {
  return (
    <div className="width__options__button">
      <button>
        <p>{size}</p>
        <p>{sizeName}</p>
      </button>
    </div>
  );
}
