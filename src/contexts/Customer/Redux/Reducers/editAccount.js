const editAccount = (goToEditState = false, action) => {
  switch (action.type) {
    case "EDITACCOUNT":
      return !goToEditState;

    default:
      return goToEditState;
  }
};
export default editAccount;
