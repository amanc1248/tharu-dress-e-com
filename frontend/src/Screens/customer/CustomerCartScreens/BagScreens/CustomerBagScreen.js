import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import { addToCart, removeFromCart } from "../../../../actions/cartActions";
function CustomerBagScreen({ match, location, bagTitle, history }) {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log("Cart Items for bag 👇👇👇");
  console.log(cartItems);

  return (
    <div className="bag">
      <div className="App_main row no-gutters">
        <div className="col-lg-8 col-12">
          <CartItems items={cartItems}></CartItems>
        </div>

        <div className="col-lg-4 col-12">
          <CartTotal items={cartItems} history={history}></CartTotal>
        </div>
      </div>
    </div>
  );
}

export function CartItem({
  title,
  stock,
  image,
  price,
  quantity,
  productId,
  history,
}) {
  const dispatch = useDispatch();
  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cartItem">
      <div className="cartItem-Image">
        <img src={`/` + image} alt="cartproduct" />
      </div>
      <div className="cartItem-info">
        <div className="info-title">
          <Link to={`/productIndividual/${productId}`}>{title}</Link>
        </div>
        <div className="item-actions">
          <div className="item-quantity">
            <select
              value={quantity}
              className="item-quantity-stock"
              onChange={(e) => {
                dispatch(addToCart(productId, Number(e.target.value)));
              }}
            >
              {[...Array(stock).keys()].map((x) => (
                <option key={x + 1} value={x + 1}>
                  {x + 1}
                </option>
              ))}
            </select>
          </div>
          <div className="item-action-divider">|</div>
          <div className="item-delete">
            {/* 👉👉👉you got to understand here, why are we doing .bind and this */}
            <button
              onClick={() => {
                removeFromCartHandler(productId);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <div className="cartItem-price">Rs. {price}</div>
    </div>
  );
}

export function CartItems({ items }) {
  const cartItemsList = items.map((item) => {
    // here the naz has used index as a key that is a bad practice. Inform this in slack
    return (
      <CartItem
        key={item.productId}
        productId={item.productId}
        title={item.name}
        image={item.image}
        price={item.price}
        stock={item.in_stock}
        quantity={item.qty}
      ></CartItem>
    );
  });

  return (
    <div className="cartItems">
      <h1>Shopping Cart</h1>
      <hr />
      {cartItemsList}
    </div>
  );
}

export function CartTotal({ items, history }) {
  // Calculating the total price 👇👇
  const getTotalPrice = () => {
    // Here while calculating the total price why Naz has not converted the price which is in string into the integer
    var theTotalPrice = 0;
    items.map((item) => {
      return (theTotalPrice += item.price * item.qty);
    });
    return theTotalPrice;
  };

  // For total cart Items
  const getTotalCartItems = () => {
    let totalCartItems = 0;
    items.forEach((item) => {
      return (totalCartItems += parseInt(item.qty));
    });

    return totalCartItems;
  };
  const checkoutHandler = () => {
    history.push("/signin?redirect=checkout");
  };
  return (
    <div className="cartTotal">
      <h3>
        Subtotal({getTotalCartItems()} items)
        <span className="cart-total-price">${getTotalPrice().toFixed(2)}</span>
      </h3>
      <button onClick={checkoutHandler}>PROCEED TO CHECKOUT</button>
    </div>
  );
}

export default withRouter(CustomerBagScreen);
