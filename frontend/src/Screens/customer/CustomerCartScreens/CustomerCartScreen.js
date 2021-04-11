import React from "react";
import { useSelector } from "react-redux";
import ImageWithTitle from "../../../Components/ImageWithTitle";
import CustomerBagScreen from "./BagScreens/CustomerBagScreen";
import Tabs from "../../../Components/Tabs/Tabs";
import CustomerFavoriteScreen from "./FavouritesScreens/CustomerFavouriteScreen";
import CustomerAccountInformationScreen from "./AccountDetails/CustomerAccountInformationScreen";
function CustomerCartScreen() {
  const seeOrderDetails = useSelector((state) => state.seeOrderDetails);
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
