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
  orderMarkAsDeliveredReducer,
} from "./reducers/orderReducers";
import {
  tailorAddProductReducer,
  tailorCustomersReducer,
  tailorDetailsReducer,
  tailorEmployeesReducer,
  tailorLoginReducer,
  tailorOrdersReducer,
  tailorProductsReducer,
  tailorRegisterReducer,
  tailorSalesDetailsReducer,
  tailorUpdateProfileReducer,
} from "./reducers/tailorUserReducers";
import { customerDetailsReducer } from "./reducers/customerReducers";
import {
  adminAllCustomersDetailsReducer,
  adminAllEmployeesDetailsReducer,
  adminAllProductOrdersDetailsReducer,
  adminAllProductsDetailsReducer,
  adminAllTailorsDetailsReducer,
  adminDashBoardReducer,
} from "./reducers/adminReducers";
import {
  employeeLoginReducer,
  employeeRegisterReducer,
} from "./reducers/employeeReducers";

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
  tailorDetails: tailorDetailsReducer,
  tailorLogin: tailorLoginReducer,
  tailorRegister: tailorRegisterReducer,
  tailorSalesDetails: tailorSalesDetailsReducer,
  tailorOrders: tailorOrdersReducer,
  tailorProducts: tailorProductsReducer,
  tailorCustomers: tailorCustomersReducer,
  tailorEmployees: tailorEmployeesReducer,
  tailorUpdateProfile: tailorUpdateProfileReducer,
  tailorAddProduct: tailorAddProductReducer,

  // particular customer 👇
  customerDetails: customerDetailsReducer,

  // admin 👇
  adminDashBoard: adminDashBoardReducer,
  adminAllCustomers: adminAllCustomersDetailsReducer,
  adminAllTailors: adminAllTailorsDetailsReducer,
  adminAllEmployees: adminAllEmployeesDetailsReducer,
  adminAllProductOrders: adminAllProductOrdersDetailsReducer,
  adminAllProducts: adminAllProductsDetailsReducer,

  //employee
  employeeLogin: employeeLoginReducer,
  employeeRegister: employeeRegisterReducer,

  // order 👇
  orderMarkAsDelivered: orderMarkAsDeliveredReducer,
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
