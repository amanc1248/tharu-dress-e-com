import changePassword from "./changePassword";
import editAccount from "./editAccount";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  changePassword: changePassword,
  editAccount: editAccount,
});
export default allReducers;
