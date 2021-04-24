import axios from "axios";
import {
  TAILOR_CUSTOMERS_DETAILS_FAIL,
  TAILOR_CUSTOMERS_DETAILS_REQUEST,
  TAILOR_CUSTOMERS_DETAILS_SUCCESS,
  TAILOR_DETAILS_FAIL,
  TAILOR_DETAILS_REQUEST,
  TAILOR_DETAILS_SUCCESS,
  TAILOR_EMPLOYEES_DETAILS_FAIL,
  TAILOR_EMPLOYEES_DETAILS_REQUEST,
  TAILOR_EMPLOYEES_DETAILS_SUCCESS,
  TAILOR_LOGIN_FAIL,
  TAILOR_LOGIN_REQUEST,
  TAILOR_LOGIN_SUCCESS,
  TAILOR_LOGOUT,
  TAILOR_ORDERS_DETAILS_FAIL,
  TAILOR_ORDERS_DETAILS_REQUEST,
  TAILOR_ORDERS_DETAILS_SUCCESS,
  TAILOR_PRODUCTS_DETAILS_FAIL,
  TAILOR_PRODUCTS_DETAILS_REQUEST,
  TAILOR_PRODUCTS_DETAILS_SUCCESS,
  TAILOR_REGISTER_FAIL,
  TAILOR_REGISTER_REQUEST,
  TAILOR_REGISTER_SUCCESS,
  TAILOR_SALES_DETAILS_FAIL,
  TAILOR_SALES_DETAILS_REQUEST,
  TAILOR_SALES_DETAILS_SUCCESS,
  TAILOR_UPDATE_PROFILE_REQUEST,
  TAILOR_UPDATE_PROFILE_SUCCESS,
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

export const getTailorDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TAILOR_DETAILS_REQUEST,
    });

    const {
      tailorLogin: { tailorInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tailorInfo.token}`,
      },
    };

    const { data } = await axios.get(`/api/tailor/${id}`, config);
    dispatch({
      type: TAILOR_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAILOR_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateTailorProfile = (tailor) => async (dispatch, getState) => {
  try {
    dispatch({
      type: TAILOR_UPDATE_PROFILE_REQUEST,
    });

    const {
      tailorLogin: { tailorInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${tailorInfo.token}`,
      },
    };

    const { data } = await axios.put("/api/tailor/profile", tailor, config);
    dispatch({
      type: TAILOR_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
    localStorage.setItem("tailorInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: TAILOR_DETAILS_FAIL,
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

export const tailorProductsAction = (tailorId) => async (dispatch) => {
  try {
    dispatch({
      type: TAILOR_PRODUCTS_DETAILS_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/api/tailor/tailorProducts/${tailorId}`,
      config
    );
    dispatch({
      type: TAILOR_PRODUCTS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAILOR_PRODUCTS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
export const tailorCustomersAction = (tailorId) => async (dispatch) => {
  try {
    dispatch({
      type: TAILOR_CUSTOMERS_DETAILS_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/api/tailor/tailorCustomers/${tailorId}`,
      config
    );
    dispatch({
      type: TAILOR_CUSTOMERS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAILOR_CUSTOMERS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const tailorEmployeesAction = (tailorId) => async (dispatch) => {
  try {
    dispatch({
      type: TAILOR_EMPLOYEES_DETAILS_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/api/tailor/tailorEmployees/${tailorId}`,
      config
    );
    dispatch({
      type: TAILOR_EMPLOYEES_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: TAILOR_EMPLOYEES_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
