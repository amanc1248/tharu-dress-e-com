import {
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
