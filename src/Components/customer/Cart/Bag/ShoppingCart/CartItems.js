import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";
import "./CartItem.css";
function CartItems({ items, setCartItems }) {
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

export default CartItems;
