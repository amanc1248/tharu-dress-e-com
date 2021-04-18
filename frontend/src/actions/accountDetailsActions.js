import {
  ADDRESS_BOOK_EDIT,
  CHANGE_PASSWORD,
  EDIT_ACCOUNT,
} from "../constants/accountDetailsConstants";

export const goToAccountEdit = () => {
  return {
    type: EDIT_ACCOUNT,
  };
};
export const goToChangePassword = () => {
  return {
    type: CHANGE_PASSWORD,
  };
};
export const goToAddressBookEdit = () => {
  return {
    type: ADDRESS_BOOK_EDIT,
  };
};
