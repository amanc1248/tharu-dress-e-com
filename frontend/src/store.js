import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  categoryProductsReducers,
  productDetailsReducers,
  productSpecificationReducers,
} from "./reducers/productReducers";
import {
  addressBookEditReducers,
  changePasswordReducers,
  editAccountReducers,
} from "./reducers/accountDetailsReducers";

const reducer = combineReducers({
  // for account details 👇
  changePassword: changePasswordReducers,
  editAccount: editAccountReducers,
  addressBookEdit: addressBookEditReducers,

  categoryProducts: categoryProductsReducers,
  productDetails: productDetailsReducers,
  productSpecification: productSpecificationReducers,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
