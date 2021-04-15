import React from "react";
import ImageWithTitle from "../../../Components/ImageWithTitle";
import CustomerBagScreen from "./BagScreens/CustomerBagScreen";
import Tabs from "../../../Components/Tabs/Tabs";
import CustomerFavoriteScreen from "./FavouritesScreens/CustomerFavouriteScreen";
import CustomerAccountInformationScreen from "./AccountDetails/CustomerAccountInformationScreen";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../actions/cartActions";
import { useEffect } from "react";
function CustomerCartScreen({ match, location, history }) {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log("Cart Items for cart 👇👇👇");
  console.log(cartItems);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, [dispatch, qty, productId]);
  return (
    <div className="cart">
      <ImageWithTitle theTitle="YOUR CART"></ImageWithTitle>
      <div className="welcome__user">
        <h5>WELCOME, AMAN</h5>
      </div>
      <p className="contact__us__instruction">
        If you have any queries or need further assistance, please Contact Us
      </p>
      <Tabs>
        <div label="Bag">
          <CustomerBagScreen bagTitle="SHOPPING BAG"></CustomerBagScreen>
        </div>
        <div label="Favorites">
          <CustomerFavoriteScreen></CustomerFavoriteScreen>
        </div>
        <div label="Orders">
          <h1>This is orders</h1>
        </div>
        <div label="Account Details">
          <CustomerAccountInformationScreen></CustomerAccountInformationScreen>
        </div>
      </Tabs>
    </div>
  );
}

export default CustomerCartScreen;
