const changePassword = (goToChangePasswordState = false, action) => {
  switch (action.type) {
    case "CHANGEPASSWORD":
      return (goToChangePasswordState = true);

    default:
      return goToChangePasswordState;
  }
};
export default changePassword;
