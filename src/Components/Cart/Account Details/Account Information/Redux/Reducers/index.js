import changePassword from "./changePassword";
import editAccount from "./editAccount";
import addressBookEdit from './addressBookEdit'
import { combineReducers } from "redux";
const allReducers = combineReducers({
  changePassword: changePassword,
  editAccount: editAccount,
  addressBookEdit:addressBookEdit
});
export default allReducers;
