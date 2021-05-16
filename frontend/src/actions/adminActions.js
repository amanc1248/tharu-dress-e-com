import axios from "axios";
import {
  ADMIN_ALL_CUSTOMERS_DETAILS_FAIL,
  ADMIN_ALL_CUSTOMERS_DETAILS_REQUEST,
  ADMIN_ALL_CUSTOMERS_DETAILS_SUCCESS,
  ADMIN_DASHBOARD_DETAILS_FAIL,
  ADMIN_DASHBOARD_DETAILS_REQUEST,
  ADMIN_DASHBOARD_DETAILS_SUCCESS,
} from "../constants/adminConstants";

export const adminDashBoardDetailsAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_DASHBOARD_DETAILS_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/admin/dashboard`, config);
    dispatch({
      type: ADMIN_DASHBOARD_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_DASHBOARD_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const adminAllCustomersDetailAction = () => async (dispatch) => {
  try {
    dispatch({
      type: ADMIN_ALL_CUSTOMERS_DETAILS_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(`/api/admin/allCustomers`, config);
    dispatch({
      type: ADMIN_ALL_CUSTOMERS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ADMIN_ALL_CUSTOMERS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
