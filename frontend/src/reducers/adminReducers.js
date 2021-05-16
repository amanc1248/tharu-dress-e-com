import {
  ADMIN_ALL_CUSTOMERS_DETAILS_FAIL,
  ADMIN_ALL_CUSTOMERS_DETAILS_REQUEST,
  ADMIN_ALL_CUSTOMERS_DETAILS_SUCCESS,
  ADMIN_DASHBOARD_DETAILS_FAIL,
  ADMIN_DASHBOARD_DETAILS_REQUEST,
  ADMIN_DASHBOARD_DETAILS_SUCCESS,
} from "../constants/adminConstants";

export const adminDashBoardReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_DASHBOARD_DETAILS_REQUEST:
      return { loading: true };
    case ADMIN_DASHBOARD_DETAILS_SUCCESS:
      return { loading: false, adminDashBoardInfo: action.payload };
    case ADMIN_DASHBOARD_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const adminAllCustomersDetailsReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_ALL_CUSTOMERS_DETAILS_REQUEST:
      return { loading: true };
    case ADMIN_ALL_CUSTOMERS_DETAILS_SUCCESS:
      return { loading: false, adminAllCustomersInfo: action.payload };
    case ADMIN_ALL_CUSTOMERS_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
