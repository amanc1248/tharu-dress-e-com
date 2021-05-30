import React from "react";
import ImageWithTitle from "../../../Components/ImageWithTitle";
import CustomerBagScreen from "./BagScreens/CustomerBagScreen";
import Tabs from "../../../Components/Tabs/Tabs";
import CustomerFavoriteScreen from "./FavouritesScreens/CustomerFavouriteScreen";
import CustomerAccountInformationScreen from "./AccountDetails/CustomerAccountInformationScreen";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../actions/cartActions";
import { useEffect } from "react";
import { logout } from "../../../actions/userActions";
import Footer from "../../../Components/customer/Footer/Footer";
import Header from "../../../Components/customer/Header";
import CustomerOrdersScreen from "./OrdersScreens/CustomerOrdersScreen";
function CustomerCartScreen({ match, location, history }) {
  const productId = match.params.id;
  const qty = location.search
    ? Number(location.search.split("qty=")[1].split("?length=")[0])
    : 1;
  const length = location.search
    ? Number(location.search.split("length=")[1].split("?width=")[0])
    : 4.5;
  const width = location.search
    ? Number(location.search.split("width=")[1])
    : 1;

  const redirect = location.search ? location.search.split("=")[1] : "/signin";

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log("Cart Items for cart 👇👇👇");
  console.log(cartItems);
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  const logoutHandler = () => {
    dispatch(logout());
  };
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty, length, width));
    }
    if (!userInfo) {
      history.push(redirect);
    }
  }, [dispatch, qty, productId, userInfo, history, redirect, length, width]);
  return (
    <>
      <Header></Header>
      <div className="cart">
        <ImageWithTitle theTitle="MY ACCOUNT"></ImageWithTitle>
        <div className="welcome__user">
          <span className="welcome__the__user">
            WELCOME, {userInfo && userInfo["firstName"]}
          </span>
          <span className="user_logout" onClick={logoutHandler}>
            {" "}
            <u>Sign Out</u>
          </span>
        </div>
        <p className="contact__us__instruction">
          If you have any queries or need further assistance, please Contact Us
        </p>
        <Tabs>
          <div label="Bag">
            <CustomerBagScreen bagTitle="SHOPPING BAG"></CustomerBagScreen>
          </div>

          <div label="Orders">
            <CustomerOrdersScreen></CustomerOrdersScreen>
          </div>
          <div label="Account Details">
            <CustomerAccountInformationScreen></CustomerAccountInformationScreen>
          </div>
        </Tabs>
      </div>
      <Footer></Footer>
    </>
  );
}

export default CustomerCartScreen;
