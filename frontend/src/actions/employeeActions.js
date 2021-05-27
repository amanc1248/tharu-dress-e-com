import axios from "axios";
import {
  EMPLOYEE_CUSTOMERS_DETAILS_FAIL,
  EMPLOYEE_CUSTOMERS_DETAILS_REQUEST,
  EMPLOYEE_CUSTOMERS_DETAILS_SUCCESS,
  EMPLOYEE_DETAILS_FAIL,
  EMPLOYEE_DETAILS_REQUEST,
  EMPLOYEE_DETAILS_SUCCESS,
  EMPLOYEE_LOGIN_FAIL,
  EMPLOYEE_LOGIN_REQUEST,
  EMPLOYEE_LOGIN_SUCCESS,
  EMPLOYEE_LOGOUT,
  EMPLOYEE_PRODUCT_ORDERS_DETAILS_FAIL,
  EMPLOYEE_PRODUCT_ORDERS_DETAILS_REQUEST,
  EMPLOYEE_PRODUCT_ORDERS_DETAILS_SUCCESS,
  EMPLOYEE_REGISTER_FAIL,
  EMPLOYEE_REGISTER_REQUEST,
  EMPLOYEE_REGISTER_SUCCESS,
  EMPLOYEE_UPDATE_PROFILE_REQUEST,
  EMPLOYEE_UPDATE_PROFILE_SUCCESS,
} from "../constants/employeeConstants";

export const employeeLoginAction = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_LOGIN_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/employee/employeeSignin",
      { email, password },
      config
    );
    dispatch({ type: EMPLOYEE_LOGIN_SUCCESS, payload: data });
    localStorage.setItem("employeeInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: EMPLOYEE_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const employeeRegisterAction =
  (
    first_name,
    last_name,
    phone,
    email,
    city,
    street,
    tailorStoreId,
    password,
    confirmPassword
  ) =>
  async (dispatch) => {
    try {
      dispatch({
        type: EMPLOYEE_REGISTER_REQUEST,
      });
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.post(
        "/api/employee/employeeRegister",
        {
          first_name,
          last_name,
          phone,
          email,
          city,
          street,
          tailorStoreId,
          password,
          confirmPassword,
        },
        config
      );
      dispatch({
        type: EMPLOYEE_REGISTER_SUCCESS,
        payload: data,
      });
      dispatch({
        type: EMPLOYEE_LOGIN_SUCCESS,
        payload: data,
      });
      localStorage.setItem("employeeInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: EMPLOYEE_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const employeeLogout = () => (dispatch) => {
  localStorage.removeItem("employeeInfo");
  dispatch({
    type: EMPLOYEE_LOGOUT,
  });
};

export const employeeProductOrdersAction =
  (employee_id) => async (dispatch) => {
    try {
      dispatch({
        type: EMPLOYEE_PRODUCT_ORDERS_DETAILS_REQUEST,
      });
      const config = {
        header: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios.get(
        `/api/employee/employeeOrderProducts/${employee_id}`,
        config
      );
      dispatch({
        type: EMPLOYEE_PRODUCT_ORDERS_DETAILS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: EMPLOYEE_PRODUCT_ORDERS_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const employeeCustomersAction = (employee_id) => async (dispatch) => {
  try {
    dispatch({
      type: EMPLOYEE_CUSTOMERS_DETAILS_REQUEST,
    });
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `/api/employee/employeeCustomers/${employee_id}`,
      config
    );
    dispatch({
      type: EMPLOYEE_CUSTOMERS_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_CUSTOMERS_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getEmployeeDetails = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: EMPLOYEE_DETAILS_REQUEST,
    });

    const {
      employeeLogin: { employeeInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${employeeInfo.employeetoken}`,
      },
    };

    const { data } = await axios.get(`/api/employee/${id}`, config);
    dispatch({
      type: EMPLOYEE_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: EMPLOYEE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateEmployeeProfile =
  (employee) => async (dispatch, getState) => {
    try {
      dispatch({
        type: EMPLOYEE_UPDATE_PROFILE_REQUEST,
      });

      const {
        employeeLogin: { employeeInfo },
      } = getState();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${employeeInfo.employeetoken}`,
        },
      };

      const { data } = await axios.put(
        "/api/employee/profile",
        employee,
        config
      );
      dispatch({
        type: EMPLOYEE_UPDATE_PROFILE_SUCCESS,
        payload: data,
      });
      localStorage.setItem("employeeInfo", JSON.stringify(data));
    } catch (error) {
      dispatch({
        type: EMPLOYEE_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
