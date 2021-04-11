import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "../../../../Data/CartItemsData";
function CustomerBagScreen({ bagTitle }) {
  const [cartItems, setCartItems] = useState(data);

  return (
    <div className="bag">
      <div className="App_main row no-gutters">
        <div className="col-lg-8 col-12">
          <CartItems items={cartItems} setCartItems={setCartItems}></CartItems>
        </div>

        <div className="col-lg-4 col-12">
          <CartTotal items={cartItems}></CartTotal>
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
  changeCartQuantity,
  deleteCartItem,
  index,
}) {
  return (
    <div className="cartItem">
      <div className="cartItem-Image">
        <img
          src={process.env.PUBLIC_URL + "/items/" + image}
          alt="cartproduct"
        />
      </div>
      <div className="cartItem-info">
        <div className="info-title">
          <h2>{title}</h2>
        </div>
        <div className="info-stock">{stock}</div>
        <div className="item-actions">
          <div className="item-quantity">
            <select
              value={quantity}
              className="item-quantity-stock"
              onChange={(e) => {
                changeCartQuantity(e, index);
              }}
            >
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
              <option value="6">Qty: 6</option>
              <option value="7">Qty: 7</option>
              <option value="8">Qty: 8</option>
            </select>
          </div>
          <div className="item-action-divider">|</div>
          <div className="item-delete">
            {/* 👉👉👉you got to understand here, why are we doing .bind and this */}
            <button onClick={deleteCartItem.bind(this, index)}>Delete</button>
          </div>
        </div>
      </div>
      <div className="cartItem-price">${price}</div>
    </div>
  );
}

export function CartItems({ items, setCartItems }) {
  // For changing cart quantity👇👇👇
  const changeCartQuantity = (e, index) => {
    // When we select a quantity on item, we pass it in here
    console.log("This is changeCartQuantity");
    console.log(e.target.value);
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
  };

  // For deleting cart item👇👇👇
  const deleteCartItem = (indexToDelete) => {
    const remainingItems = items.filter(
      (item, index) => index !== indexToDelete
    );
    setCartItems(remainingItems);
    console.log("This is the item");
    console.log(remainingItems);
    // return remainingItems;
  };
  // For generating cart items👇👇👇
  const cartItemsList = items.map((item, index) => {
    // here the naz has used index as a key that is a bad practice. Inform this in slack
    return (
      <CartItem
        changeCartQuantity={changeCartQuantity}
        deleteCartItem={deleteCartItem}
        index={index}
        key={item.toString()}
        title={item.title}
        image={item.image}
        price={item.price}
        stock={item.stock}
        quantity={item.quantity}
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

export function CartTotal({ items }) {
  // Calculating the total price 👇👇
  const getTotalPrice = () => {
    // Here while calculating the total price why Naz has not converted the price which is in string into the integer
    var theTotalPrice = 0;
    items.map((item) => {
      return (theTotalPrice += item.price * item.quantity);
    });
    return theTotalPrice;
  };

  // For total cart Items
  const getTotalCartItems = () => {
    let totalCartItems = 0;
    items.forEach((item) => {
      return (totalCartItems += parseInt(item.quantity));
    });

    return totalCartItems;
  };
  return (
    <div className="cartTotal">
      <h3>
        Subtotal({getTotalCartItems()} items)
        <span className="cart-total-price">${getTotalPrice().toFixed(2)}</span>
      </h3>
      <Link to="/checkout">
        <button>PROCEED TO CHECKOUT</button>
      </Link>
    </div>
  );
}

export default CustomerBagScreen;
