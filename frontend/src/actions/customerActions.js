import axios from "axios";
import {
  CUSTOMER_DETAILS_FAIL,
  CUSTOMER_DETAILS_REQUEST,
  CUSTOMER_DETAILS_SUCCESS,
} from "../constants/customerConstants";
export const customerDetailsAction = (customerId) => async (dispatch) => {
  try {
    dispatch({
      type: CUSTOMER_DETAILS_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/customer/${customerId}`, config);
    dispatch({
      type: CUSTOMER_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CUSTOMER_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
