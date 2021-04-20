import Carousel from "react-bootstrap/Carousel";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import React, { useState, useEffect } from "react";
import CloseIcon from "@material-ui/icons/Close";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "../../styles/customer/CustomerProductScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../../actions/productActions";
function CustomerProductScreen({ match, history }) {
  const [showProductDetails, setshowProductDetails] = useState(false);

  const changeShowProductDetails = () => {
    setshowProductDetails(!showProductDetails);
  };

  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { product, productSpec } = productDetails;
  console.log("THis is productDetails");
  console.log(productDetails);

  console.log("THis is product");
  console.log(product);

  console.log("THis is product spec");
  console.log(productSpec);

  useEffect(() => {
    dispatch(listProductDetails(match.params.id));
  }, [dispatch, match]);

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
              match={match}
              history={history}
            ></ProductDetailsPart1>
          )}
        </div>
      </div>
    </div>
  );
}
export default CustomerProductScreen;

function ProductDetailsPart1({
  showingProductDetails,
  product,
  history,
  match,
}) {
  const [quantity, setQuantity] = useState(1);
  const [lengthValue, setLengthValue] = useState(2);
  const [widthValue, setWidthValue] = useState(2);
  const [lengthSize, setLengthSize] = useState(4.5);
  const [widthSize, setWidthSize] = useState(1);

  const LengthOptionButton = ({ size, sizeName, index }) => {
    return (
      <div>
        <button
          className={`length__options__button ${
            index === lengthValue && `active___btn`
          }`}
          onClick={() => {
            setLengthValue(index);
            setLengthSize(size);
          }}
        >
          <span>{size}</span>
          <span>
            <small>{sizeName}</small>
          </span>
        </button>
      </div>
    );
  };

  const WidthOptionButton = ({ size, sizeName, index }) => {
    return (
      <div>
        <button
          className={`width__options__button ${
            index === widthValue && `active___btn`
          }`}
          onClick={() => {
            setWidthValue(index);
            setWidthSize(size);
          }}
        >
          <span>{size}</span>
          <span>
            <small>{sizeName}</small>
          </span>
        </button>
      </div>
    );
  };

  let lenghtOptions = [
    { size: 3.5, sizeName: "Short" },
    { size: 4, sizeName: "" },
    { size: 4.5, sizeName: "Standad" },
    { size: 5, sizeName: "" },
    { size: 5.5, sizeName: "Long" },
  ];
  let widthOptions = [
    { size: 0.25, sizeName: "Short" },
    { size: 0.5, sizeName: "" },
    { size: 1, sizeName: "Standad" },
    { size: 1.25, sizeName: "" },
    { size: 2, sizeName: "Long" },
  ];
  let lengthChooseOptions = lenghtOptions.map((obj, index) => {
    return (
      <LengthOptionButton
        key={obj.toString()}
        size={obj.size}
        sizeName={obj.sizeName}
        index={index}
      ></LengthOptionButton>
    );
  });
  let widthChooseOptions = widthOptions.map((obj, index) => {
    return (
      <WidthOptionButton
        key={obj.toString()}
        size={obj.size}
        sizeName={obj.sizeName}
        index={index}
      ></WidthOptionButton>
    );
  });

  const subtractQuantity = () => {
    quantity === 1 ? setQuantity(quantity) : setQuantity(quantity - 1);
  };

  const addQuantity = () => {
    quantity !== product[0].in_stock
      ? setQuantity(quantity + 1)
      : setQuantity(quantity);
  };
  const addToCartHandler = () => {
    history.push(
      `/cart/${match.params.id}?qty=${quantity}?length=${lengthSize}?width=${widthSize}`
    );
  };
  return (
    <div className="product__details__part1">
      <div className="product__title__price">
        {product && product.length ? (
          <p className="product__title">{product[0].name}</p>
        ) : null}

        {product && product.length ? (
          <p className="product__price">Rs. {product[0].price}</p>
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
          <IndeterminateCheckBoxIcon
            onClick={subtractQuantity}
          ></IndeterminateCheckBoxIcon>
        </span>
        <span className="product__quantity__number">{quantity}</span>
        <span>
          <AddBoxIcon onClick={addQuantity}></AddBoxIcon>
        </span>{" "}
      </div>
      <hr />
      <div className="add__to__cart">
        <button className="add__to__cart__button" onClick={addToCartHandler}>
          ADD TO CART
        </button>
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
