const addressBookEdit = (goToAdddressBookEdit = false, action) => {
  switch (action.type) {
    case "ADDRESSBOOKEDIT":
      return !goToAdddressBookEdit;

    default:
      return goToAdddressBookEdit;
  }
};
export default addressBookEdit;
