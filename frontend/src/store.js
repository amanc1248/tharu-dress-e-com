import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  categoryProductsReducers,
  productDetailsReducers,
} from "./reducers/productReducers";
import {
  addressBookEditReducers,
  changePasswordReducers,
  editAccountReducers,
} from "./reducers/accountDetailsReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
  userDetialsReducer,
  userLoginReducer,
  userRegisterReducer,
  userUpdateProfileReducer,
} from "./reducers/userReducers";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderListMyReducer,
} from "./reducers/orderReducers";
import {
  tailorLoginReducer,
  tailorRegisterReducer,
} from "./reducers/tailorUserReducers";

const reducer = combineReducers({
  // for account details 👇
  changePassword: changePasswordReducers,
  editAccount: editAccountReducers,
  addressBookEdit: addressBookEditReducers,

  categoryProducts: categoryProductsReducers,
  productDetails: productDetailsReducers,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetialsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderListMy: orderListMyReducer,

  // Tailor👇
  tailorLogin: tailorLoginReducer,
  tailorRegister: tailorRegisterReducer,
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

// Tailor local storage
const tailorInfoFromStorage = localStorage.getItem("tailorInfo")
  ? JSON.parse(localStorage.getItem("tailorInfo"))
  : null;
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
  tailorLogin: { tailorInfo: tailorInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
