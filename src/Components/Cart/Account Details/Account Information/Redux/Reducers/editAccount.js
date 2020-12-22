const editAccount = (goToEditState = false, action) => {
  switch (action.type) {
    case "EDITACCOUNT":
      return (goToEditState = true);

    default:
      return goToEditState;
  }
};
export default editAccount;
