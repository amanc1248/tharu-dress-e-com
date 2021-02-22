import changePassword from "./changePassword";
import editAccount from "./editAccount";
import addressBookEdit from "./addressBookEdit";
import seeOrderDetails from "./SeeOrderDetails";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  seeOrderDetails: seeOrderDetails,
  changePassword: changePassword,
  editAccount: editAccount,
  addressBookEdit: addressBookEdit,
});
export default allReducers;
