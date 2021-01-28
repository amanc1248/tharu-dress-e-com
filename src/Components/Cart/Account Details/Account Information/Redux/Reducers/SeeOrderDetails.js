const seeOrderDetails = (seeOrderDetailsState = false, action) => {
  switch (action.type) {
    case "SEEORDERDETAILS":
      return !seeOrderDetailsState;

    default:
      return seeOrderDetailsState;
  }
};
export default seeOrderDetails;
