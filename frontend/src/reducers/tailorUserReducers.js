import {
  TAILOR_LOGIN_FAIL,
  TAILOR_LOGIN_REQUEST,
  TAILOR_LOGIN_SUCCESS,
  TAILOR_LOGOUT,
} from "../constants/tailorConstants";

export const tailorLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case TAILOR_LOGIN_REQUEST:
      return { loading: true };
    case TAILOR_LOGIN_SUCCESS:
      return { loading: false, tailorInfo: action.payload };
    case TAILOR_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case TAILOR_LOGOUT:
      return {};
    default:
      return state;
  }
};
