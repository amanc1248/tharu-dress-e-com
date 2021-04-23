import axios from "axios";
import {
  TAILOR_LOGIN_FAIL,
  TAILOR_LOGIN_REQUEST,
  TAILOR_LOGIN_SUCCESS,
  TAILOR_LOGOUT,
  TAILOR_ORDERS_DETAILS_FAIL,
  TAILOR_ORDERS_DETAILS_REQUEST,
  TAILOR_ORDERS_DETAILS_SUCCESS,
  TAILOR_REGISTER_FAIL,
  TAILOR_REGISTER_REQUEST,
  TAILOR_REGISTER_SUCCESS,
  TAILOR_SALES_DETAILS_FAIL,
  TAILOR_SALES_DETAILS_REQUEST,
  TAILOR_SALES_DETAILS_SUCCESS,
} from "../constants/tailorConstants";

export const tailorLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: TAILOR_LOGIN_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/tailor/tailorsignin",
      { email, password },
      config
    );
    dispatch({ type: TAILOR_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("tailorInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TAILOR_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const tailorLogout = () => (dispatch) => {
  localStorage.removeItem("tailorInfo");
  dispatch({
    type: TAILOR_LOGOUT,
  });
};

export const tailorRegisterAction = (
  first_name,
  last_name,
  email,
  phone,
  city,
  street,
  noEmployees,
  password
) => async (dispatch) => {
  try {
    dispatch({
      type: TAILOR_REGISTER_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/tailor/tailorRegister",
      {
        first_name,
        last_name,
        email,
        phone,
        city,
        street,
        noEmployees,
        password,
      },
      config
    );
    dispatch({
      type: TAILOR_REGISTER_SUCCESS,
      payload: data,
    });
    dispatch({
      type: TAILOR_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("tailorInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TAILOR_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const tailorSalesDetailsAction = (tailorId) => async (dispatch) => {
  console.log("action tailId" + tailorId);
  try {
    dispatch({
      type: TAILOR_SALES_DETAILS_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/api/tailor/tailorSales/${tailorId}`,
      config
    );
    dispatch({
      type: TAILOR_SALES_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAILOR_SALES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const tailorOrdersAction = (tailorId) => async (dispatch) => {
  try {
    dispatch({
      type: TAILOR_ORDERS_DETAILS_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/api/tailor/tailorOrders/${tailorId}`,
      config
    );
    dispatch({
      type: TAILOR_ORDERS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAILOR_ORDERS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
