import {
  ADDRESS_BOOK_EDIT,
  CHANGE_PASSWORD,
  EDIT_ACCOUNT,
} from "../constants/accountDetailsConstants";

export const addressBookEditReducers = (
  goToAdddressBookEdit = false,
  action
) => {
  switch (action.type) {
    case ADDRESS_BOOK_EDIT:
      return !goToAdddressBookEdit;

    default:
      return goToAdddressBookEdit;
  }
};

export const changePasswordReducers = (
  goToChangePasswordState = false,
  action
) => {
  switch (action.type) {
    case CHANGE_PASSWORD:
      return !goToChangePasswordState;

    default:
      return goToChangePasswordState;
  }
};

export const editAccountReducers = (goToEditState = false, action) => {
  switch (action.type) {
    case EDIT_ACCOUNT:
      return !goToEditState;

    default:
      return goToEditState;
  }
};
