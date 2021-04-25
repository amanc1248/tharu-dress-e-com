import {
  CUSTOMER_DETAILS_FAIL,
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
} from "../constants/customerConstants";

export const customerDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case CUSTOMER_DETAILS_REQUEST:
      return { loading: true };
    case CUSTOMER_DETAILS_SUCCESS:
      return { loading: false, customerInfo: action.payload };
    case CUSTOMER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
